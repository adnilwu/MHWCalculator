/**
 * Fitting Algorithm
 *
 * @package     MHW Calculator
 * @author      Scar Wu
 * @copyright   Copyright (c) Scar Wu (http://scar.tw)
 * @link        https://github.com/scarwu/MHWCalculator
 */

// Load Libraries
import MD5 from 'md5';

// Load Core
import Helper from 'core/helper';

// Load Custom Libraries
import ArmorDataset from 'libraries/dataset/armor';
import SetDataset from 'libraries/dataset/set';
import JewelDataset from 'libraries/dataset/jewel';
import CharmDataset from 'libraries/dataset/charm';
import CommonDataset from 'libraries/dataset/common';

// Load Constant
import Constant from 'constant';

class FittingAlgorithm {

    /**
     * Search
     */
    search = (requiredSets, requiredSkills, requiredEquips, algorithmParams) => {
        if (0 === requiredSets.length
            && 0 === requiredSkills.length
        ) {
            return [];
        }

        Helper.log('Input: Required Sets', requiredSets);
        Helper.log('Input: Required Skills', requiredSkills);
        Helper.log('Input: Required Equips', requiredEquips);
        Helper.log('Input: Algorithm Params', algorithmParams);

        this.algorithmParams = algorithmParams;
        this.conditionEquips = [];
        this.conditionSets = {};
        this.conditionSkills = {};
        this.correspondJewelsBySkill = {};
        this.correspondJewelsBySize = {};
        this.firstBundle = {};
        this.skipSkills = {};
        this.usedEquips = {};
        this.usedEquipTypes = {};
        this.conditionExpectedValue = 0;
        this.conditionExpectedLevel = 0;
        this.maxEquipsExpectedValue = {};
        this.maxEquipsExpectedLevel = {};
        this.maxSlotsSkillLevel = {
            1: 0,
            2: 0,
            3: 0,
            4: 0
        };

        // Init Condtions
        this.initConditionSets(requiredSets);
        this.initConditionSkills(requiredSkills);
        this.initConditionEquips(requiredEquips);

        this.requireSkillCount = Object.keys(this.conditionSkills).length;
        this.requireSetCount = Object.keys(this.conditionSets).length;
        this.requireEquipCount = this.conditionEquips.length;

        // Print Init Information
        Helper.log('Init: Condition Skills:', this.conditionSkills);
        Helper.log('Init: Condition Sets:', this.conditionSets);
        Helper.log('Init: Condition Equips:', this.conditionEquips);
        Helper.log('Init: First Bundle:', this.firstBundle);
        Helper.log('Init: Correspond Jewels By Skill:', this.correspondJewelsBySkill);
        Helper.log('Init: Correspond Jewels By Size:', this.correspondJewelsBySize);
        Helper.log('Init: Condition Expected Value:', this.conditionExpectedValue);
        Helper.log('Init: Condition Expected Level:', this.conditionExpectedLevel);
        Helper.log('Init: Max Slots Skill Level:', this.maxSlotsSkillLevel);

        // Init Bundle Pool
        let bundlePool = {};

        bundlePool[this.getBundleHash(this.firstBundle)] = this.firstBundle;

        // Create Bundle Pool with Set Equips
        if (0 !== Object.keys(this.conditionSets).length) {
            bundlePool = this.createBundlePoolWithSetEquips(bundlePool);

            // Sets Require Equips is Overflow
            if (0 === Object.keys(bundlePool).length) {
                return [];
            }
        }

        // Create Bundle Pool with Set Equips
        if (0 !== Object.keys(this.conditionSkills).length) {
            bundlePool = this.createBundlePoolWithSkillEquips(bundlePool);

            // Sets Require Equips is Overflow
            if (0 === Object.keys(bundlePool).length) {
                return [];
            }
        }

        // Create Sorted Bundle List & Limit Quantity
        return this.createSortedBundleList(bundlePool)
            .slice(0, this.algorithmParams.limit);
    };

    /**
     * Generate Bundle Hash
     */
    getBundleHash = (bundle) => {
        let equips = {};
        let jewels = {};

        Object.keys(bundle.equips).forEach((equipType) => {
            if (Helper.isEmpty(bundle.equips[equipType])) {
                return;
            }

            equips[equipType] = bundle.equips[equipType];
        });

        Object.keys(bundle.jewels).sort().forEach((jewelId) => {
            if (0 === bundle.jewels[jewelId]) {
                return;
            }

            jewels[jewelId] = bundle.jewels[jewelId];
        });

        return MD5(JSON.stringify([equips, jewels]));
    };

    /**
     * Init Condition Sets
     */
    initConditionSets = (requiredSets) => {
        requiredSets.sort((setA, setB) => {
            let setInfoA = SetDataset.getInfo(setA.id);
            let setInfoB = SetDataset.getInfo(setB.id);

            if (Helper.isEmpty(setInfoA) || Helper.isEmpty(setInfoB)) {
                return 0;
            }

            return setInfoB.skills.pop().require - setInfoA.skills.pop().require;
        }).forEach((set) => {
            let setInfo = SetDataset.getInfo(set.id);

            if (Helper.isEmpty(setInfo)) {
                return;
            }

            this.conditionSets[set.id] = setInfo.skills[set.step - 1].require;
        });
    };

