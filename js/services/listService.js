angular.module("main").service("customerService", function($http){

	this.retrieveAllCustomers = function(){

		return $http.get("http://www.w3schools.com/angular/customers.php");

	}

});