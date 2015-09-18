(function() {
    app.controller('SubjectCtrl', ['$scope', '$stateParams', 'SheduleServ'
        , function($scope, $stateParams, SheduleServ) {
            var promise = SheduleServ.get()

            $scope.scheInfo = {};

            init()

            function init() {
                promise.then(function(response) {
                    var data = response.data;
                    for(var i=0; i<data.length; i++) {
                        if(data[i].id == $stateParams.schedID) {
                            $scope.scheInfo = data[i]
                        }
                    }
                })
            }
    }])
})()