import angular from 'angular';
import md from './MarkdownEditor';
import mdpr from './MarkdownPreview' ;
import markdown from './Markdown';
import mdd from './MD';


export default angular.module('app.components', [md, mdpr, markdown]).name