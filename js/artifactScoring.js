Vue.createApp({
    data() {
        return {
            typeSelected: 0,
            isStar1: false,
            isStar2: false,
            isStar3: false,
            isStar4: false,
            isStar5: false,
            typeArr: ["幸運兒", "遊醫", "冒險家"],
            attType: ["攻擊力", "攻擊力百分比", "防禦力", "防禦力百分比", "生命值", "生命值百分比", "爆擊率", "爆擊傷害", "元素充能效率", "元素精通", "治療加成", "物理傷害加成", "火元素傷害加成", "雷元素傷害加成", "冰元素傷害加成", "水元素傷害加成", "風元素傷害加成", "岩元素傷害加成"]
        }
    },
}).mount("#main");