    /**
     * Init Condition Skills
     */
    initConditionSkills = (requiredSkills) => {
        requiredSkills.sort((skillA, skillB) => {
            return skillB.level - skillA.level;
        }).forEach((skill) => {
            if (0 === skill.level) {
                this.skipSkills[skill.id] = true;

                return;
            }

            this.conditionSkills[skill.id] = skill.level;

            let minJewelSize = 5;

            JewelDataset.hasSkill(skill.id).getItems().sort((jewelInfoA, jewelInfoB) => {
                return jewelInfoA.size - jewelInfoB.size;
            }).forEach((jewelInfo) => {

                // Check is Using Factor Jewel
                if (false === this.algorithmParams.usingFactor.jewel[jewelInfo.size]) {
                    return;
                }

                let isConsistent = true;

                jewelInfo.skills.forEach((skill) => {
                    if (false === isConsistent) {
                        return;
                    }

                    // If Skill not match condition then skip
                    if (Helper.isEmpty(this.conditionSkills[skill.id])) {
                        if (this.algorithmParams.flag.isRequireConsistent) {
                            isConsistent = false;
                        }

                        return;
                    }

                    if (this.maxSlotsSkillLevel[jewelInfo.size] < skill.level) {
                        this.maxSlotsSkillLevel[jewelInfo.size] = skill.level;
                    }
                });

                if (false === isConsistent) {
                    return;
                }

                if (minJewelSize > jewelInfo.size) {
                    minJewelSize = jewelInfo.size;
                }

                let correspondJewel = {
                    id: jewelInfo.id,
                    size: jewelInfo.size,
                    skills: jewelInfo.skills.map((skill) => {
                        return {
                            id: skill.id,
                            level: skill.level
                        };
                    })
                };

                if (Helper.isEmpty(this.correspondJewelsBySkill[skill.id])) {
                    this.correspondJewelsBySkill[skill.id] = []
                }

                if (Helper.isEmpty(this.correspondJewelsBySize[jewelInfo.size])) {
                    this.correspondJewelsBySize[jewelInfo.size] = []
                }

                this.correspondJewelsBySkill[skill.id].push(correspondJewel);
                this.correspondJewelsBySize[jewelInfo.size].push(correspondJewel);
            });

            // Increase Expected Value & Level
            this.conditionExpectedValue += skill.level * minJewelSize;
            this.conditionExpectedLevel += skill.level;
        });
    };

    /**
     * Init Condition Equips
     */
    initConditionEquips = (requiredEquips) => {
        let firstBundle = Helper.deepCopy(Constant.default.bundle);

        // Create First Bundle
        ['weapon', 'helm', 'chest', 'arm', 'waist', 'leg', 'charm'].forEach((equipType) => {
            if (Helper.isEmpty(requiredEquips[equipType])) {
                if ('weapon' !== equipType) {
                    this.conditionEquips.push(equipType);
                }

                return;
            }

            // Get Equip Info
            let equipInfo = null;

            if ('weapon' === equipType) {
                equipInfo = CommonDataset.getAppliedWeaponInfo(requiredEquips.weapon);
            } else if ('helm' === equipType
                || 'chest' === equipType
                || 'arm' === equipType
                || 'waist' === equipType
                || 'leg' === equipType
            ) {
                equipInfo = CommonDataset.getAppliedArmorInfo(requiredEquips[equipType]);
            } else if ('charm' === equipType) {
                equipInfo = CommonDataset.getAppliedCharmInfo(requiredEquips.charm);
            }

            // Check Equip Info
            if (Helper.isEmpty(equipInfo)) {
                return;
            }

            // Convert Equip to Candidate Equip
            let candidateEquip = this.convertEquipInfoToCandidateEquip(equipInfo, equipType);

            if (false === candidateEquip) {
                return;
            }

            // Set Used Candidate Equip
            this.usedEquips[candidateEquip.id] = true;

            // Add Candidate Equip to Bundle
            firstBundle = this.addCandidateEquipToBundle(firstBundle, candidateEquip);

            // Add Jewels info to Bundle
            if (Helper.isNotEmpty(equipInfo.slots)) {
                equipInfo.slots.forEach((slot) => {
                    if (Helper.isEmpty(slot.jewel.id)) {
                        return;
                    }

                    if (Helper.isEmpty(firstBundle.jewels[slot.jewel.id])) {
                        firstBundle.jewels[slot.jewel.id] = 0;
                    }

                    firstBundle.jewels[slot.jewel.id] += 1;
                    firstBundle.meta.remainingSlotCount[slot.size] -= 1;
                    firstBundle.meta.remainingSlotCount.all -= 1;
                });
            }
        });

        // Reset Equip Count
        firstBundle.meta.equipCount = 0;

        this.firstBundle = firstBundle;
    };

