(function() {
    app.controller('SubjectCtrl', ['$scope', '$ionicLoading', '$stateParams', 'SheduleServ'
        , function($scope, $ionicLoading, $stateParams, SheduleServ) {
            var promise = SheduleServ.get()

            $ionicLoading.show({
                template: '<span class="icon spin ion-loading-d"></span> Loading Schedules'
            })

            $scope.scheInfo = {};

            init()
            function init() {
                promise.then(function(response) {
                    console.log($stateParams.schedID)
                    var data = response.data;
                    for(var i=0; i<data.length; i++) {
                        if(data[i].id == $stateParams.schedID) {
                            console.log(data[i])
                            $scope.scheInfo = data[i]
                        }
                    }
                    $ionicLoading.hide()
                    $scope.tasks = [
                        { title: 'Grades', name: 'grade',id: 1 , icon: 'ion-clipboard'},
                        { title: 'Syllabus', name: 'syllabus', id: 2 , icon: 'ion-ios-list'},
                        { title: 'Announcements', name: 'announce',id: 3, icon: 'ion-speakerphone' },
                        { title: 'Discussions', name:'discuss', id: 4, icon: 'ion-chatbox-working' },
                       
                      ];
                })
            }
    }])
})()