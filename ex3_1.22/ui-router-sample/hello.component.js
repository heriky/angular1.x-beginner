angular.modlue('app.components', [])
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