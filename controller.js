var myApp = angular.module('myApp',[]);

myApp.controller('myController', function($scope) {
  let displayMessage = document.getElementById("displayMessage")

  let setRegisterErrorMessage = function(fieldName) {
  	$scope.message = fieldName + ' cannot be empty';
  	displayMessage.style.color = "red";
  }

  $scope.register = function() {
  	if (!$scope.firstName) {
  		setRegisterErrorMessage('First Name')
  	} else if (!$scope.lastName) {
  		setRegisterErrorMessage('Last Name');
  	} else if (!$scope.emailAddress) {
  		setRegisterErrorMessage('Email Address');
  	} else if (!$scope.notes) {
  		setRegisterErrorMessage('Notes');
  	} else {
  		$scope.message = 'Validation successful';
  		displayMessage.style.color = "green";
  	}
  };
});
