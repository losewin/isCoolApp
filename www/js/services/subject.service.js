(function() {

	app.service('SubjectServ', ['$http', '$q'
		, function($http, $q) {

			var deffered = $q.defer()

            this.get = function() {return deffered.promise}

			$http.get('data/subject.json').then(function(response) {
				deffered.resolve(response)
			})
		}])
})()