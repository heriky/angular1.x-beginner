import './style.css';

var marked = require('marked');
marked.setOptions({
  highlight: function (code) {
    return require('highlight.js').highlightAuto(code).value;
  }
});


class MD{
	constructor(){}
	$onInit(){
		this.marked = marked ;
	}

	onChange(){
		this.markedContent = marked(this.content)
	}
}

export default {
	controller: MD,
	bindings: {},
	template: `
		<div class="markdow">
			<h4 class="markdow-title">Markdown编辑器</h4>
			<textarea class="markdown-editor" cols="30" rows="10" ng-model="$ctrl.content" ng-change="$ctrl.onChange()"></textarea>
			<div class="markdown-preview" ng-bind-html="$ctrl.markedContent|to_trusted"></div>
		</div>
	`
}