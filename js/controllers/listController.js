angular.module("main").controller("ListController", function(customerService){
	var listController = this;

	listController.msg = "";
	listController.customers;

	listController.retrieveAllCustomers = function(){


    	customerService.retrieveAllCustomers()
    		.success(function (studs) {
                listController.customers = studs;
            })
            .error(function (error) {
                listController.msg  = "Unable to load customer data";
            });
	}


});