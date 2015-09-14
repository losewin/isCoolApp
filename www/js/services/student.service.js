(function() {

    app.service('StudentServ', ['$http', '$q'
        , function($http, $q) {

            this.get = function() {return deffered.promise}

			var deffered = $q.defer()

			$http.get('data/student.json').then(function(response) {
				deffered.resolve(response)
			})
		}])
})()