    /**
     * Create Bundle Pool with Set Equips
     */
    createBundlePoolWithSetEquips = (initBundlePool) => {
        let candidateEquipPool = {};
        let lastBundlePool = {};

        // Init Set Equips
        Helper.log('Init Set Equips');

        this.conditionEquips.forEach((equipType) => {
            if ('charm' === equipType) {
                return;
            }

            if (Helper.isEmpty(candidateEquipPool[equipType])) {
                candidateEquipPool[equipType] = {};
            }

            // Create Candidate Equips
            Object.keys(this.conditionSets).forEach((setId) => {
                let equipInfos = ArmorDataset.typeIs(equipType).setIs(setId).getItems();

                // Merge Candidate Equips
                candidateEquipPool[equipType] = Object.assign(
                    candidateEquipPool[equipType],
                    this.createCandidateEquips(equipInfos, equipType)
                );
            });

            // Append Empty Candidate Equip
            candidateEquipPool[equipType]['empty'] = this.getEmptyCandidateEquip(equipType);

            Helper.log('Candidate Equip Pool:', equipType, Object.keys(candidateEquipPool[equipType]).length, candidateEquipPool[equipType]);
        });

        // Create Bundle Pool With Set Equips
        Helper.log('Create Bundle Pool With Set Equips');

        let typeList = [];

        for (const [equipType, candidateEquips] of Object.entries(candidateEquipPool)) {
            typeList.push(equipType);

            candidateEquipPool[equipType] = Object.values(candidateEquips);
        }

        candidateEquipPool = Object.values(candidateEquipPool);

        Object.values(initBundlePool).forEach((bundle) => {
            let traversalCount = 0;
            let typeIndex = 0;
            let equipIndex = 0;
            let candidateEquip = null;
            let statusStack = [];

            // Push Root Bundle
            statusStack.push({
                bundle: bundle,
                equipIndex: 0
            });

            Helper.log('Root Bundle:', bundle);

            while (true) {
                bundle = statusStack[typeIndex].bundle;
                equipIndex = statusStack[typeIndex].equipIndex;
                candidateEquip = candidateEquipPool[typeIndex][equipIndex];
                traversalCount++;

                if (0 === traversalCount % 1000) {
                    Helper.log('Traversal Count:', traversalCount);
                }

                // Add Candidate Equip to Bundle
                if (Helper.isEmpty(bundle.equips[typeList[typeIndex]])
                    && Helper.isNotEmpty(candidateEquip.id)
                ) {
                    bundle = this.addCandidateEquipToBundle(bundle, candidateEquip);

                    // If Add Candidate Equip Failed
                    if (false === bundle) {
                        if (Helper.isNotEmpty(candidateEquipPool[typeIndex][equipIndex + 1])) {
                            statusStack[typeIndex].equipIndex++;
                        } else {
                            while (true) {
                                typeIndex--;
                                statusStack.pop();

                                if (0 === statusStack.length) {
                                    break;
                                }

                                equipIndex = statusStack[typeIndex].equipIndex;

                                if (Helper.isNotEmpty(candidateEquipPool[typeIndex][equipIndex + 1])) {
                                    statusStack[typeIndex].equipIndex++;

                                    break;
                                }
                            }
                        }

                        continue;
                    }

                    // Check Bundle Sets
                    if (this.isBundleSetCompleted(bundle)) {
                        lastBundlePool[this.getBundleHash(bundle)] = bundle;

                        if (Helper.isNotEmpty(candidateEquipPool[typeIndex][equipIndex + 1])) {
                            statusStack[typeIndex].equipIndex++;
                        } else {
                            while (true) {
                                typeIndex--;
                                statusStack.pop();

                                if (0 === statusStack.length) {
                                    break;
                                }

                                equipIndex = statusStack[typeIndex].equipIndex;

                                if (Helper.isNotEmpty(candidateEquipPool[typeIndex][equipIndex + 1])) {
                                    statusStack[typeIndex].equipIndex++;

                                    break;
                                }
                            }
                        }

                        continue;
                    }
                }

                if (Helper.isNotEmpty(candidateEquipPool[typeIndex + 1])) {
                    typeIndex++;
                    statusStack.push({
                        bundle: bundle,
                        equipIndex: 0
                    });

                    continue;
                } else if (Helper.isNotEmpty(candidateEquipPool[typeIndex][equipIndex + 1])) {
                    statusStack[typeIndex].equipIndex++;

                    continue;
                }

                while (true) {
                    typeIndex--;
                    statusStack.pop();

                    if (0 === statusStack.length) {
                        break;
                    }

                    equipIndex = statusStack[typeIndex].equipIndex;

                    if (Helper.isNotEmpty(candidateEquipPool[typeIndex][equipIndex + 1])) {
                        statusStack[typeIndex].equipIndex++;

                        break;
                    }
                }

                if (0 === statusStack.length) {
                    break;
                }
            }

            Helper.log('Traversal Count:', traversalCount);
        });

        Helper.log('Last Bundle Result:', Object.keys(lastBundlePool).length, lastBundlePool);

        return lastBundlePool;
    };

