/* 
	The route configurations and the controllers for the party wiki
*/


var socialButterfly = angular.module('socialButterfly', ['ngRoute']);

socialButterfly.config(function($routeProvider) {
    $routeProvider
        // .when('/', {
        //     templateUrl : '../pages/home.html',
        //     controller  : 'searchController'
        // })
        .when('/eventList', {
        	templateUrl : '../pages/eventList.html',
        	controller : 'eventsController'
        })
        // .when('/eventDescription/:event', {
        // 	templateUrl : '../pages/event.html',
        // 	controller : 'byTopicController'
        // })
        // .when('/add', {
        // 	templateUrl : '../pages/add.html',
        // 	controller : 'addController'
        // })
        // .when('/edit/:topic', {
        // 	templateUrl : '../pages/edit.html',
        // 	controller : 'editController'
        // });

});

socialButterfly.controller('eventsController', function($scope, $http) {
	// Get all of the pages in the database
	$http.get('/api/eventList')
		.success(function(data){
			$scope.events = data;
			$scope.name = data[0].name;
			console.log("The name is " + data[0].name);
		})
		.error(function(data) {
			console.log("Error: " + data);
		});
	
});


// wikiParty.controller('addController', function($scope, $http) {
// 	$scope.formData = {};
// 	$scope.msg = "";

// 	// Submit new page 
// 	$scope.addPage = function () {
// 		$http.post('/api/addTopic', $scope.formData)
// 			.success(function(data){
// 				$scope.formData = {};
// 				$scope.msg = "Congratulations! You have successfully added your party theme!";
// 			})
// 			.error(function(data) {
// 			console.log("Error: " + data);
// 		});
// 	};

// 	// Hide the confirmation message when the user clicks on the form again
// 	$scope.hideMsg = function() {
// 		$scope.msg = "";
// 	};

// });

// wikiParty.controller('byTopicController', function($scope, $http, $routeParams) {
// 	// Get the page id from the url
// 	var topicId = $routeParams.topic;

// 	// Get the requested page by topic id
// 	$http.get('/api/pages/' + topicId)
// 		.success(function(data){
// 			$scope.topic = data;
// 		})
// 		.error(function(data) {
// 			console.log("Error: " + data);
// 		});
// });

// wikiParty.controller('searchController', function($scope, $http, $window) {
// 	$scope.searchData = {};

// 	$scope.alertMessage = "";

// 	$scope.searchPage = function () {
// 		// Search by name
// 		$http.post('/api/search', $scope.searchData)
// 			.success(function(data) {
// 				$scope.searchData = {};
// 				if (!data[0]) {
// 					// Alert the user if the theme they searched for doesn't yet exist
// 					$scope.alertMessage = "That party theme does not yet exist in our database!";

// 				} else {
// 					console.log("Search result: " + data[0].name);
// 					//Redirect the User to the Appropriate page
// 					$window.location.href= "#pages/" + data[0]._id;
// 				};			
// 			})
// 			.error(function(data) {
// 				console.log("Error: " + data);
// 		});
// 	};
// });

// wikiParty.controller('editController', function($scope, $http, $routeParams, $window) {
// 	$scope.editData = {};

// 	// Get the topic id from the url
// 	var editId = $routeParams.topic;
	
// 	$scope.editPage = function () {
// 		// Post edits to the page with the corresponding id 
// 		$http.post('/api/edit/' + editId, $scope.editData)
// 			.success( function(data) {
// 				$scope.editData = {};
// 				$window.location.href= "#pages/" + editId;
// 			})
// 			.error(function(data) {
// 				console.log("Error: " + data);
// 		});
// 	};

// });








