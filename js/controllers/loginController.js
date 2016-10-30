angular.module("main").controller("LoginController", function(){
	var loginController = this;

	loginController.email = "";
	loginController.password = "";
	loginController.msg = "";

	loginController.signin = function(){
		this.msg = "User logged in!"
	}


});