    /**
     * Create Bundle Pool with Skill Equips
     */
    createBundlePoolWithSkillEquips = (initBundlePool) => {
        let candidateEquipPool = {};
        let lastBundlePool = {};

        // Init Skill Equips
        Helper.log('Init Skill Equips');

        this.conditionEquips.forEach((equipType) => {
            if (Helper.isEmpty(candidateEquipPool[equipType])) {
                candidateEquipPool[equipType] = {};
            }

            // Create Candidate Equips
            Object.keys(this.conditionSkills).forEach((skillId) => {
                let equipInfos = null;

                if ('helm' === equipType
                    || 'chest' === equipType
                    || 'arm' === equipType
                    || 'waist' === equipType
                    || 'leg' === equipType
                ) {
                    equipInfos = ArmorDataset.typeIs(equipType).hasSkill(skillId).getItems();
                } else if ('charm' === equipType) {
                    equipInfos = CharmDataset.hasSkill(skillId).getItems();
                }

                // Merge Candidate Equips
                candidateEquipPool[equipType] = Object.assign(
                    candidateEquipPool[equipType],
                    this.createCandidateEquips(equipInfos, equipType)
                );

                if ('charm' !== equipType) {
                    equipInfos = ArmorDataset.typeIs(equipType).rareIs(0).getItems();

                    // Merge Candidate Equips
                    candidateEquipPool[equipType] = Object.assign(
                        candidateEquipPool[equipType],
                        this.createCandidateEquips(equipInfos, equipType)
                    );
                }
            });

            // Append Empty Candidate Equip
            candidateEquipPool[equipType]['empty'] = this.getEmptyCandidateEquip(equipType);

            Helper.log('Candidate Equip Pool:', equipType, Object.keys(candidateEquipPool[equipType]).length, candidateEquipPool[equipType]);
        });

        // Get Maximum Equips EV & EL
        Helper.log('Get Maximum Equips EV & EL');

        for (const [equipType, candidateEquips] of Object.entries(candidateEquipPool)) {
            if (Helper.isEmpty(this.maxEquipsExpectedValue[equipType])) {
                this.maxEquipsExpectedValue[equipType] = 0;
            }

            if (Helper.isEmpty(this.maxEquipsExpectedLevel[equipType])) {
                this.maxEquipsExpectedLevel[equipType] = 0;
            }

            Object.values(candidateEquips).forEach((candidateEquip) => {
                if (this.maxEquipsExpectedValue[equipType] < candidateEquip.expectedValue) {
                    this.maxEquipsExpectedValue[equipType] = candidateEquip.expectedValue;
                }

                if (this.maxEquipsExpectedLevel[equipType] < candidateEquip.expectedLevel) {
                    this.maxEquipsExpectedLevel[equipType] = candidateEquip.expectedLevel;
                }
            });
        }

        Helper.log('Init: Max Equips Expected Value:', this.maxEquipsExpectedValue);
        Helper.log('Init: Max Equips Expected Level:', this.maxEquipsExpectedLevel);

        // Create Bundle Pool With Skill Equips
        Helper.log('Create Bundle Pool With Skill Equips');

        let typeList = [];

        for (const [equipType, candidateEquips] of Object.entries(candidateEquipPool)) {
            typeList.push(equipType);

            candidateEquipPool[equipType] = Object.values(candidateEquips);
        }

        candidateEquipPool = Object.values(candidateEquipPool);

        let isEndEarly = false;

        Object.values(initBundlePool).forEach((bundle) => {
            if (isEndEarly) {
                return;
            }

            let traversalCount = 0;
            let typeIndex = 0;
            let equipIndex = 0;
            let candidateEquip = null;
            let statusStack = [];

            // Push Root Bundle
            statusStack.push({
                bundle: bundle,
                equipIndex: 0
            });

            Helper.log('Root Bundle:', bundle);

            while (true) {
                if (isEndEarly) {
                    break;
                }

                bundle = statusStack[typeIndex].bundle;
                equipIndex = statusStack[typeIndex].equipIndex;
                candidateEquip = candidateEquipPool[typeIndex][equipIndex];
                traversalCount++;

                if (0 === traversalCount % 1000) {
                    Helper.log('Traversal Count:', traversalCount);
                }

                // Add Candidate Equip to Bundle
                if (Helper.isEmpty(bundle.equips[typeList[typeIndex]])
                    && Helper.isNotEmpty(candidateEquip.id)
                ) {
                    bundle = this.addCandidateEquipToBundle(bundle, candidateEquip);

                    // If Add Candidate Equip Failed
                    if (false === bundle) {
                        if (Helper.isNotEmpty(candidateEquipPool[typeIndex][equipIndex + 1])) {
                            statusStack[typeIndex].equipIndex++;
                        } else {
                            while (true) {
                                typeIndex--;
                                statusStack.pop();

                                if (0 === statusStack.length) {
                                    break;
                                }

                                equipIndex = statusStack[typeIndex].equipIndex;

                                if (Helper.isNotEmpty(candidateEquipPool[typeIndex][equipIndex + 1])) {
                                    statusStack[typeIndex].equipIndex++;

                                    break;
                                }
                            }
                        }

                        continue;
                    }

                    // Check Bundle Skills
                    if (this.isBundleSkillCompleted(bundle)) {
                        lastBundlePool[this.getBundleHash(bundle)] = bundle;

                        // Last Bundle Pre Check
                        if (this.algorithmParams.flag.isEndEarly) {
                            Helper.log('Last Bundle Count:', Object.keys(lastBundlePool).length);

                            if (this.algorithmParams.limit <= Object.keys(lastBundlePool).length) {
                                isEndEarly = true;
                            }
                        }

                        if (Helper.isNotEmpty(candidateEquipPool[typeIndex][equipIndex + 1])) {
                            statusStack[typeIndex].equipIndex++;
                        } else {
                            while (true) {
                                typeIndex--;
                                statusStack.pop();

                                if (0 === statusStack.length) {
                                    break;
                                }

                                equipIndex = statusStack[typeIndex].equipIndex;

                                if (Helper.isNotEmpty(candidateEquipPool[typeIndex][equipIndex + 1])) {
                                    statusStack[typeIndex].equipIndex++;

                                    break;
                                }
                            }
                        }

                        continue;
                    }

                    // Check Bundle Expected
                    if (this.isBundleExpected(bundle)) {

                        // Create Completed Bundles By Skills
                        this.createCompletedBundlesBySkills(bundle).forEach((bundle) => {
                            if (true === isEndEarly) {
                                return;
                            }

                            lastBundlePool[this.getBundleHash(bundle)] = bundle;

                            // Last Bundle Pre Check
                            if (this.algorithmParams.flag.isEndEarly) {
                                Helper.log('Last Bundle Count:', Object.keys(lastBundlePool).length);

                                if (this.algorithmParams.limit <= Object.keys(lastBundlePool).length) {
                                    isEndEarly = true;
                                }
                            }
                        });

                        if (Helper.isNotEmpty(candidateEquipPool[typeIndex][equipIndex + 1])) {
                            statusStack[typeIndex].equipIndex++;
                        } else {
                            while (true) {
                                typeIndex--;
                                statusStack.pop();

                                if (0 === statusStack.length) {
                                    break;
                                }

                                equipIndex = statusStack[typeIndex].equipIndex;

                                if (Helper.isNotEmpty(candidateEquipPool[typeIndex][equipIndex + 1])) {
                                    statusStack[typeIndex].equipIndex++;

                                    break;
                                }
                            }
                        }

                        continue;
                    }

                    // Check Bundle Have a Future
                    if (this.algorithmParams.flag.isExpectBundle) {
                        if (false === this.isBundleHaveFuture(bundle, typeList.slice(0, typeIndex + 1))) {
                            if (Helper.isNotEmpty(candidateEquipPool[typeIndex][equipIndex + 1])) {
                                statusStack[typeIndex].equipIndex++;
                            } else {
                                while (true) {
                                    typeIndex--;
                                    statusStack.pop();

                                    if (0 === statusStack.length) {
                                        break;
                                    }

                                    equipIndex = statusStack[typeIndex].equipIndex;

                                    if (Helper.isNotEmpty(candidateEquipPool[typeIndex][equipIndex + 1])) {
                                        statusStack[typeIndex].equipIndex++;

                                        break;
                                    }
                                }
                            }

                            continue;
                        }
                    }
                }

                if (Helper.isNotEmpty(candidateEquipPool[typeIndex + 1])) {
                    typeIndex++;
                    statusStack.push({
                        bundle: bundle,
                        equipIndex: 0
                    });

                    continue;
                } else if (Helper.isNotEmpty(candidateEquipPool[typeIndex][equipIndex + 1])) {
                    statusStack[typeIndex].equipIndex++;

                    continue;
                }

                while (true) {
                    typeIndex--;
                    statusStack.pop();

                    if (0 === statusStack.length) {
                        break;
                    }

                    equipIndex = statusStack[typeIndex].equipIndex;

                    if (Helper.isNotEmpty(candidateEquipPool[typeIndex][equipIndex + 1])) {
                        statusStack[typeIndex].equipIndex++;

                        break;
                    }
                }

                if (0 === statusStack.length) {
                    break;
                }
            }

            Helper.log('Traversal Count:', traversalCount);
        });

        Helper.log('Last Bundle Result:', Object.keys(lastBundlePool).length, lastBundlePool);

        return lastBundlePool;
    }

