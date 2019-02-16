'use strict';
/**
 * Dataset Skills
 *
 * @package     MHW Calculator
 * @author      Scar Wu
 * @copyright   Copyright (c) Scar Wu (http://scar.tw)
 * @link        https://github.com/scarwu/MHWCalculator
 */

export default [
    {
        "name": "體力增強",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "體力+15",
                "reaction": {
                    "health": {
                        "value": 15
                    }
                }
            },
            {
                "level": 2,
                "description": "體力+30",
                "reaction": {
                    "health": {
                        "value": 30
                    }
                }
            },
            {
                "level": 3,
                "description": "體力+50",
                "reaction": {
                    "health": {
                        "value": 50
                    }
                }
            }
        ]
    },
    {
        "name": "體力回復量UP",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "回復量1.1倍"
            },
            {
                "level": 2,
                "description": "回復量1.2倍"
            },
            {
                "level": 3,
                "description": "回復量1.3倍"
            }
        ]
    },
    {
        "name": "KO術",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "昏厥威力1.1倍"
            },
            {
                "level": 2,
                "description": "昏厥威力1.2倍"
            },
            {
                "level": 3,
                "description": "昏厥威力1.3倍"
            }
        ]
    },
    {
        "name": "體術",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "固定耐力消耗量減少10%"
            },
            {
                "level": 2,
                "description": "固定耐力消耗量減少20%"
            },
            {
                "level": 3,
                "description": "固定耐力消耗量減少30%"
            },
            {
                "level": 4,
                "description": "固定耐力消耗量減少40%"
            },
            {
                "level": 5,
                "description": "固定耐力消耗量減少50%"
            }
        ]
    },
    {
        "name": "力量解放",
        "type": "passive",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "技能發動時，會心率+10%，耐力消耗量減少10%",
                "reaction": {
                    "criticalRate": {
                        "value": 10
                    }
                }
            },
            {
                "level": 2,
                "description": "技能發動時，會心率+20%，耐力消耗量減少20%",
                "reaction": {
                    "criticalRate": {
                        "value": 20
                    }
                }
            },
            {
                "level": 3,
                "description": "技能發動時，會心率+30%，耐力消耗量減少30%",
                "reaction": {
                    "criticalRate": {
                        "value": 30
                    }
                }
            },
            {
                "level": 4,
                "description": "技能發動時，會心率+40%，耐力消耗量減少40%",
                "reaction": {
                    "criticalRate": {
                        "value": 40
                    }
                }
            },
            {
                "level": 5,
                "description": "技能發動時，會心率+50%，耐力消耗量減少50%",
                "reaction": {
                    "criticalRate": {
                        "value": 50
                    }
                }
            }
        ]
    },
    {
        "name": "水屬性攻擊強化",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "水屬性攻擊值+30",
                "reaction": {
                    "elementAttack": {
                        "type": "water",
                        "value": 30,
                        "multiple": 1
                    }
                }
            },
            {
                "level": 2,
                "description": "水屬性攻擊值+60",
                "reaction": {
                    "elementAttack": {
                        "type": "water",
                        "value": 60,
                        "multiple": 1
                    }
                }
            },
            {
                "level": 3,
                "description": "水屬性攻擊值+100",
                "reaction": {
                    "elementAttack": {
                        "type": "water",
                        "value": 100,
                        "multiple": 1
                    }
                }
            },
            {
                "level": 4,
                "description": "水屬性攻擊值變為1.05倍，水屬性攻擊值+100",
                "reaction": {
                    "elementAttack": {
                        "type": "water",
                        "value": 100,
                        "multiple": 1.05
                    }
                }
            },
            {
                "level": 5,
                "description": "水屬性攻擊值變為1.1倍，水屬性攻擊值+100",
                "reaction": {
                    "elementAttack": {
                        "type": "water",
                        "value": 100,
                        "multiple": 1.1
                    }
                }
            }
        ]
    },
    {
        "name": "火屬性攻擊強化",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "火屬性攻擊值+30",
                "reaction": {
                    "elementAttack": {
                        "type": "fire",
                        "value": 30,
                        "multiple": 1
                    }
                }
            },
            {
                "level": 2,
                "description": "火屬性攻擊值+60",
                "reaction": {
                    "elementAttack": {
                        "type": "fire",
                        "value": 60,
                        "multiple": 1
                    }
                }
            },
            {
                "level": 3,
                "description": "火屬性攻擊值+100",
                "reaction": {
                    "elementAttack": {
                        "type": "fire",
                        "value": 100,
                        "multiple": 1
                    }
                }
            },
            {
                "level": 4,
                "description": "火屬性攻擊值變為1.05倍，火屬性攻擊值+100",
                "reaction": {
                    "elementAttack": {
                        "type": "fire",
                        "value": 100,
                        "multiple": 1.05
                    }
                }
            },
            {
                "level": 5,
                "description": "火屬性攻擊值變為1.1倍，火屬性攻擊值+100",
                "reaction": {
                    "elementAttack": {
                        "type": "fire",
                        "value": 100,
                        "multiple": 1.1
                    }
                }
            }
        ]
    },
    {
        "name": "心眼／彈導強化",
        "type": "active",
        "fromSet": true,
        "fromJewel": true,
        "fromArmor": false,
        "list": [
            {
                "level": 1,
                "description": "攻擊不會被彈開，縮短彈藥、箭矢達到最大威力時的距離"
            }
        ]
    },
    {
        "name": "火耐性",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "火耐性+6",
                "reaction": {
                    "resistance": {
                        "type": "fire",
                        "value": 6
                    }
                }
            },
            {
                "level": 2,
                "description": "火耐性+12",
                "reaction": {
                    "resistance": {
                        "type": "fire",
                        "value": 12
                    }
                }
            },
            {
                "level": 3,
                "description": "火耐性+20、防禦力+10",
                "reaction": {
                    "defense": {
                        "value": 10
                    },
                    "resistance": {
                        "type": "fire",
                        "value": 20
                    }
                }
            }
        ]
    },
    {
        "name": "水耐性",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "水耐性+6",
                "reaction": {
                    "resistance": {
                        "type": "water",
                        "value": 6
                    }
                }
            },
            {
                "level": 2,
                "description": "水耐性+12",
                "reaction": {
                    "resistance": {
                        "type": "water",
                        "value": 12
                    }
                }
            },
            {
                "level": 3,
                "description": "水耐性+20、防禦力+10",
                "reaction": {
                    "defense": {
                        "value": 10
                    },
                    "resistance": {
                        "type": "water",
                        "value": 20
                    }
                }
            }
        ]
    },
    {
        "name": "不屈",
        "type": "passive",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "每次攻擊力1.1倍、防禦力1.15倍",
                "reaction": {
                    "attackMultiple": {
                        "value": 1.1
                    },
                    "defenseMultiple": {
                        "value": 1.15
                    }
                }
            }
        ]
    },
    {
        "name": "火場怪力",
        "type": "passive",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "技能發動時，攻擊力1.05倍，防禦力+15",
                "reaction": {
                    "attackMultiple": {
                        "value": 1.05
                    },
                    "defense": {
                        "value": 15
                    }
                }
            },
            {
                "level": 2,
                "description": "技能發動時，攻擊力1.1倍，防禦力+20",
                "reaction": {
                    "attackMultiple": {
                        "value": 1.1
                    },
                    "defense": {
                        "value": 20
                    }
                }
            },
            {
                "level": 3,
                "description": "技能發動時，攻擊力1.15倍，防禦力+25",
                "reaction": {
                    "attackMultiple": {
                        "value": 1.15
                    },
                    "defense": {
                        "value": 25
                    }
                }
            },
            {
                "level": 4,
                "description": "技能發動時，攻擊力1.2倍，防禦力+30",
                "reaction": {
                    "attackMultiple": {
                        "value": 1.2
                    },
                    "defense": {
                        "value": 30
                    }
                }
            },
            {
                "level": 5,
                "description": "技能發動時，攻擊力1.3倍，防禦力+40",
                "reaction": {
                    "attackMultiple": {
                        "value": 1.3
                    },
                    "defense": {
                        "value": 40
                    }
                }
            }
        ]
    },
    {
        "name": "加速再生",
        "type": "active",
        "fromSet": true,
        "fromJewel": false,
        "fromArmor": false,
        "list": [
            {
                "level": 1,
                "description": "若持續攻擊命中魔物，便能回復體力。回復量會依武器種類不同而有所變動"
            }
        ]
    },
    {
        "name": "冰耐性",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "冰耐性+6",
                "reaction": {
                    "resistance": {
                        "type": "ice",
                        "value": 6
                    }
                }
            },
            {
                "level": 2,
                "description": "冰耐性+12",
                "reaction": {
                    "resistance": {
                        "type": "ice",
                        "value": 12
                    }
                }
            },
            {
                "level": 3,
                "description": "冰耐性+20、防禦力+10",
                "reaction": {
                    "defense": {
                        "value": 10
                    },
                    "resistance": {
                        "type": "ice",
                        "value": 20
                    }
                }
            }
        ]
    },
    {
        "name": "地質學",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "駭骨採集點的採集次數+1"
            },
            {
                "level": 2,
                "description": "追加特產品採集點的採集次數+1"
            },
            {
                "level": 3,
                "description": "追加礦石採集點的採集次數+1"
            }
        ]
    },
    {
        "name": "回復速度",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "紅色計量表的自動回復速度2倍"
            },
            {
                "level": 2,
                "description": "紅色計量表的自動回復速度3倍"
            },
            {
                "level": 3,
                "description": "紅色計量表的自動回復速度4倍"
            }
        ]
    },
    {
        "name": "冰屬性攻擊強化",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "冰屬性攻擊值+30",
                "reaction": {
                    "elementAttack": {
                        "type": "ice",
                        "value": 30,
                        "multiple": 1
                    }
                }
            },
            {
                "level": 2,
                "description": "冰屬性攻擊值+60",
                "reaction": {
                    "elementAttack": {
                        "type": "ice",
                        "value": 60,
                        "multiple": 1
                    }
                }
            },
            {
                "level": 3,
                "description": "冰屬性攻擊值+100",
                "reaction": {
                    "elementAttack": {
                        "type": "ice",
                        "value": 100,
                        "multiple": 1
                    }
                }
            },
            {
                "level": 4,
                "description": "冰屬性攻擊值變為1.05倍，冰屬性攻擊值+100",
                "reaction": {
                    "elementAttack": {
                        "type": "ice",
                        "value": 100,
                        "multiple": 1.05
                    }
                }
            },
            {
                "level": 5,
                "description": "冰屬性攻擊值變為1.1倍，冰屬性攻擊值+100",
                "reaction": {
                    "elementAttack": {
                        "type": "ice",
                        "value": 100,
                        "multiple": 1.1
                    }
                }
            }
        ]
    },
    {
        "name": "收刀術",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "速度小幅上升"
            },
            {
                "level": 2,
                "description": "速度上升"
            },
            {
                "level": 3,
                "description": "速度大幅上升"
            }
        ]
    },
    {
        "name": "耳塞",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "小幅減輕咆哮【小】的影響"
            },
            {
                "level": 2,
                "description": "減輕咆哮【小】的影響"
            },
            {
                "level": 3,
                "description": "使咆哮【小】無效"
            },
            {
                "level": 4,
                "description": "使咆哮【小】無效，減輕咆哮【大】的影響"
            },
            {
                "level": 5,
                "description": "使咆哮【小】【大】無效"
            }
        ]
    },
    {
        "name": "死裡逃生",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "技能發動時，大幅延長迴避的無敵時間，並減少耐力消耗量"
            }
        ]
    },
    {
        "name": "匠",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "武器的銳利度+10",
                "reaction": {
                    "sharpness": {
                        "value": 10
                    }
                }
            },
            {
                "level": 2,
                "description": "武器的銳利度+20",
                "reaction": {
                    "sharpness": {
                        "value": 20
                    }
                }
            },
            {
                "level": 3,
                "description": "武器的銳利度+30",
                "reaction": {
                    "sharpness": {
                        "value": 30
                    }
                }
            },
            {
                "level": 4,
                "description": "武器的銳利度+40",
                "reaction": {
                    "sharpness": {
                        "value": 40
                    }
                }
            },
            {
                "level": 5,
                "description": "武器的銳利度+50",
                "reaction": {
                    "sharpness": {
                        "value": 50
                    }
                }
            }
        ]
    },
    {
        "name": "攻擊",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "基礎攻擊力+3",
                "reaction": {
                    "attack": {
                        "value": 3
                    }
                }
            },
            {
                "level": 2,
                "description": "基礎攻擊力+6",
                "reaction": {
                    "attack": {
                        "value": 6
                    }
                }
            },
            {
                "level": 3,
                "description": "基礎攻擊力+9",
                "reaction": {
                    "attack": {
                        "value": 9
                    }
                }
            },
            {
                "level": 4,
                "description": "基礎攻擊力+12、會心率+5%",
                "reaction": {
                    "attack": {
                        "value": 12
                    },
                    "criticalRate": {
                        "value": 5
                    }
                }
            },
            {
                "level": 5,
                "description": "基礎攻擊力+15、會心率+5%",
                "reaction": {
                    "attack": {
                        "value": 15
                    },
                    "criticalRate": {
                        "value": 5
                    }
                }
            },
            {
                "level": 6,
                "description": "基礎攻擊力+18、會心率+5%",
                "reaction": {
                    "attack": {
                        "value": 18
                    },
                    "criticalRate": {
                        "value": 5
                    }
                }
            },
            {
                "level": 7,
                "description": "基礎攻擊力+21、會心率+5%",
                "reaction": {
                    "attack": {
                        "value": 21
                    },
                    "criticalRate": {
                        "value": 5
                    }
                }
            }
        ]
    },
    {
        "name": "吹笛名人",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "延長狩獵笛旋律效果時間，體力回復量的上升率UP"
            }
        ]
    },
    {
        "name": "防禦強化",
        "type": "active",
        "fromSet": true,
        "fromJewel": true,
        "fromArmor": false,
        "list": [
            {
                "level": 1,
                "description": "可以防禦一般無法防禦的攻擊"
            }
        ]
    },
    {
        "name": "投射器裝填數UP",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "小幅增加在地面或植物取得的彈藥裝填數"
            },
            {
                "level": 2,
                "description": "再小幅增加一部份魔物掉落的彈藥裝填數"
            },
            {
                "level": 3,
                "description": "再小幅增加所有魔物掉落的彈藥裝填數"
            }
        ]
    },
    {
        "name": "防御力DOWN耐性",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "減少防禦力DOWN狀態的時間30%"
            },
            {
                "level": 2,
                "description": "減少防禦力DOWN狀態的時間60%"
            },
            {
                "level": 3,
                "description": "不會變為防禦力DOWN狀態"
            }
        ]
    },
    {
        "name": "防禦",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "防禦力+5",
                "reaction": {
                    "defense": {
                        "value": 5
                    }
                }
            },
            {
                "level": 2,
                "description": "防禦力+10",
                "reaction": {
                    "defense": {
                        "value": 10
                    }
                }
            },
            {
                "level": 3,
                "description": "防禦力+15",
                "reaction": {
                    "defense": {
                        "value": 15
                    }
                }
            },
            {
                "level": 4,
                "description": "防禦力+20，全屬性耐性值+3",
                "reaction": {
                    "defense": {
                        "value": 20
                    },
                    "resistance": {
                        "type": "all",
                        "value": 3
                    }
                }
            },
            {
                "level": 5,
                "description": "防禦力+25，全屬性耐性值+3",
                "reaction": {
                    "defense": {
                        "value": 25
                    },
                    "resistance": {
                        "type": "全部",
                        "value": 3
                    }
                }
            },
            {
                "level": 6,
                "description": "防禦力+30，全屬性耐性值+3",
                "reaction": {
                    "defense": {
                        "value": 30
                    },
                    "resistance": {
                        "type": "all",
                        "value": 3
                    }
                }
            },
            {
                "level": 7,
                "description": "防禦力+35，全屬性耐性值+3",
                "reaction": {
                    "defense": {
                        "value": 35
                    },
                    "resistance": {
                        "type": "all",
                        "value": 3
                    }
                }
            }
        ]
    },
    {
        "name": "利刃／彈藥節約",
        "type": "active",
        "fromSet": true,
        "fromJewel": false,
        "fromArmor": false,
        "list": [
            {
                "level": 1,
                "description": "銳利度的消耗降低一半 ／ 有少量機會在射擊時不消耗弩槍的彈藥及弓的瓶"
            }
        ]
    },
    {
        "name": "快吃",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "速度小幅上升"
            },
            {
                "level": 2,
                "description": "速度上升"
            },
            {
                "level": 3,
                "description": "速度大幅上升"
            }
        ]
    },
    {
        "name": "防禦性能",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "小幅減少攻擊的威力"
            },
            {
                "level": 2,
                "description": "小幅減少攻擊的威力，減少耐力消費量15%"
            },
            {
                "level": 3,
                "description": "大幅減少攻擊的威力，減少耐力消費量15%"
            },
            {
                "level": 4,
                "description": "大幅減少攻擊的威力，減少耐力消費量30%"
            },
            {
                "level": 5,
                "description": "極大幅減少攻擊的威力，減少耐力消費量50%"
            }
        ]
    },
    {
        "name": "拔刀術【力】",
        "type": "active",
        "fromSet": true,
        "fromJewel": false,
        "fromArmor": false,
        "list": [
            {
                "level": 1,
                "description": "追加、強化武器拔刀攻擊所引起的昏厥的能力，攻擊力也會小幅提升"
            }
        ]
    },
    {
        "name": "泥耐性",
        "type": "active",
        "fromSet": false,
        "fromJewel": false,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "減輕移動速度、迴避行動的限制"
            }
        ]
    },
    {
        "name": "拔刀術【技】",
        "type": "passive",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "武器拔刀攻擊的會心率+30%",
                "reaction": {
                    "criticalRate": {
                        "value": 30
                    }
                }
            },
            {
                "level": 2,
                "description": "武器拔刀攻擊的會心率+60%",
                "reaction": {
                    "criticalRate": {
                        "value": 60
                    }
                }
            },
            {
                "level": 3,
                "description": "武器拔刀攻擊的會心率+100%",
                "reaction": {
                    "criticalRate": {
                        "value": 100
                    }
                }
            }
        ]
    },
    {
        "name": "幸運",
        "type": "active",
        "fromSet": true,
        "fromJewel": false,
        "fromArmor": false,
        "list": [
            {
                "level": 1,
                "description": "完成任務獲得的報酬數量容易變多(從任務中途開始使用不會有效果)"
            }
        ]
    },
    {
        "name": "昏厥耐性",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "減少昏厥狀態的時間30%"
            },
            {
                "level": 2,
                "description": "減少昏厥狀態的時間60%"
            },
            {
                "level": 3,
                "description": "不會變為昏厥狀態"
            }
        ]
    },
    {
        "name": "昆蟲標本達人",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "屍體殘留的機率提高"
            },
            {
                "level": 2,
                "description": "屍體殘留的機率大幅提高"
            },
            {
                "level": 3,
                "description": "必定會有屍體殘留"
            }
        ]
    },
    {
        "name": "看破",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "會心率+3%",
                "reaction": {
                    "criticalRate": {
                        "value": 3
                    }
                }
            },
            {
                "level": 2,
                "description": "會心率+6%",
                "reaction": {
                    "criticalRate": {
                        "value": 6
                    }
                }
            },
            {
                "level": 3,
                "description": "會心率+10%",
                "reaction": {
                    "criticalRate": {
                        "value": 10
                    }
                }
            },
            {
                "level": 4,
                "description": "會心率+15%",
                "reaction": {
                    "criticalRate": {
                        "value": 15
                    }
                }
            },
            {
                "level": 5,
                "description": "會心率+20%",
                "reaction": {
                    "criticalRate": {
                        "value": 20
                    }
                }
            },
            {
                "level": 6,
                "description": "會心率+25%",
                "reaction": {
                    "criticalRate": {
                        "value": 25
                    }
                }
            },
            {
                "level": 7,
                "description": "會心率+30%",
                "reaction": {
                    "criticalRate": {
                        "value": 30
                    }
                }
            }
        ]
    },
    {
        "name": "指示隨從",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "隨從的攻擊力與防禦力變為1.05倍"
            },
            {
                "level": 2,
                "description": "隨從的攻擊力與防禦力變為1.1倍"
            },
            {
                "level": 3,
                "description": "隨從的攻擊力與防禦力變為1.15倍"
            },
            {
                "level": 4,
                "description": "隨從的攻擊力與防禦力變為1.2倍"
            },
            {
                "level": 5,
                "description": "隨從的攻擊力與防禦力變為1.25倍"
            }
        ]
    },
    {
        "name": "飛身躍入",
        "type": "active",
        "fromSet": false,
        "fromJewel": false,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "可以發動技能"
            }
        ]
    },
    {
        "name": "炸彈客",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "威力1.1倍"
            },
            {
                "level": 2,
                "description": "威力1.2倍"
            },
            {
                "level": 3,
                "description": "威力1.3倍"
            }
        ]
    },
    {
        "name": "毒屬性強化",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "毒素累積值變為1.05倍，毒素累積值+10"
            },
            {
                "level": 2,
                "description": "毒素累積值變為1.1倍，毒素累積值+10"
            },
            {
                "level": 3,
                "description": "毒素累積值變為1.2倍，毒素累積值+10"
            }
        ]
    },
    {
        "name": "耐力急速回復",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "回復速度1.1倍"
            },
            {
                "level": 2,
                "description": "回復速度1.2倍"
            },
            {
                "level": 3,
                "description": "回復速度1.3倍"
            }
        ]
    },
    {
        "name": "風壓完全無效",
        "type": "active",
        "fromSet": true,
        "fromJewel": false,
        "fromArmor": false,
        "list": [
            {
                "level": 1,
                "description": "使全部的風壓無效"
            }
        ]
    },
    {
        "name": "風壓耐性",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "小幅減輕風壓【小】"
            },
            {
                "level": 2,
                "description": "減輕風壓【小】"
            },
            {
                "level": 3,
                "description": "使風壓【小】無效"
            },
            {
                "level": 4,
                "description": "使風壓【小】無效，減輕風壓【大】"
            },
            {
                "level": 5,
                "description": "使風壓【小】【大】無效"
            }
        ]
    },
    {
        "name": "突破耐力上限",
        "type": "active",
        "fromSet": true,
        "fromJewel": false,
        "fromArmor": false,
        "list": [
            {
                "level": 1,
                "description": "增加耐力的上限值",
                "reaction": {
                    "stamina": {
                        "value": 50
                    }
                }
            }
        ]
    },
    {
        "name": "耐震",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "使震動【小】無效"
            },
            {
                "level": 2,
                "description": "使震動【小】無效，減輕震動【大】的影響"
            },
            {
                "level": 3,
                "description": "使震動【小】【大】無效"
            }
        ]
    },
    {
        "name": "飛燕",
        "type": "passive",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "跳躍攻擊的威力變為1.1倍",
                "reaction": {
                    "attackMultiple": {
                        "value": 1.1
                    }
                }
            }
        ]
    },
    {
        "name": "飛燕【屬性】",
        "type": "passive",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "跳躍攻擊的屬性傷害UP"
            }
        ]
    },
    {
        "name": "毒耐性",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "減少中毒狀態的時間30%"
            },
            {
                "level": 2,
                "description": "減少中毒狀態的時間60%"
            },
            {
                "level": 3,
                "description": "不會變為中毒狀態"
            }
        ]
    },
    {
        "name": "威嚇",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "即使被發現也不容易進入戰鬥狀態"
            },
            {
                "level": 2,
                "description": "即使被發現也幾乎不會進入戰鬥狀態"
            },
            {
                "level": 3,
                "description": "即使被發現也不會變為戰鬥狀態"
            }
        ]
    },
    {
        "name": "研究者",
        "type": "active",
        "fromSet": false,
        "fromJewel": false,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "更容易調查及研究大型魔物"
            }
        ]
    },
    {
        "name": "毒傷害強化",
        "type": "active",
        "fromSet": true,
        "fromJewel": false,
        "fromArmor": false,
        "list": [
            {
                "level": 1,
                "description": "提高對魔物施毒的效果時間"
            }
        ]
    },
    {
        "name": "挑戰者",
        "type": "passive",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "技能發動時，基礎攻擊力+4，會心率+3%",
                "reaction": {
                    "attack": {
                        "value": 4
                    },
                    "criticalRate": {
                        "value": 3
                    }
                }
            },
            {
                "level": 2,
                "description": "技能發動時，基礎攻擊力+8，會心率+6%",
                "reaction": {
                    "attack": {
                        "value": 8
                    },
                    "criticalRate": {
                        "value": 6
                    }
                }
            },
            {
                "level": 3,
                "description": "技能發動時，基礎攻擊力+12，會心率+9%",
                "reaction": {
                    "attack": {
                        "value": 12
                    },
                    "criticalRate": {
                        "value": 9
                    }
                }
            },
            {
                "level": 4,
                "description": "技能發動時，基礎攻擊力+16，會心率+12%",
                "reaction": {
                    "attack": {
                        "value": 16
                    },
                    "criticalRate": {
                        "value": 12
                    }
                }
            },
            {
                "level": 5,
                "description": "技能發動時，基礎攻擊力+20，會心率+15%",
                "reaction": {
                    "attack": {
                        "value": 20
                    },
                    "criticalRate": {
                        "value": 15
                    }
                }
            }
        ]
    },
    {
        "name": "怨恨",
        "type": "passive",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "技能發動時，基礎攻擊力+5",
                "reaction": {
                    "attack": {
                        "value": 5
                    }
                }
            },
            {
                "level": 2,
                "description": "技能發動時，基礎攻擊力+10",
                "reaction": {
                    "attack": {
                        "value": 10
                    }
                }
            },
            {
                "level": 3,
                "description": "技能發動時，基礎攻擊力+15",
                "reaction": {
                    "attack": {
                        "value": 15
                    }
                }
            },
            {
                "level": 4,
                "description": "技能發動時，基礎攻擊力+20",
                "reaction": {
                    "attack": {
                        "value": 20
                    }
                }
            },
            {
                "level": 5,
                "description": "技能發動時，基礎攻擊力+25",
                "reaction": {
                    "attack": {
                        "value": 25
                    }
                }
            }
        ]
    },
    {
        "name": "毒瓶追加",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": false,
        "list": [
            {
                "level": 1,
                "description": "弓可以裝著毒瓶"
            }
        ]
    },
    {
        "name": "砲術",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "對象的攻擊力1.1倍，減少龍擊砲的冷卻時間15%"
            },
            {
                "level": 2,
                "description": "對象的攻擊力1.2倍，減少龍擊砲的冷卻時間30%"
            },
            {
                "level": 3,
                "description": "對象的攻擊力1.3倍，減少龍擊砲的冷卻時間50%"
            }
        ]
    },
    {
        "name": "迴避性能",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "無敵時間極小幅延長"
            },
            {
                "level": 2,
                "description": "無敵時間小幅延長"
            },
            {
                "level": 3,
                "description": "延長無敵時間"
            },
            {
                "level": 4,
                "description": "大幅延長無敵時間"
            },
            {
                "level": 5,
                "description": "極大幅延長無敵時間"
            }
        ]
    },
    {
        "name": "破壞王",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "對部位的累積傷害1.1倍"
            },
            {
                "level": 2,
                "description": "對部位的累積傷害1.2倍"
            },
            {
                "level": 3,
                "description": "對部位的累積傷害1.3倍"
            }
        ]
    },
    {
        "name": "剝取名人",
        "type": "active",
        "fromSet": true,
        "fromJewel": false,
        "fromArmor": false,
        "list": [
            {
                "level": 1,
                "description": "剝取回數增加1回(從任務中途開始使用不會有效果)"
            }
        ]
    },
    {
        "name": "迴避距離UP",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "迴避距離小幅延長"
            },
            {
                "level": 2,
                "description": "延長迴避距離"
            },
            {
                "level": 3,
                "description": "大幅延長迴避距離"
            }
        ]
    },
    {
        "name": "振奮",
        "type": "active",
        "fromSet": true,
        "fromJewel": false,
        "fromArmor": false,
        "list": [
            {
                "level": 1,
                "description": "體力降低至40%以下時，一定時間內耐力的消耗量會減少"
            }
        ]
    },
    {
        "name": "追蹤達人",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "取得痕跡時的計量表上升量1.5倍"
            }
        ]
    },
    {
        "name": "剝取鐵人",
        "type": "active",
        "fromSet": false,
        "fromJewel": false,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "剝取中，後仰無效"
            }
        ]
    },
    {
        "name": "砲擊手",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "威力1.1倍"
            },
            {
                "level": 2,
                "description": "威力1.2倍"
            }
        ]
    },
    {
        "name": "剛刃研磨",
        "type": "active",
        "fromSet": true,
        "fromJewel": true,
        "fromArmor": false,
        "list": [
            {
                "level": 1,
                "description": "研磨武器後，一定時間內銳利度不會降低"
            }
        ]
    },
    {
        "name": "砥石使用高速化",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "省略研磨動作1次"
            },
            {
                "level": 2,
                "description": "省略研磨動作2次"
            },
            {
                "level": 3,
                "description": "省略研磨動作3次"
            }
        ]
    },
    {
        "name": "砲彈裝填數UP",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "裝填數+1"
            }
        ]
    },
    {
        "name": "烤肉名人",
        "type": "active",
        "fromSet": false,
        "fromJewel": false,
        "fromArmor": false,
        "list": [
            {
                "level": 1,
                "description": "更容易烤出全熟肉"
            }
        ]
    },
    {
        "name": "飢餓耐性",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "到減少的時間延長30%"
            },
            {
                "level": 2,
                "description": "到減少的時間延長60%"
            },
            {
                "level": 3,
                "description": "使耐力最大值的減少無效"
            }
        ]
    },
    {
        "name": "特殊射擊強化",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "弩的特殊彈藥和弓的龍之箭的威力變為1.1倍"
            },
            {
                "level": 2,
                "description": "弩的特殊彈藥和弓的龍之箭的威力變為1.2倍"
            }
        ]
    },
    {
        "name": "弱點特效",
        "type": "passive",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "攻擊有效部份時，會心率+15%",
                "reaction": {
                    "criticalRate": {
                        "value": 15
                    }
                }
            },
            {
                "level": 2,
                "description": "攻擊有效部份時，會心率+30%",
                "reaction": {
                    "criticalRate": {
                        "value": 30
                    }
                }
            },
            {
                "level": 3,
                "description": "攻擊有效部份時，會心率+50%",
                "reaction": {
                    "criticalRate": {
                        "value": 50
                    }
                }
            }
        ]
    },
    {
        "name": "閃光強化",
        "type": "active",
        "fromSet": false,
        "fromJewel": false,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "閃光效果的生效率UP"
            }
        ]
    },
    {
        "name": "捕獲名人",
        "type": "active",
        "fromSet": true,
        "fromJewel": false,
        "fromArmor": false,
        "list": [
            {
                "level": 1,
                "description": "捕獲獲取得的報酬數量變多的機率很高(從任務中途開始使用不會有效果)"
            }
        ]
    },
    {
        "name": "採集達人",
        "type": "active",
        "fromSet": false,
        "fromJewel": false,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "採集行動時，速度上升＆後仰無效"
            }
        ]
    },
    {
        "name": "異臭名人",
        "type": "active",
        "fromSet": false,
        "fromJewel": false,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "提高逃離投射器異臭彈的效果"
            }
        ]
    },
    {
        "name": "貫通彈・龍之箭強化",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "貫通彈、龍之箭的威力UP"
            }
        ]
    },
    {
        "name": "強化持續",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "持續時間1.1倍"
            },
            {
                "level": 2,
                "description": "持續時間1.2倍"
            },
            {
                "level": 3,
                "description": "持續時間1.3倍"
            }
        ]
    },
    {
        "name": "釣魚名人",
        "type": "active",
        "fromSet": false,
        "fromJewel": false,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "延長釣起魚的時間，就更容易釣起大魚"
            }
        ]
    },
    {
        "name": "通常彈・通常箭強化",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "通常彈、通常箭的威力UP"
            }
        ]
    },
    {
        "name": "麻痺耐性",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "減少麻痺狀態的時間30%"
            },
            {
                "level": 2,
                "description": "減少麻痺狀態的時間60%"
            },
            {
                "level": 3,
                "description": "不會變為麻痺狀態"
            }
        ]
    },
    {
        "name": "麻痺屬性強化",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "麻痺累積值變為1.05倍，麻痺累積值+10"
            },
            {
                "level": 2,
                "description": "麻痺累積值變為1.1倍，麻痺累積值+10"
            },
            {
                "level": 3,
                "description": "麻痺累積值變為1.2倍，麻痺累積值+10"
            }
        ]
    },
    {
        "name": "探索者的幸運",
        "type": "active",
        "fromSet": false,
        "fromJewel": false,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "發生機率UP"
            }
        ]
    },
    {
        "name": "強運",
        "type": "active",
        "fromSet": true,
        "fromJewel": false,
        "fromArmor": false,
        "list": [
            {
                "level": 1,
                "description": "完成任務獲取得的報酬數量變多的機率很高(從任務中途開始使用不會有效果)"
            }
        ]
    },
    {
        "name": "麻痺瓶追加",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": false,
        "list": [
            {
                "level": 1,
                "description": "弓可以裝著麻痺瓶"
            }
        ]
    },
    {
        "name": "跑者",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "持續耐力消耗量減少15%"
            },
            {
                "level": 2,
                "description": "持續耐力消耗量減少30%"
            },
            {
                "level": 3,
                "description": "持續耐力消耗量減少50%"
            }
        ]
    },
    {
        "name": "集中",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "計量表上升率5%UP，蓄力時間縮短5%"
            },
            {
                "level": 2,
                "description": "計量表上升率10%UP，蓄力時間縮短10%"
            },
            {
                "level": 3,
                "description": "計量表上升率20%UP，蓄力時間縮短20%"
            }
        ]
    },
    {
        "name": "植生學",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "草系消耗道具的取得數+1"
            },
            {
                "level": 2,
                "description": "追加實、種系消耗道具的取得數+1"
            },
            {
                "level": 3,
                "description": "追加蟲系消耗道具的取得數+1"
            },
            {
                "level": 4,
                "description": "追加菇系消耗道具的取得數+1"
            }
        ]
    },
    {
        "name": "鈍器能手",
        "type": "active",
        "fromSet": true,
        "fromJewel": false,
        "fromArmor": false,
        "list": [
            {
                "level": 1,
                "description": "銳利度愈差攻擊力愈高。遠距離武器的近身攻擊威力與使敵人昏厥的容易度有大幅提升"
            }
        ]
    },
    {
        "name": "最愛菇類",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "已可食用青菇與毒菇"
            },
            {
                "level": 2,
                "description": "追加可食用爆炸菇與麻痺菇"
            },
            {
                "level": 3,
                "description": "追加可食用風茄，鬼爆炸菇與心跳加速菇"
            }
        ]
    },
    {
        "name": "裂傷耐性",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "將減輕裂傷狀態造成的傷害"
            },
            {
                "level": 2,
                "description": "大幅減輕裂傷狀態造成的傷害"
            },
            {
                "level": 3,
                "description": "不會變為裂傷狀態"
            }
        ]
    },
    {
        "name": "無屬性強化",
        "type": "active",
        "fromSet": true,
        "fromJewel": true,
        "fromArmor": false,
        "list": [
            {
                "level": 1,
                "description": "強化裝備中的無屬性武器",
                "reaction": {
                    "noneElementAttackMutiple": {
                        "value": 1.1
                    }
                }
            }
        ]
    },
    {
        "name": "無傷",
        "type": "passive",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "技能發動時，基礎攻擊力+5",
                "reaction": {
                    "attack": {
                        "value": 5
                    }
                }
            },
            {
                "level": 2,
                "description": "技能發動時，基礎攻擊力+10",
                "reaction": {
                    "attack": {
                        "value": 10
                    }
                }
            },
            {
                "level": 3,
                "description": "技能發動時，基礎攻擊力+20",
                "reaction": {
                    "attack": {
                        "value": 20
                    }
                }
            }
        ]
    },
    {
        "name": "散彈・剛射強化",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "散彈、剛射的威力UP"
            }
        ]
    },
    {
        "name": "減輕膽怯",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "使後仰無效"
            },
            {
                "level": 2,
                "description": "使後仰無效，將屁股著地減輕為後仰狀態"
            },
            {
                "level": 3,
                "description": "使後仰、屁股著地無效"
            }
        ]
    },
    {
        "name": "超會心",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "會心攻擊時的傷害倍率增強為1.3倍",
                "reaction": {
                    "criticalMultiple": {
                        "value": 1.3
                    }
                }
            },
            {
                "level": 2,
                "description": "會心攻擊時的傷害倍率增強為1.35倍",
                "reaction": {
                    "criticalMultiple": {
                        "value": 1.35
                    }
                }
            },
            {
                "level": 3,
                "description": "會心攻擊時的傷害倍率增強為1.4倍",
                "reaction": {
                    "criticalMultiple": {
                        "value": 1.4
                    }
                }
            }
        ]
    },
    {
        "name": "超回復力",
        "type": "active",
        "fromSet": true,
        "fromJewel": false,
        "fromArmor": false,
        "list": [
            {
                "level": 1,
                "description": "體力在達到計量表的最大值前會持續自動回復"
            }
        ]
    },
    {
        "name": "雷屬性攻擊強化",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "雷屬性攻擊值+30",
                "reaction": {
                    "elementAttack": {
                        "type": "thunder",
                        "value": 30,
                        "multiple": 1
                    }
                }
            },
            {
                "level": 2,
                "description": "雷屬性攻擊值+60",
                "reaction": {
                    "elementAttack": {
                        "type": "thunder",
                        "value": 60,
                        "multiple": 1
                    }
                }
            },
            {
                "level": 3,
                "description": "雷屬性攻擊值+100",
                "reaction": {
                    "elementAttack": {
                        "type": "thunder",
                        "value": 100,
                        "multiple": 1
                    }
                }
            },
            {
                "level": 4,
                "description": "雷屬性攻擊值變為1.05倍，雷屬性攻擊值+100",
                "reaction": {
                    "elementAttack": {
                        "type": "thunder",
                        "value": 100,
                        "multiple": 1.05
                    }
                }
            },
            {
                "level": 5,
                "description": "雷屬性攻擊值變為1.1倍，雷屬性攻擊值+100",
                "reaction": {
                    "elementAttack": {
                        "type": "thunder",
                        "value": 100,
                        "multiple": 1.1
                    }
                }
            }
        ]
    },
    {
        "name": "道具使用強化",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "效果時間1.1倍"
            },
            {
                "level": 2,
                "description": "效果時間1.25倍"
            },
            {
                "level": 3,
                "description": "效果時間1.5倍"
            }
        ]
    },
    {
        "name": "搬運達人",
        "type": "active",
        "fromSet": false,
        "fromJewel": false,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "搬運時的移動速度上升，減輕著地時的反作用力"
            }
        ]
    },
    {
        "name": "滑走強化",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "可發動技能"
            }
        ]
    },
    {
        "name": "跳躍鐵人",
        "type": "active",
        "fromSet": false,
        "fromJewel": false,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "跳躍中，後仰無效"
            }
        ]
    },
    {
        "name": "達人藝",
        "type": "active",
        "fromSet": true,
        "fromJewel": false,
        "fromArmor": false,
        "list": [
            {
                "level": 1,
                "description": "發生會心攻擊時，不會消耗銳利度"
            }
        ]
    },
    {
        "name": "會心攻擊【屬性】",
        "type": "active",
        "fromSet": true,
        "fromJewel": false,
        "fromArmor": false,
        "list": [
            {
                "level": 1,
                "description": "因攻擊而出現會心時，所造成的屬性傷害(火、水、雷、冰、龍)會提高"
            }
        ]
    },
    {
        "name": "蜂蜜獵人",
        "type": "active",
        "fromSet": false,
        "fromJewel": false,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "蜂蜜取得數+1"
            }
        ]
    },
    {
        "name": "解放弓的蓄力階段",
        "type": "active",
        "fromSet": true,
        "fromJewel": true,
        "fromArmor": false,
        "list": [
            {
                "level": 1,
                "description": "弓的蓄力階段增加1個階段"
            }
        ]
    },
    {
        "name": "會心攻擊【特殊】",
        "type": "active",
        "fromSet": true,
        "fromJewel": false,
        "fromArmor": false,
        "list": [
            {
                "level": 1,
                "description": "因攻擊而出現會心時，所造成的狀態異常值(麻痺、毒、睡眠、爆破)會提高"
            }
        ]
    },
    {
        "name": "雷耐性",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "雷耐性+6",
                "reaction": {
                    "resistance": {
                        "type": "thunder",
                        "value": 6
                    }
                }
            },
            {
                "level": 2,
                "description": "雷耐性+12",
                "reaction": {
                    "resistance": {
                        "type": "thunder",
                        "value": 12
                    }
                }
            },
            {
                "level": 3,
                "description": "雷耐性+20、防禦力+10",
                "reaction": {
                    "defense": {
                        "value": 10
                    },
                    "resistance": {
                        "type": "thunder",
                        "value": 20
                    }
                }
            }
        ]
    },
    {
        "name": "睡眠屬性強化",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "睡眠累積值變為1.05倍，睡眠累積值+10"
            },
            {
                "level": 2,
                "description": "睡眠累積值變為1.1倍，睡眠累積值+10"
            },
            {
                "level": 3,
                "description": "睡眠累積值變為1.2倍，睡眠累積值+10"
            }
        ]
    },
    {
        "name": "睡眠耐性",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "減少睡眠狀態的時間30%"
            },
            {
                "level": 2,
                "description": "減少睡眠狀態的時間60%"
            },
            {
                "level": 3,
                "description": "不會變為睡眠狀態"
            }
        ]
    },
    {
        "name": "察覺",
        "type": "active",
        "fromSet": false,
        "fromJewel": false,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "在生態MAP上標記"
            }
        ]
    },
    {
        "name": "滿足感",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "效果發動率25%"
            }
        ]
    },
    {
        "name": "奪取耐力",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "減氣威力1.1倍"
            },
            {
                "level": 2,
                "description": "減氣威力1.2倍"
            },
            {
                "level": 3,
                "description": "減氣威力1.3倍"
            }
        ]
    },
    {
        "name": "精靈加護",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "效果發動時，傷害減輕15%"
            },
            {
                "level": 2,
                "description": "效果發動時，傷害減輕30%"
            },
            {
                "level": 3,
                "description": "效果發動時，傷害減輕50%"
            }
        ]
    },
    {
        "name": "綿花孢子草的知識",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "體力回復20"
            },
            {
                "level": 2,
                "description": "體力回復35"
            },
            {
                "level": 3,
                "description": "體力回復60"
            }
        ]
    },
    {
        "name": "精神抖擻",
        "type": "passive",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "效果發動時，會心率+10%",
                "reaction": {
                    "criticalRate": {
                        "value": 10
                    }
                }
            },
            {
                "level": 2,
                "description": "效果發動時，會心率+20%",
                "reaction": {
                    "criticalRate": {
                        "value": 20
                    }
                }
            },
            {
                "level": 3,
                "description": "效果發動時，會心率+30%",
                "reaction": {
                    "criticalRate": {
                        "value": 30
                    }
                }
            }
        ]
    },
    {
        "name": "睡眠瓶追加",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": false,
        "list": [
            {
                "level": 1,
                "description": "弓可以裝著睡眠瓶"
            }
        ]
    },
    {
        "name": "廣域化",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "給予周圍的同伴1\/3的效果"
            },
            {
                "level": 2,
                "description": "給予大範圍的同伴1\/3的效果"
            },
            {
                "level": 3,
                "description": "給予大範圍的同伴2\/3的效果"
            },
            {
                "level": 4,
                "description": "給予極大範圍的同伴2\/3的效果"
            },
            {
                "level": 5,
                "description": "給予極大範圍的同伴同樣的效果"
            }
        ]
    },
    {
        "name": "適應瘴氣環境",
        "type": "active",
        "fromSet": false,
        "fromJewel": false,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "使瘴氣霧霾無效，減輕酸造成的傷害"
            }
        ]
    },
    {
        "name": "潛伏",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "追丟的機率小幅提高"
            },
            {
                "level": 2,
                "description": "追丟的機率提高"
            },
            {
                "level": 3,
                "description": "追丟的機率大幅提高"
            }
        ]
    },
    {
        "name": "熱傷害無效",
        "type": "active",
        "fromSet": false,
        "fromJewel": false,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "使熱造成的傷害無效"
            }
        ]
    },
    {
        "name": "適應水場",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "即使在水中移動速度也不會減慢"
            },
            {
                "level": 2,
                "description": "在水中移動速度也不會減慢，提高在水中的迴避性能"
            },
            {
                "level": 3,
                "description": "在水中移動速度也不會減慢，大幅提高在水中的迴避性能"
            }
        ]
    },
    {
        "name": "毅力",
        "type": "active",
        "fromSet": true,
        "fromJewel": false,
        "fromArmor": false,
        "list": [
            {
                "level": 1,
                "description": "當體力在一定程度以上時，即使承受了超過體力的傷害，也能撐住而不耗盡體力一次"
            }
        ]
    },
    {
        "name": "龍耐性",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "龍耐性+6",
                "reaction": {
                    "resistance": {
                        "type": "dragon",
                        "value": 6
                    }
                }
            },
            {
                "level": 2,
                "description": "龍耐性+12",
                "reaction": {
                    "resistance": {
                        "type": "dragon",
                        "value": 12
                    }
                }
            },
            {
                "level": 3,
                "description": "龍耐性+20、防禦力+10",
                "reaction": {
                    "defense": {
                        "value": 10
                    },
                    "resistance": {
                        "type": "dragon",
                        "value": 20
                    }
                }
            }
        ]
    },
    {
        "name": "龍屬性攻擊強化",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "龍屬性攻擊值+30",
                "reaction": {
                    "elementAttack": {
                        "type": "dragon",
                        "value": 30,
                        "multiple": 1
                    }
                }
            },
            {
                "level": 2,
                "description": "龍屬性攻擊值+60",
                "reaction": {
                    "elementAttack": {
                        "type": "dragon",
                        "value": 60,
                        "multiple": 1
                    }
                }
            },
            {
                "level": 3,
                "description": "龍屬性攻擊值+100",
                "reaction": {
                    "elementAttack": {
                        "type": "dragon",
                        "value": 100,
                        "multiple": 1
                    }
                }
            },
            {
                "level": 4,
                "description": "龍屬性攻擊值變為1.05倍，龍屬性攻擊值+100",
                "reaction": {
                    "elementAttack": {
                        "type": "dragon",
                        "value": 100,
                        "multiple": 1.05
                    }
                }
            },
            {
                "level": 5,
                "description": "龍屬性攻擊值變為1.1倍，龍屬性攻擊值+100",
                "reaction": {
                    "elementAttack": {
                        "type": "dragon",
                        "value": 100,
                        "multiple": 1.1
                    }
                }
            }
        ]
    },
    {
        "name": "導蟲反應距離UP",
        "type": "active",
        "fromSet": false,
        "fromJewel": false,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "反應距離擴張"
            }
        ]
    },
    {
        "name": "整備",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "再使用時間縮短5%"
            },
            {
                "level": 2,
                "description": "再使用時間縮短10%"
            },
            {
                "level": 3,
                "description": "再使用時間縮短20%"
            }
        ]
    },
    {
        "name": "瘴氣耐性",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "抑制瘴氣的侵蝕"
            },
            {
                "level": 2,
                "description": "大幅抑制瘴氣的侵蝕"
            },
            {
                "level": 3,
                "description": "使瘴氣侵蝕狀態無效"
            }
        ]
    },
    {
        "name": "龍封力強化",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "龍封力強化一個階段"
            }
        ]
    },
    {
        "name": "騎乘名人",
        "type": "active",
        "fromSet": false,
        "fromJewel": false,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "容易騎乘怪物，更容易在騎乘狀態下成功"
            }
        ]
    },
    {
        "name": "攀岩者",
        "type": "active",
        "fromSet": false,
        "fromJewel": false,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "耐力消耗減少25%"
            }
        ]
    },
    {
        "name": "爆破屬性強化",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "爆破累積值變為1.05倍，爆破累積值+10"
            },
            {
                "level": 2,
                "description": "爆破累積值變為1.1倍，爆破累積值+10"
            },
            {
                "level": 3,
                "description": "爆破累積值變為1.2倍，爆破累積值+10"
            }
        ]
    },
    {
        "name": "蹲下移動速度UP",
        "type": "active",
        "fromSet": false,
        "fromJewel": false,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "加快蹲下時的移動速度"
            }
        ]
    },
    {
        "name": "爆破異常狀態的耐性",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "延長爆破前的間隔時間，減輕爆破時受到的傷害"
            },
            {
                "level": 2,
                "description": "更加延長爆破前的間隔時間，大幅減輕爆破時遭受的傷害"
            },
            {
                "level": 3,
                "description": "不會變為爆破異常狀態"
            }
        ]
    },
    {
        "name": "爆破瓶追加",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": false,
        "list": [
            {
                "level": 1,
                "description": "弓可以裝著爆破瓶"
            }
        ]
    },
    {
        "name": "屬性解放／裝填擴充",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "激發出1\/3的隱藏屬性／增加部分彈藥裝填數",
                "reaction": {
                    "enableElement": {
                        "multiple": 0.3333
                    }
                }
            },
            {
                "level": 2,
                "description": "激發出2\/3的隱藏屬性／增加多數彈藥裝填數",
                "reaction": {
                    "enableElement": {
                        "multiple": 0.6666
                    }
                }
            },
            {
                "level": 3,
                "description": "激發出100%的隱藏屬性／幾乎增加所有彈藥裝填數",
                "reaction": {
                    "enableElement": {
                        "multiple": 1
                    }
                }
            }
        ]
    },
    {
        "name": "屬性異常狀態耐性",
        "type": "active",
        "fromSet": false,
        "fromJewel": true,
        "fromArmor": true,
        "list": [
            {
                "level": 1,
                "description": "全屬性異常狀態的效果時間減少30%"
            },
            {
                "level": 2,
                "description": "全屬性異常狀態的效果時間減少60%"
            },
            {
                "level": 3,
                "description": "使全屬性異常狀態無效"
            }
        ]
    }
];