import angular from 'angular' ;
//import components from './components';
import uiRouter from 'angular-ui-router';
// import config from './config';

// angular
// 	.module('app', [components, uiRouter, 'app.components.other'])
// 	.config(['$stateProvider', '$urlRouterProvider',config]); // 可以进一步整合


	var helloState = {
		name: 'hello',
		url: '/hello',
		component: 'hello',
	}
	var aboutState = {
	    name: 'about',
	    url: '/about',
	    component: 'about'
  	}
  	var detailState = {
  		name: 'about.detail',
  		url: '/detail', // 子路由
  		component: 'detail'
  	}

  	// 组件模块, 定义好的模块注入到主模块中
  	var components = angular.module('app.components', [])
	.component('hello', {
		template: '<h3>{{$ctrl.greeting}} Solar System!</h3>'+
		'<button ng-click="$ctrl.toggleGreeting()">Toggle</button>',
		controller: function(){
			this.greeting = 'hello';
			this.toggleGreeting = function(){
				this.greeting = (this.greeting == 'hello') ? 'whats up' : 'hello';
			}
		}
	})
	.component('about', {
		template: '<h4>This is about page.</h4> '+
			'<a ui-sref="about.detail">详情</a>'+
			'<ui-view></ui-view>'
	})
	.component('detail', {
		template: '<p style="color:red">xxx {{$ctrl.content}}</p>',
		controller: function(){
			this.content = "This is detail of about!"
		}
	})

// 主模块入口
export default angular.module('app', [uiRouter, 'app.components'])
	.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
  		$stateProvider.state(helloState);
  		$stateProvider.state(aboutState);
  		$stateProvider.state(detailState);
  	}])