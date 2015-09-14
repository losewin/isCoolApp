(function() {

	app.controller('SubjectCtr', ['$scope', 'SubjectServ'
		, function($scope, SubjectServ) {
			
			var promise = SubjectServ.get()

			promise.then(function(response) {
				$scope.listSubject = response.data
			})
		}])


	app.controller('SpiceficSubjectCtr', ['$scope', '$stateParams', 'SubjectServ'
		, function($scope, $stateParams, SubjectServ) {

			var promice = SubjectServ.get()
			$scope.subjectInfo = {}

			init()

			function init() {
				promice.then(function(response) {
					var data = response.data
					for(var i=0; i<data.length; i++) {
						if(data[i].id == $stateParams.subjectID) {
							$scope.subjectInfo.title = data[i].name
							$scope.subjectInfo.schedule = data[i].schedule
							break
						}
					}
				})
			}
		}])
})()