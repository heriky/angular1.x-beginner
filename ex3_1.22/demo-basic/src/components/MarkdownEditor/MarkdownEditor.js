import EventBus from 'angular-es-utils/event-bus';
import './style.css';

class MarkdownEditor {
	constructor(){}

	$onInit(){}

	$onChanges(){}

	$postLink(){

	}

	onChange(){
		EventBus.dispatch('content_change', this.content);
	}
}

// 组件
export default {
	controller: MarkdownEditor,
	bindings: {},
	template:`
		<div class='md-editor-container'>
			<h4>Markdown Editor</h4>
			<textarea class="md-eidtor" ng-model="$ctrl.content" cols="30" rows="10" resize="none" ng-change="$ctrl.onChange()"></textarea>
		</div>
	`
}