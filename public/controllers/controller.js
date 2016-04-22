var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
	console.log("Smoke?");


	    var refresh = function() {
	    /*$http.get('/RedAppDB').success(function(response) {
	    console.log("I got the data I requested");
	    $scope.RedAppDB = response;
	    $scope.module = "";        // clears form field on refresh
	  });
	    $http.get('/secondCollection').success(function(response) {
	    console.log("I got the data I requested  -------");
	    $scope.secondCollection = response;
	    $scope.module2 = "";        // clears form field on refresh
	  });
*/
	    $http.get('/taskone').success(function(response) {
	    console.log("I got the data I requested  -------");
	    $scope.taskone = response;
	    //$scope.module3 = "";        // clears form field on refresh
	  });

	};

	refresh();

	$scope.addModule = function() {
		console.log("addModule was clicked. ", $scope.module);
		$http.post('/RedAppDB', $scope.module);
	};

		$scope.addModule2 = function() {
			console.log("addModule2 was clicked. ", $scope.module2);
			$http.post('/secondCollection', $scope.module2);
		};

			$scope.addModule3 = function() {
			console.log("addModule3 was clicked. ", $scope.module3);
			$http.post('/taskone', $scope.module3);
		};

	$scope.remove = function(id) {
		console.log("remove press", id);
		$http.delete('/RedAppDB/' + id).success(function(response) {
			refresh();
		});
	};

		$scope.remove2 = function(id) {
			console.log("remove press", id);
			$http.delete('/secondCollection/' + id).success(function(response) {
				refresh();
			});
		};

			$scope.remove3 = function(id) {
				console.log("remove press", id);
				$http.delete('/taskone/' + id).success(function(response) {
					refresh();
				});
			};

	$scope.edit = function(id) {
	  console.log(id);
	  $http.get('/RedAppDB/' + id).success(function(response) {
	    $scope.module = response;
	  });
	};
}]);﻿