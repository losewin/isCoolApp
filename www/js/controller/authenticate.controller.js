(function() {

	app.controller('LoginCtrl', ['$scope', '$location'
		, function($scope, $location) {
			$scope.auth = function() {
				$location.path('app/subjects')
			}
		}])
})()