    /**
     * Create Sorted Bundle List
     */
    createSortedBundleList = (bundlePool) => {
        switch (this.algorithmParams.sort) {
        case 'complex':
            return Object.values(bundlePool).sort((bundleA, bundleB) => {
                let valueA = (8 - bundleA.meta.equipCount) * 1000 + bundleA.meta.defense;
                let valueB = (8 - bundleB.meta.equipCount) * 1000 + bundleB.meta.defense;

                return ('asc' === this.algorithmParams.order)
                    ? (valueA - valueB) : (valueB - valueA);
            }).map((bundle) => {
                bundle.sortedBy = {
                    key: this.algorithmParams.sort,
                    value: (8 - bundle.meta.equipCount) * 1000 + bundle.meta.defense
                };
                bundle.hash = this.getBundleHash(bundle);

                return bundle;
            });
        case 'defense':
            return Object.values(bundlePool).sort((bundleA, bundleB) => {
                let valueA = bundleA.meta.defense;
                let valueB = bundleB.meta.defense;

                return ('asc' === this.algorithmParams.order)
                    ? (valueA - valueB) : (valueB - valueA);
            }).map((bundle) => {
                bundle.sortedBy = {
                    key: this.algorithmParams.sort,
                    value: bundle.meta.defense
                };
                bundle.hash = this.getBundleHash(bundle);

                return bundle;
            });
        case 'fire':
        case 'water':
        case 'thunder':
        case 'ice':
        case 'dragon':
            return Object.values(bundlePool).sort((bundleA, bundleB) => {
                let valueA = bundleA.meta.resistance[this.algorithmParams.sort];
                let valueB = bundleB.meta.resistance[this.algorithmParams.sort];

                return ('asc' === this.algorithmParams.order)
                    ? (valueA - valueB) : (valueB - valueA);
            }).map((bundle) => {
                bundle.sortedBy = {
                    key: this.algorithmParams.sort,
                    value: bundle.meta.resistance[this.algorithmParams.sort]
                };
                bundle.hash = this.getBundleHash(bundle);

                return bundle;
            });
        case 'amount':
            return Object.values(bundlePool).sort((bundleA, bundleB) => {
                let valueA = bundleA.meta.equipCount;
                let valueB = bundleB.meta.equipCount;

                return ('asc' === this.algorithmParams.order)
                    ? (valueA - valueB) : (valueB - valueA);
            }).map((bundle) => {
                bundle.sortedBy = {
                    key: this.algorithmParams.sort,
                    value: bundle.meta.equipCount
                };
                bundle.hash = this.getBundleHash(bundle);

                return bundle;
            });
        case 'slot':
            return Object.values(bundlePool).sort((bundleA, bundleB) => {
                let valueA = bundleA.meta.remainingSlotCount.all;
                let valueB = bundleB.meta.remainingSlotCount.all;

                return ('asc' === this.algorithmParams.order)
                    ? (valueA - valueB) : (valueB - valueA);
            }).map((bundle) => {
                bundle.sortedBy = {
                    key: this.algorithmParams.sort,
                    value: bundle.meta.remainingSlotCount.all
                };
                bundle.hash = this.getBundleHash(bundle);

                return bundle;
            });
        case 'expectedValue':
            return Object.values(bundlePool).sort((bundleA, bundleB) => {
                let valueA = bundleA.meta.expectedValue;
                let valueB = bundleB.meta.expectedValue;

                return ('asc' === this.algorithmParams.order)
                    ? (valueA - valueB) : (valueB - valueA);
            }).map((bundle) => {
                bundle.sortedBy = {
                    key: this.algorithmParams.sort,
                    value: bundle.meta.expectedValue
                };
                bundle.hash = this.getBundleHash(bundle);

                return bundle;
            });
        case 'expectedLevel':
            return Object.values(bundlePool).sort((bundleA, bundleB) => {
                let valueA = bundleA.meta.expectedLevel;
                let valueB = bundleB.meta.expectedLevel;

                return ('asc' === this.algorithmParams.order)
                    ? (valueA - valueB) : (valueB - valueA);
            }).map((bundle) => {
                bundle.sortedBy = {
                    key: this.algorithmParams.sort,
                    value: bundle.meta.expectedLevel
                };
                bundle.hash = this.getBundleHash(bundle);

                return bundle;
            });
        default:
            return Object.map((bundle) => {
                bundle.hash = this.getBundleHash(bundle);

                return bundle;
            }).values(bundlePool);
        }
    };

