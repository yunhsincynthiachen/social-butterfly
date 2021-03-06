/* 
	The route configurations and the controllers for the party wiki
*/


var socialButterfly = angular.module('socialButterfly', ['ngRoute']);

socialButterfly.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : '../pages/home.html',
            controller  : 'searchController'
        })
        .when('/eventList', {
        	templateUrl : '../pages/eventList.html',
        	controller : 'eventsController'
        })
        .when('/eventDescription/:event', {
        	templateUrl : '../pages/event.html',
        	controller : 'byEventController'
        })
        .when('/add', {
        	templateUrl : '../pages/add.html',
        	controller : 'addController'
        })
        .when('/addMe', {
        	templateUrl : '../pages/addMe.html',
        	controller : 'addMeController'
        })

        .when('/peopleList', {
            templateUrl : '../pages/people.html',
            controller : 'peopleController'
        })
        // .when('/edit/:topic', {
        // 	templateUrl : '../pages/edit.html',
        // 	controller : 'editController'
        // });

});

socialButterfly.controller('eventsController', function($scope, $http) {
	// Get all of the pages in the database
	console.log("events control")
	$http.get('/api/eventList')
		.success(function(data){
			$scope.events = data;
			console.log(data);
			// $scope.name = data[0].name;
			// console.log("The name is " + data[0].name);
		})
		.error(function(data) {
			console.log("Error: " + data);
		});
	
});


socialButterfly.controller('addController', function($scope, $http) {
	$scope.formData = {};
	$scope.msg = "";
	console.log('hello')

	// Submit new page 
	$scope.addPage = function () {
		$http.post('/api/addEvent', $scope.formData)
			.success(function(data){
				$scope.formData = {};
				$scope.msg = "Congratulations! You have successfully added your event!";
			})
			.error(function(data) {
			console.log("Error: " + data);
		});
	};

	// Hide the confirmation message when the user clicks on the form again
	$scope.hideMsg = function() {
		$scope.msg = "";
	};

});

socialButterfly.controller('addMeController', function($scope, $http) {
	$scope.personData = {};
	$scope.msg = "";
	console.log('hello')

	// Submit new page 
	$scope.addMe = function () {
		$http.post('/api/addMe', $scope.personData)
			.success(function(data){
				$scope.personData = {};
				$scope.msg = "Congratulations! You have successfully added yourself to the event!";
			})
			.error(function(data) {
			console.log("Error: " + data);
		});
	};

	// Hide the confirmation message when the user clicks on the form again
	$scope.hideMsg = function() {
		$scope.msg = "";
	};

});

socialButterfly.controller('peopleController', function($scope, $http) {
    // Get all of the pages in the database
    console.log("people control")
    $http.get('/api/peopleList')
        .success(function(data){
            $scope.people = data;
            console.log(data);
            // $scope.name = data[0].name;
            // console.log("The name is " + data[0].name);
        })
        .error(function(data) {
            console.log("Error: " + data);
        });
    
});


socialButterfly.controller('byEventController', function($scope, $http, $routeParams) {
	// Get the page id from the url
	var eventId = $routeParams.event;

	// Get the requested page by topic id
	$http.get('/api/eventDescription/' + eventId)
		.success(function(data){
			$scope.event = data;
		})
		.error(function(data) {
			console.log("Error: " + data);
		});
});

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








