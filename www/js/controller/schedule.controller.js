(function() {
    app.controller('ScheduleCtrl', ['$scope', '$ionicLoading', 'SheduleServ'
    , function($scope, $ionicLoading, SheduleServ) {

        var promice = SheduleServ.get()
        $scope.schedules = []
        init()

        $ionicLoading.show({
            template: '<span class="icon spin ion-loading-d"></span> Loading Schedules'
        })

        function init() {
            promice.then(function(respponse) {
                $scope.schedules = respponse.data
                $ionicLoading.hide()
            })
        }
    }])
})()