    /**
     * Add Candidate Equip To Bundle
     */
    addCandidateEquipToBundle = (bundle, candidateEquip) => {
        if (Helper.isEmpty(candidateEquip.id)) {
            return false;
        }

        if (Helper.isNotEmpty(bundle.equips[candidateEquip.type])) {
            return false;
        }

        bundle = Helper.deepCopy(bundle);
        bundle.equips[candidateEquip.type] = candidateEquip.id;

        // Increase Skill
        let isSkillLevelOverflow = false;

        Object.keys(candidateEquip.skills).forEach((skillId) => {
            let skillLevel = candidateEquip.skills[skillId];

            if (Helper.isEmpty(bundle.skills[skillId])) {
                bundle.skills[skillId] = 0;
            }

            bundle.skills[skillId] += skillLevel;

            if (Helper.isNotEmpty(this.conditionSkills[skillId])) {
                if (this.conditionSkills[skillId] < bundle.skills[skillId]) {
                    isSkillLevelOverflow = true;
                }

                if (this.conditionSkills[skillId] === bundle.skills[skillId]) {
                    bundle.meta.completedSkills[skillId] = true;
                }
            }
        });

        if (true === isSkillLevelOverflow) {
            return false;
        }

        // Increase Set
        if (Helper.isNotEmpty(candidateEquip.setId)) {
            if (Helper.isEmpty(bundle.sets[candidateEquip.setId])) {
                bundle.sets[candidateEquip.setId] = 0;
            }

            bundle.sets[candidateEquip.setId] += 1;

            if (this.conditionSets[candidateEquip.setId] < bundle.sets[candidateEquip.setId]) {
                return false;
            }

            if (this.conditionSets[candidateEquip.setId] === bundle.sets[candidateEquip.setId]) {
                bundle.meta.completedSets[candidateEquip.setId] = true;
            }
        }

        // Increase Defense & Resistances
        bundle.meta.defense += candidateEquip.defense;
        bundle.meta.resistance.fire += candidateEquip.resistance.fire;
        bundle.meta.resistance.water += candidateEquip.resistance.water;
        bundle.meta.resistance.thunder += candidateEquip.resistance.thunder;
        bundle.meta.resistance.ice += candidateEquip.resistance.ice;
        bundle.meta.resistance.dragon += candidateEquip.resistance.dragon;

        // Increase Slot Count
        for (let size = 1; size <= 4; size++) {
            bundle.meta.remainingSlotCount[size] += candidateEquip.ownSlotCount[size];
            bundle.meta.remainingSlotCount.all += candidateEquip.ownSlotCount[size];
        }

        // Increase Equip Count
        bundle.meta.equipCount += 1;

        // Increase Expected Value & Level
        bundle.meta.expectedValue += candidateEquip.expectedValue;
        bundle.meta.expectedLevel += candidateEquip.expectedLevel;

        return bundle;
    };

