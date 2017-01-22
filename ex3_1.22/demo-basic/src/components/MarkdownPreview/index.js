import angular from 'angular'
import ddo from './MarkdownPreview'

export default angular.module('app.components.mdpr',[])
	.component('mdpr', ddo)
	.name;