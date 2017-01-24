class CatNav{
	constructor(){}
	$onInit(){}
}

export default {
	controller: CatNav,
	bindings:{},
	template:`
	<section class="nav-cat container clearfix">
		<span class="vendor-cat">商家分类：</span>
		<div class="cat-detail">
			<div class="main-cat">
				<a class="main-cat-item" href="#">全部商家1</a>
				<a class="main-cat-item" href="#">全部商家2</a>
				<a class="main-cat-item" href="#">全部商家3</a>
				<a class="main-cat-item" href="#">全部商家4</a>
				<a class="main-cat-item" href="#">全部商家5</a>
				<a class="main-cat-item" href="#">全部商家6</a>
				<a class="main-cat-item" href="#">全部商家7</a>
				<a class="main-cat-item" href="#">全部商家8</a>
				<a class="main-cat-item" href="#">全部商家9</a>
			</div>
			<div class="sub-cat clearfix"><a href="#" class="sub-cat-item">子分类1</a>
				<a href="#" class="sub-cat-item">子分类2</a>
				<a href="#" class="sub-cat-item">子分类3</a>
				<a href="#" class="sub-cat-item">子分类4</a>
				<a href="#" class="sub-cat-item">子分类5</a>
				<a href="#" class="sub-cat-item">子分类6</a>
				<a href="#" class="sub-cat-item">子分类7</a>
				<a href="#" class="sub-cat-item">子分类8</a>
				<a href="#" class="sub-cat-item">子分类9</a>
				<a href="#" class="sub-cat-item">子分类10</a>
				<a href="#" class="sub-cat-item">子分类11</a>
				<a href="#" class="sub-cat-item">子分类12</a>
				<a href="#" class="sub-cat-item">子分类11</a>
				<a href="#" class="sub-cat-item">子分类12</a>
			</div>
		</div>
	</section>
	`
}