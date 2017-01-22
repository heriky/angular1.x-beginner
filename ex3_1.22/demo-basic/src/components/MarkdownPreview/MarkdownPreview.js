import EventBus from 'angular-es-utils/event-bus';
import './style.css';
var marked = require('marked');
marked.setOptions({
  highlight: function (code) {
    return require('highlight.js').highlightAuto(code).value;
  }
});

class MarkdownPreview{
	constructor(){
	}
	$onInit(){
		this.deregister  = EventBus.on('content_change', (content)=>{
			this.content = marked(content);
		})
	}
	$onDestroy(){
		this.deregister();
	}

}

export default {
	controller: MarkdownPreview,
	template: `
		<div class="preview-container">
			<h4>Markdown Preview</h4>
			<div class="preview"  ng-bind-html="$ctrl.content|to_trusted"></div>
		</div>
	`
}