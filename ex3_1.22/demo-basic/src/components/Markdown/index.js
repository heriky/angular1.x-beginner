import angular from 'angular';

import ddo from './Markdown';
import md from '../MarkdownEditor' ;
import mdpr from '../MarkdownPreview';

export default angular.module('app.components.markdown', [md, mdpr])
	.component('markdown', ddo)
	.name;