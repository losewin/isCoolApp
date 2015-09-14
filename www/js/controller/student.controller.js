(function() {

	app.controller('StudentCtr', ['$scope', 'StudentServ'
		, function($scope, StudentServ) {

			var promice = StudentServ.get()

            init()

            function init() {
                promice.then(function(response) {
                    $scope.listStudent = response.data
                })
            }
		}])
})()