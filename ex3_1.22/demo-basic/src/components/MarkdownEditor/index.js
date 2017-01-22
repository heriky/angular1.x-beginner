import angular from 'angular' ;
import ddo from './MarkdownEditor';

// 组件注册
export default angular.module('app.components.md', [])
	.component('md', ddo)
	.name;