    /**
     * Create Candidate Equips
     */
    createCandidateEquips = (equipInfos, equipType) => {
        let candidateEquipPool = {};

        equipInfos.forEach((equipInfo) => {

            // Check is Using Factor Armor
            if (false === this.algorithmParams.usingFactor.armor[equipInfo.rare]) {
                return;
            }

            // Convert Equip to Candidate Equip
            let candidateEquip = this.convertEquipInfoToCandidateEquip(equipInfo, equipType);

            if (false === candidateEquip) {
                return;
            }

            // Check is Skip Equips
            if (true === this.isCandidateEquipSkip(candidateEquip)) {
                return;
            }

            // Set Used Candidate Equip Id
            this.usedEquips[candidateEquip.id] = true;

            // Set Candidate Equip
            candidateEquipPool[candidateEquip.id] = candidateEquip;
        });

        return candidateEquipPool;
    };

    /**
     * Convert Equip Info To Candidate Equip
     */
    convertEquipInfoToCandidateEquip = (equipInfo, equipType) => {
        let candidateEquip = Helper.deepCopy(Constant.default.candidateEquip);

        // Set Id, Type & Defense
        candidateEquip.id = equipInfo.id;
        candidateEquip.type = ('charm' !== equipType && 'weapon' !== equipType) ? equipInfo.type : equipType;
        candidateEquip.defense = Helper.isNotEmpty(equipInfo.defense) ? equipInfo.defense : 0;
        candidateEquip.resistance = Helper.isNotEmpty(equipInfo.resistance) ? equipInfo.resistance : candidateEquip.resistance;
        candidateEquip.setId = Helper.isNotEmpty(equipInfo.set) ? equipInfo.set.id : null;

        if (Helper.isEmpty(equipInfo.skills)) {
            equipInfo.skills = [];
        }

        if (Helper.isEmpty(equipInfo.slots)) {
            equipInfo.slots = [];
        }

        let isConsistent = true;

        equipInfo.skills.forEach((skill) => {
            if (false === isConsistent) {
                return;
            }

            candidateEquip.skills[skill.id] = skill.level;

            // If Skill not match condition then skip
            if (Helper.isEmpty(this.conditionSkills[skill.id])) {
                if (this.algorithmParams.flag.isRequireConsistent) {
                    isConsistent = false;
                }

                return;
            }

            // Increase Expected Value & Level
            if (Helper.isNotEmpty(this.correspondJewelsBySkill[skill.id])) {
                let minJewelSize = 5;

                this.correspondJewelsBySkill[skill.id].forEach((jewel) => {
                    if (minJewelSize > jewel.size) {
                        minJewelSize = jewel.size;
                    }
                });

                candidateEquip.expectedValue += skill.level * minJewelSize;
                candidateEquip.expectedLevel += skill.level;
            }
        });

        if (false === isConsistent) {
            return false;
        }

        equipInfo.slots.forEach((slot) => {
            candidateEquip.ownSlotCount[slot.size] += 1;

            // Increase Expected Value & Level
            candidateEquip.expectedValue += slot.size;
            // candidateEquip.expectedLevel += 1;
            candidateEquip.expectedLevel += (0 < this.maxSlotsSkillLevel[slot.size])
                ? this.maxSlotsSkillLevel[slot.size] : 1;
        });

        return candidateEquip;
    };

    /**
     * Get Empty Candidate Equip
     */
    getEmptyCandidateEquip = (equipType) => {
        let candidateEquip = Helper.deepCopy(Constant.default.candidateEquip);

        candidateEquip.type = equipType;

        return candidateEquip;
    };

    /**
     * Create Completed Bundles By Skills
     */
    createCompletedBundlesBySkills = (bundle) => {
        if (0 === bundle.meta.remainingSlotCount.all) {
            return [];
        }

        let prevBundlePool = {};
        let nextBundlePool = {};

        // Init Prev Bundle Pool
        prevBundlePool[this.getBundleHash(bundle)] = bundle;

        Object.keys(this.conditionSkills).forEach((skillId) => {
            if (Helper.isEmpty(this.correspondJewelsBySkill[skillId])) {
                return;
            }

            // Create Next Bundle Pool
            nextBundlePool = {};

            Object.keys(prevBundlePool).forEach((hash) => {
                this.correspondJewelsBySkill[skillId].forEach((jewel) => {
                    let bundle = Helper.deepCopy(prevBundlePool[hash]);

                    if (Helper.isEmpty(bundle.skills[skillId])) {
                        bundle.skills[skillId] = 0;
                    }

                    if (this.conditionSkills[skillId] < bundle.skills[skillId]) {
                        return;
                    }

                    // Add Jewel to Bundle
                    if (this.conditionSkills[skillId] > bundle.skills[skillId]) {
                        bundle = this.addJewelToBundleBySpecificSkill(bundle, jewel, {
                            id: skillId,
                            level: this.conditionSkills[skillId]
                        });

                        if (false === bundle) {
                            return;
                        }
                    }

                    nextBundlePool[this.getBundleHash(bundle)] = bundle;
                });
            })

            prevBundlePool = nextBundlePool;
        });

        return Object.values(prevBundlePool).filter((bundle) => {
            return this.isBundleSkillCompleted(bundle);
        });
    };

