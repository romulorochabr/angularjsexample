angular.module("main").controller("ResetPassController", function(){
	var resetPassController = this;

	resetPassController.email = "";
	resetPassController.msg = "";

	resetPassController.send  = function(){
		this.msg = "Instructions to reset your password was sent!";
	};

});