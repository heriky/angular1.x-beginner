import pic from './who.png'
class ExtraInfo{
	constructor(){}
	$onInit(){}
}

export default {
	controller: ExtraInfo,
	bindings:{},
	template: `
		<div class="extra container">
			<div class="tool">
				<div class="location"><span class="location-title">当前位置:</span><span class="location-addr">雁塔区电子城街道高新三路财富中心西100米</span><a class="location-switch" href="#">[切换地址]</a></div>
				<div class="search">
					<input type="search" class="search-input" placeholder="搜索商家,美食..."><a class="btn-search" href="#" title="搜索商家或美食">
						<i class="iconfont">&#xe616;</i>
					</a>
				</div>
			</div>
			<div class="game">
				<a href="#"><img class="game-entry" src="${pic}"></a>
			</div>
		</div>
	`
}