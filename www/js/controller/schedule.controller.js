(function() {
    app.controller('ScheduleCtrl', ['$scope', '$ionicLoading', 'SheduleServ', 'UsersFact',
      function($scope, $ionicLoading, SheduleServ, UsersFact) {

        var promice = SheduleServ.get(),
            query = UsersFact.query()

        $scope.schedules = []
        init()

        $ionicLoading.show({
            template: '<span class="icon spin ion-loading-d"></span> Loading Schedules'
        })
        $scope.users = {}

        function init() {
            promice.then(function(response) {
                $scope.schedules = response.data
            })

            query.$promise.then(function(response) {
                $ionicLoading.hide()            
            }, function(error) {
                console.log('error')
            })

            UsersFact.update({id: 1}, {name: 1, age: 17}, function(response) {
                console.log('success ', response)
            }, function(error) {
                console.log('error')
            })
        }
    }])
})()