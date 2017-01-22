import angular from 'angular' ;
import components from './components';
import sanitize from 'angular-sanitize';

angular.module('app', [components])
	.filter('to_trusted', ['$sce', function($sce){
        return function(text) {
            return $sce.trustAsHtml(text);
        };
    }])