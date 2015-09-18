(function() {
    app.service('StudentServ', ['$http', '$q', function($http, $q) {

        this.get = function() {return deffered.promice}

        var deffered = $q.defer()

        $http.get('data/student.json').then(function(response) {
            deffered.resolve(response)
        })
    }])
})()