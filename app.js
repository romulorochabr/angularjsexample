var app = angular.module("main", ["ngRoute"]);

app.config(function($routeProvider){
	
	$routeProvider
	.when("/",{
		templateUrl : "/templates/main.htm",
		controller : "LoginController"
	})
	.when("/resetpassword",{
		templateUrl : "/templates/resetpass.htm",
		controller : "ResetPassController"
	})
	.when("/list", {
		templateUrl : "/templates/list.htm",
		controller : "ListController"
	})
	.otherwise({
		templateUrl : "/templates/error404.htm"
	});

});



