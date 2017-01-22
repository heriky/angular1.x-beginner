class Hello {
	constructor(){
		this.tag = 'Hell 页面'
	}
	$onInit(){}
	$onDestroy(){}
	$postLink(){}
	$onChanges(){}
}

export default {
	controller: Hello,
	bindings: {},
	template: '<p>组件化测试</p>'
};