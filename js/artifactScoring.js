Vue.createApp({
    data() {
        return {
            typeSelectedIndex: 0,
            isStar1: false,
            isStar2: false,
            isStar3: false,
            isStar4: false,
            isStar5: false,
            typeArr: ['幸運兒',
                '遊醫',
                '冒險家',
                '學士',
                '戰狂',
                '祭冰之人',
                '奇跡',
                '勇士之心',
                '教官',
                '祭火之人',
                '賭徒',
                '祭水之人',
                '武人',
                '守護之心',
                '祭雷之人',
                '流放者',
                '行者之心',
                '來歆餘響',
                '熾烈的炎之魔女',
                '絕緣之旗印',
                '角鬥士的終幕禮',
                '如雷的盛怒',
                '追憶之注連',
                '冰風迷途的勇士',
                '染血的騎士道',
                '華館夢醒形骸記',
                '昔日宗室之儀',
                '沉淪之心',
                '悠古的磐岩',
                '海染硨磲',
                '翠綠之影',
                '蒼白之火',
                '流浪大地的樂團',
                '逆飛的流星',
                '平息鳴雷的尊者',
                '辰砂往生錄',
                '渡過烈火的賢人',
                '千岩牢固',
                '被憐愛的少女',
            ],
            attType: ["攻擊力", "攻擊力百分比", "防禦力", "防禦力百分比", "生命值", "生命值百分比", "爆擊率", "爆擊傷害", "元素充能效率", "元素精通", "治療加成", "物理傷害加成", "火元素傷害加成", "雷元素傷害加成", "冰元素傷害加成", "水元素傷害加成", "風元素傷害加成", "岩元素傷害加成"],

        }
    },
    watch: {
        typeSelectedIndex(val) {
            if (val < 3) {
                this.isStar1 = true;
                this.isStar2 = true;
                this.isStar3 = true;
                this.isStar4 = false;
                this.isStar5 = false;
            } else if (val >= 3 && val < 16) {
                this.isStar1 = false;
                this.isStar2 = false;
                this.isStar3 = true;
                this.isStar4 = true;
                this.isStar5 = false;
            } else {
                this.isStar1 = false;
                this.isStar2 = false;
                this.isStar3 = false;
                this.isStar4 = true;
                this.isStar5 = true;
            }
        }
    },
}).mount("#main");