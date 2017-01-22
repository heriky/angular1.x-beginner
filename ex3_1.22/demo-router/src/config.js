import routes from './routes';

export default function($stateProvider, $urlRouterProvider){
	// 配置具体路由
	routes.forEach(function(route){
		$stateProvider.state(route);
	});

	// 配置缺省
	$urlRouterProvider.when('', '/');
}