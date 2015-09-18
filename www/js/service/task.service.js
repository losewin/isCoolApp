(function() {
    app.service('TaskServ', ['$http', '$q', function($http, $q) {

        this.get = function() {return deffered.promise}
        
        var deffered = $q.defer()

        $http.get('data/task.json').then(function(response) {
            deffered.resolve(response)
        })
    }])
})()