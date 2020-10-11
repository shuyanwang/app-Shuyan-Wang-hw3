var myApp = angular.module('myApp',[]);

myApp.controller('myController', function($scope) {
  $scope.message = 'Hola!';

  $scope.register = function() {
  	if (!$scope.firstName) {
  		$scope.message = 'First Name cannot be empty';
  	} else if (!$scope.lastName) {
  		$scope.message = 'Last Name cannot be empty';
  	} else if (!$scope.emailAddress) {
  		$scope.message = 'Email Address cannot be empty';
  	} else if (!$scope.notes) {
  		$scope.message = 'Notes cannot be empty';
  	} else {
  		$scope.message = 'Validation successful';
  	}
  };
});
