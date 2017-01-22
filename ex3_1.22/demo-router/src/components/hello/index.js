import angular from 'angular';
import ddo from './Hello.controller';

export default angular.module('app.components.hello',[])
	.component('hello', ddo)
	.name;