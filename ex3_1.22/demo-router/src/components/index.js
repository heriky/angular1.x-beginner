// 将所有组件打包在components模块中

import angular from 'angular';
import hello from './hello';

export default angular.module('app.components',[hello]) // 整合所有组件到app.components模块容器中
	.name;