    /**
     * Add Jewel To Bundle By Specific Skill
     */
    addJewelToBundleBySpecificSkill = (bundle, jewel) => {
        let currentSlotSize = jewel.size;
        let isSkillLevelCompelete = false;
        let isSkillLevelOverflow = false;
        let bundleBackup = null;

        if (0 === bundle.meta.remainingSlotCount.all) {
            return bundle;
        }

        // 已透過技能選出了裝飾珠 再用裝飾珠有的技能 id & level 來 completed skill
        // 加入裝飾珠 同時計算洞數以及技能等級
        while (true) {
            if (0 === bundle.meta.remainingSlotCount[currentSlotSize]) {
                currentSlotSize += 1;

                continue;
            }

            if (4 < currentSlotSize) {
                break;
            }

            // Check Skill is Completed
            isSkillLevelCompelete = false;

            jewel.skills.forEach((skill) => {
                if (Helper.isEmpty(this.conditionSkills[skill.id])){
                    return;
                }

                if (Helper.isEmpty(bundle.skills[skill.id])) {
                    bundle.skills[skill.id] = 0;
                }

                if (this.conditionSkills[skill.id] === bundle.skills[skill.id]) {
                    bundle.meta.completedSkills[skill.id] = true;
                    isSkillLevelCompelete = true;
                }
            });

            if (true === isSkillLevelCompelete) {
                return bundle;
            }

            // Bundle Backup
            bundleBackup = Helper.deepCopy(bundle);

            // Decrease Slot Counts
            bundle.meta.remainingSlotCount[currentSlotSize] -= 1;
            bundle.meta.remainingSlotCount.all -= 1;

            // Add Jewel
            if (Helper.isEmpty(bundle.jewels[jewel.id])) {
                bundle.jewels[jewel.id] = 0;
            }

            bundle.jewels[jewel.id] += 1;

            // Add Skills
            isSkillLevelOverflow = false;

            jewel.skills.forEach((skill) => {
                if (Helper.isEmpty(bundle.skills[skill.id])) {
                    bundle.skills[skill.id] = 0;
                }

                bundle.skills[skill.id] += skill.level;

                // Check Skill is Completed
                if (Helper.isNotEmpty(this.conditionSkills[skill.id])) {
                    if (this.conditionSkills[skill.id] < bundle.skills[skill.id]) {
                        isSkillLevelOverflow = true;
                    }

                    if (this.conditionSkills[skill.id] === bundle.skills[skill.id]) {
                        bundle.meta.completedSkills[skill.id] = true;
                    }
                }
            });

            if (true === isSkillLevelOverflow) {
                return bundleBackup;
            }

            if (0 === bundle.meta.remainingSlotCount.all) {
                break;
            }
        }

        return bundle;
    };

    /**
     * Is Skip Candidate Equip
     */
    isCandidateEquipSkip = (candidateEquip) => {

        // Check Used Equips
        if (true === this.usedEquips[candidateEquip.id]) {
            return;
        }

        let isSkip = false;

        Object.keys(candidateEquip.skills).forEach((skillId) => {
            if (true === isSkip) {
                return;
            }

            if (Helper.isNotEmpty(this.skipSkills[skillId])
                && true === this.skipSkills[skillId]
            ) {
                isSkip = true;
            }
        });

        return isSkip;
    };

    /**
     * Is Bundle Full
     */
    isBundleFull = (bundle) => {
        return this.requireEquipCount === bundle.meta.equipCount;
    };

    /**
     * Is Bundle Skill Compeleted
     */
    isBundleSkillCompleted = (bundle) => {
        return this.requireSkillCount === Object.keys(bundle.meta.completedSkills).length;
    };

    /**
     * Is Bundle Set Compeleted
     */
    isBundleSetCompleted = (bundle) => {
        return this.requireSetCount === Object.keys(bundle.meta.completedSets).length;
    };

    /**
     * Is Bundle Expected
     */
    isBundleExpected = (bundle) => {
        return this.conditionExpectedValue <= bundle.meta.expectedValue
            && this.conditionExpectedLevel <= bundle.meta.expectedLevel;
    };

    /**
     * Is Bundle Have Future
     *
     * This is magic function, which is see through the future,
     * maybe will lost some results.
     */
    isBundleHaveFuture = (bundle, usedEquipTypes) => {
        let futureExpectedValue = bundle.meta.expectedValue;
        let futureExpectedLevel = bundle.meta.expectedLevel;

        this.conditionEquips.forEach((equipType) => {
            if (-1 !== usedEquipTypes.indexOf(equipType)) {
                return;
            }

            futureExpectedValue += this.maxEquipsExpectedValue[equipType];
            futureExpectedLevel += this.maxEquipsExpectedLevel[equipType];
        });

        return this.conditionExpectedValue <= futureExpectedValue
            && this.conditionExpectedLevel <= futureExpectedLevel;
    };
}

export default new FittingAlgorithm();
