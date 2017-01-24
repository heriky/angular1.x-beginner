import {items} from '../../api/data';
console.log(Object.keys(items).length)
class Vendors{
	constructor(){}
	$onInit(){
		this.items = items;
	}
}

export default {
	controller: Vendors,
	bindings: {},
	template: `
	<section class="main-food container">
			<a href="#" class="main-food__item" ng-repeat="(id, item) in $ctrl.items">
				{{item}}
				<div class="food-item__splash">
					<img src="${require('./assets/images/food.png')}">
					<span class="time-cost">{{item.time}}</span>
				</div><div class="food-item__detail">
					<h4 class="food-item__title">汉堡王（高新店）汉堡王（高新店）汉堡王（高新店）</h4>
					<span class="food-item__rating">星级</span>
					<span class="sale">月售2960单</span>
					<div class="fee">配送费4元</div>
					<div class="act">
						<i class="zhun">准</i><i class="bao">保</i><i class="piao">票</i><i class="xin">新</i>
					</div>
				</div>
			<div class="tooltip" >
				<h3 class="tooltip-title">汉堡王(高新店)</h3>
				<p class="tooltip-zhun">
					<i class="zhun">准</i>
					准时必达，超时秒赔
				</p>
				<p class="tooltip-bao">
					<i class="bao">保</i>
					已加入“外卖保”计划，食品安全有保障
				</p>
				<p class="tooltip-piao">
					<i class="piao">票</i>
					该商家支持开发票，请在下单时填好发票抬头抬头抬头
				</p>
				<span class="tooltip-fee">配送费4元</span><span class="tooltip-time">平均44+分钟送达</span>
				<p class="tooltip-desc">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti obcaecati consequuntur, cum quia iste alias illo magnam atque, non impedit nostrum, quidem corrupti debitis voluptatum, ex doloremque quod aliquam veritatis.
				</p>
			</div>
			</a>
			<div class="load-more">点击加载更多商家...</div>
			</section>
	`
}