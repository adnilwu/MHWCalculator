'use strict';
/**
 * Dataset Armor Helper
 *
 * @package     MHW Calculator
 * @author      Scar Wu
 * @copyright   Copyright (c) Scar Wu (http://scar.tw)
 * @link        https://github.com/scarwu/MHWCalculator
 */

// Load Custom Libraries
import Lang from 'libraries/lang';

// Load Constant
import Constant from 'constant';

// Load Dataset
import Armors from 'datasets/armors';

let dataset = Armors.map((pack) => {
    return pack[1].map((item) => {
        return {
            series: pack[0][0],
            rare: pack[0][1],
            gender: pack[0][2],
            defense: pack[0][3],
            resistance: {
                fire: pack[0][4][0],
                water: pack[0][4][1],
                thunder: pack[0][4][2],
                ice: pack[0][4][3],
                dragon: pack[0][4][4]
            },
            set: (null !== pack[0][5]) ? {
                name: pack[0][5]
            } : null,
            name: item[0],
            type: item[1],
            slots: (null !== item[2]) ? item[2].map((size) => {
                return {
                    size: size
                }
            }) : null,
            skills: (null !== item[3]) ? item[3].map((skill) => {
                return {
                    name: skill[0],
                    level: skill[1]
                };
            }) : null
        };
    });
})
.reduce((armorsA, armorsB) => {
    return armorsA.concat(armorsB);
});

class ArmorHelper {

    constructor (list) {
        this.mapping = {};

        list.forEach((data) => {
            this.mapping[data.name] = data;

            if (null === data.slots || 0 === data.slots.length) {
                return true;
            }

            let slots = data.slots.sort((a, b) => {
                return b.size - a.size;
            });

            let slotEquipData = {
                name: slots.map((slot) => {
                    return '[' + slot.size + ']';
                }).join('') + ' 插槽' + Lang[data.type],
                series: "插槽",
                type: data.type,
                rare: 0,
                gender: "general",
                defense: 0,
                resistance: {
                    fire: 0,
                    water: 0,
                    thunder: 0,
                    ice: 0,
                    dragon: 0
                },
                slots: slots,
                skills: [],
                set: null
            };

            this.mapping[slotEquipData.name] = slotEquipData;
        });

        // Filter Conditional
        this.resetFilter();
    }

    resetFilter = () => {
        this.filterType = null;
        this.filterRare = null;
        this.filterSet = null;
        this.filterSkillName = null;
    };

    getNames = () => {
        return Object.keys(this.mapping);
    };

    getItems = () => {
        let result = Object.values(this.mapping).filter((data) => {
            if (null !== this.filterType) {
                if (this.filterType !== data.type) {
                    return false;
                }
            }

            if (null !== this.filterRare) {
                if (this.filterRare !== data.rare) {
                    return false;
                }
            }

            if (null !== this.filterSet) {
                if (null === data.set
                    || this.filterSet !== data.set.name) {

                    return false;
                }
            }

            let isSkip = true;

            if (null !== this.filterSkillName) {
                for (let index in data.skills) {
                    if (this.filterSkillName !== data.skills[index].name) {
                        continue;
                    }

                    isSkip = false;
                }

                if (isSkip) {
                    return false;
                }
            }

            return true;
        });

        this.resetFilter();

        return result;
    };

    getInfo = (name) => {
        return undefined !== this.mapping[name]
            ? JSON.parse(JSON.stringify(this.mapping[name])) : null;
    };

    // Conditional Functions
    typeIs = (text) => {
        this.filterType = text;

        return this;
    };

    rareIs = (number) => {
        this.filterRare = number;

        return this;
    };

    setIs = (text) => {
        this.filterSet = text;

        return this;
    };

    hasSkill = (name) => {
        this.filterSkillName = name;

        return this;
    };
}

export default new ArmorHelper(dataset);