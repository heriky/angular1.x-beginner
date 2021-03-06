// 菜品分类配置

const menu = [{
	id:0
	name:'全部商家',
	sub:[]
},{
	id:1,
	name:'快餐便当',
	sub:{
		0:{ name:'全部快餐', items:[1,2,3,4,5,6]}, // subid为0时的信息
		1:{ name:'便当', items:[1,2,3]},
		2:{ name:'米粉', items: [4,5,6]}
	}
},{
	id:2,
	name:'特色菜系',
	sub:{
		0:{name:"全部特色菜系", items: [1,2,3,4,5,6]},
		1:{name:"川湘菜", items:[1,2,3]},
		2:{name:"西北菜", items:[4,5,6]}
	}
},{
	id:3,
	name:'异国料理',
	sub:{
		0: {name:'全部异国料理', items:[1,2,3,4,5,6]},
		1: {name:'披萨', items:[1,2,3]},
		2: {name: '意大利面', items:[4,5,6]}
	}
},{
	id:4,
	name:'小吃夜宵',
	sub:{
		0:{name:'全部小吃夜宵', items:[1,2,3,4,5,6]},
		1:{name:"地方小吃", items:[1,2,3]},
		2:{name:'炸鸡炸串', items:[4,5,6]}
	}
},{
	id:5,
	name:'甜品',
	sub: {
		0:{name:'全部甜品', items:[1,2,3,4,5,6]},
		1:{name:'饮品', items:[1,2,3]},
		2:{name:'甜品', items:[4,5,6]}
	}
}]

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
	time:'45分钟+'，
	rating：5, // 五星级
	sale: 2000 // 月售2000单
	fee: 4 // 配送费4元，0表示免费
	spec: [0,1,2,3] //0准，1包，2票，3新
	desc: '临近春节，即将关门，具体参考本店休假表' //商家对门面的描述
}

const items = {
	1:{
		catId:'1_1', // {主分类}_{子分类}
		title: "汉堡王（高新店）",
		splash:'food',
		time:'45分钟+'，
		rating：5, // 五星级
		sale: 2000, // 月售2000单
		fee: 4, // 配送费4元，0表示免费
		spec: [0,1,2,3], //0准，1包，2票，3新
		brand: true, // 是否为品牌店
		desc: '临近春节，即将关门，具体参考本店休假表' //商家对门面的描述
	},
	2: {
		catId:'1_2', // {主分类}_{子分类}
		title: "元祖食品",
		splash:'food1',
		time:'45分钟+'，
		rating：5, // 五星级
		sale: 2000, // 月售2000单
		fee: 4, // 配送费4元，0表示免费
		spec: [0,1,2,3], //0准，1包，2票，3新
		desc: '临近春节，即将关门，具体参考本店休假表' //商家对门面的描述
	},
	3: {
		catId:'2_1', // {主分类}_{子分类}
		title: "coco(卜蜂来莲花店)",
		splash:'food2',
		time:'45分钟+'，
		rating：5, // 五星级
		sale: 2000, // 月售2000单
		fee: 4, // 配送费4元，0表示免费
		spec: [0,1,2,3], //0准，1包，2票，3新
		desc: '临近春节，即将关门，具体参考本店休假表' //商家对门面的描述
	},
	4:{
		catId:'2_2', // {主分类}_{子分类}
		title: "鲜芋仙（西市店）",
		splash:'food3',
		time:'45分钟+'，
		rating：5, // 五星级
		sale: 2000, // 月售2000单
		fee: 4, // 配送费4元，0表示免费
		spec: [0,1,2,3], //0准，1包，2票，3新
		desc: '临近春节，即将关门，具体参考本店休假表' //商家对门面的描述
	},
	5:{
		catId:'3_1', // {主分类}_{子分类}
		title: "yoyo私家口味虾",
		splash:'food4',
		time:'45分钟+'，
		rating：5, // 五星级
		sale: 2000, // 月售2000单
		fee: 4, // 配送费4元，0表示免费
		spec: [0,1,2,3], //0准，1包，2票，3新
		desc: '临近春节，即将关门，具体参考本店休假表' //商家对门面的描述
	},
	6: {
		catId:'3_2', // {主分类}_{子分类}
		title: "披萨来了（高新店）",
		splash:'food5',
		time:'45分钟+'，
		rating：5, // 五星级
		sale: 2000, // 月售2000单
		fee: 4, // 配送费4元，0表示免费
		spec: [0,1,2,3], //0准，1包，2票，3新
		desc: '临近春节，即将关门，具体参考本店休假表' //商家对门面的描述
	}
}

export {menu,special,items};