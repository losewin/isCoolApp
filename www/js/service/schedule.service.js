(function() {
    app.service('SheduleServ', ['$http', '$q'
        , function($http, $q) {

            var deffered = $q.defer()

            this.get = function() {return deffered.promise}

            $http.get('data/schedule.json').then(function(response) {
                deffered.resolve(response)
            })
        }])
})()