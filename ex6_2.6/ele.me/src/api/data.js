// 菜品分类配置

const menu = {
	0:{
		name:'全部商家',
		sub:[]
	},
	1:{
		name:'快餐便当',
		sub:{
			0:{ name:'全部快餐', items:[1,2,3,4,5,6]}, // subid为0时的信息
			1:{ name:'便当', items:[1,2,3]},
			2:{ name:'米粉', items: [4,5,6]}
		}
	},
	2:{
		name:'特色菜系',
		sub:{
			0:{name:"全部特色菜系", items: [1,2,3,4,5,6]},
			1:{name:"川湘菜", items:[1,2,3]},
			2:{name:"西北菜", items:[4,5,6]}
		}
	},
	3:{
		name:'异国料理',
		sub:{
			0: {name:'全部异国料理', items:[1,2,3,4,5,6]},
			1: {name:'披萨', items:[1,2,3]},
			2: {name: '意大利面', items:[4,5,6]}
		}
	},
	4:{
		name:'小吃夜宵',
		sub:{
			0:{name:'全部小吃夜宵', items:[1,2,3,4,5,6]},
			1:{name:"地方小吃", items:[1,2,3]},
			2:{name:'炸鸡炸串', items:[4,5,6]}
		}
	},
	5:{
		name:'甜品',
		sub: {
			0:{name:'全部甜品', items:[1,2,3,4,5,6]},
			1:{name:'饮品', items:[1,2,3]},
			2:{name:'甜品', items:[4,5,6]}
		}
},
6: {
	name: '商店超市',
	sub: {
		0: {name: '全部商店超市', items: []},
		1: {name: '酒品', items:[]},
		2: {name: '烟品', items: []}
	}
}}

const special = {
	0:{name:"准", desc:"准时必达，超时秒赔"},
	1:{name:'保', desc:'已加入"外卖宝"计划，食品安全有保障'},
	2:{name:'票', desc:'该商家支持开发票，请在订购时填写发票抬头信息'},
	3:{name:'新', desc:'新店开张，欢迎光临'}
}

// 店铺数据结构
const item = {
	id:999, //当前商家id
	catId:'1_1', // {主分类}_{子分类}
	title: "汉堡王（高新店）",
	splash:'图片地址',
	time:'45分钟+',
	rating:4.8, // 五星级
	sale: 2000, // 月售2000单
	fee: 4, // 配送费4元，0表示免费
	spec: [0,1,2,3], //0准，1包，2票，3新
	desc: '临近春节，即将关门，具体参考本店休假表' //商家对门面的描述
}

const items = {
	1:{
		catId:'1_1', // {主分类}_{子分类}
		title: "汉堡王（高新店）",
		splash: require('../assets/images/food/food1.png'),
		time:'45分钟+',
		rating:3.7, // 五星级
		sale: 2000, // 月售2000单
		fee: 4, // 配送费4元，0表示免费
		spec: [2,3], //0准，1包，2票，3新
		brand: true, // 是否为品牌店
		desc: '临近春节，即将关门，具体参考本店休假表' //商家对门面的描述
	},
	2: {
		catId:'1_2', // {主分类}_{子分类}
		title: "元祖食品",
		splash: require('../assets/images/food/food2.png'),
		time:'45分钟+',
		rating:1, // 五星级
		sale: 2000, // 月售2000单
		fee: 4, // 配送费4元，0表示免费
		spec: [0,3], //0准，1包，2票，3新
		brand: true,
		desc: '临近春节，即将关门，具体参考本店休假表' //商家对门面的描述
	},
	3: {
		catId:'2_1', // {主分类}_{子分类}
		title: "coco(卜蜂来莲花店)",
		splash: require('../assets/images/food/food3.png'),
		time:'45分钟+',
		rating:2.5, // 五星级
		sale: 2000, // 月售2000单
		fee: 4, // 配送费4元，0表示免费
		spec: [3], //0准，1包，2票，3新
		desc: '临近春节，即将关门，具体参考本店休假表' //商家对门面的描述
	},
	4:{
		catId:'2_2', // {主分类}_{子分类}
		title: "鲜芋仙（西市店）",
		splash:require('../assets/images/food/food4.png'),
		time:'45分钟+',
		rating:4.4, // 五星级
		sale: 2000, // 月售2000单
		fee: 4, // 配送费4元，0表示免费
		spec: [0,1,2,3], //0准，1包，2票，3新
		desc: '临近春节，即将关门，具体参考本店休假表' //商家对门面的描述
	},
	5:{
		catId:'3_1', // {主分类}_{子分类}
		title: "yoyo私家口味虾",
		splash:require('../assets/images/food/food5.png'),
		time:'45分钟+',
		rating:3.3, // 五星级
		sale: 2000, // 月售2000单
		fee: 4, // 配送费4元，0表示免费
		spec: [0,3], //0准，1包，2票，3新
		desc: '临近春节，即将关门，具体参考本店休假表' //商家对门面的描述
	},
	6: {
		catId:'3_2', // {主分类}_{子分类}
		title: "披萨来了（高新店）",
		splash:require('../assets/images/food/food6.png'),
		time:'45分钟+',
		rating:4.5, // 五星级
		sale: 2000, // 月售2000单
		fee: 4, // 配送费4元，0表示免费
		spec: [3], //0准，1包，2票，3新
		desc: '临近春节，即将关门，具体参考本店休假表' //商家对门面的描述
	},
	7: {
		catId:'4_1', // {主分类}_{子分类}
		title: "泰熙家",
		splash:require('../assets/images/food/food7.png'),
		time:'45分钟+',
		rating:1.0, // 五星级
		sale: 2000, // 月售2000单
		fee: 4, // 配送费4元，0表示免费
		spec: [1,2,3], //0准，1包，2票，3新
		desc: '临近春节，即将关门，具体参考本店休假表' //商家对门面的描述
	},
	8: {
		catId:'4_2', // {主分类}_{子分类}
		title: "正宗黄焖鸡米饭",
		splash:require('../assets/images/food/food8.png'),
		time:'45分钟+',
		rating:5, // 五星级
		sale: 2000, // 月售2000单
		fee: 4, // 配送费4元，0表示免费
		spec: [2,3], //0准，1包，2票，3新
		desc: '临近春节，即将关门，具体参考本店休假表' //商家对门面的描述
	},
	9: {
		catId:'5_1', // {主分类}_{子分类}
		title: "一品小厨",
		splash:require('../assets/images/food/food9.png'),
		time:'45分钟+',
		rating:2.5, // 五星级
		sale: 2000, // 月售2000单
		fee: 4, // 配送费4元，0表示免费
		spec: [3], //0准，1包，2票，3新
		desc: '临近春节，即将关门，具体参考本店休假表' //商家对门面的描述
	},
	10: {
		catId:'5_2', // {主分类}_{子分类}
		title: "小米串串",
		splash:require('../assets/images/food/food10.png'),
		time:'45分钟+',
		rating:3, // 五星级
		sale: 2000, // 月售2000单
		fee: 4, // 配送费4元，0表示免费
		spec: [0,1,2,3], //0准，1包，2票，3新
		desc: '临近春节，即将关门，具体参考本店休假表' //商家对门面的描述
	}
}

export {menu,special,items};