(function() {
    app.controller('TaskCtrl', ['$scope', '$ionicLoading', '$ionicModal', '$filter', 'TaskServ'
        , function($scope, $ionicLoading, $ionicModal, $filter, TaskServ) {

            var promise = TaskServ.get()

            init()


            $scope.tasks = []
            $scope.postData = {
                isDone : false,
                subject: 1,
                instructor: 1
            }

            $ionicModal.fromTemplateUrl('templates/post-task.html', {
                scope: $scope
            }).then(function(modal) {
                $scope.modal = modal;
            });

            $ionicLoading.show({
                template: '<span class="icon spin ion-loading-d"></span> Loading Your Task'
            })


            $scope.openTask = function() {
                $scope.modal.show()
            }

            $scope.closeTask = function() {
                $scope.modal.hide()
            }

            $scope.doTask = function() {
                var orderTask = $filter('orderBy')($scope.tasks, '-id')
                $scope.postData.id = orderTask[0].id+1
                $scope.postData

                $ionicLoading.show({template: '<span class="icon spin ion-loading-d"></span> Posting you task ...'})

                promise.then(function(response) {
                    var obj = response.data
                    obj.push(angular.copy($scope.postData))
                    $ionicLoading.hide()
                    $scope.modal.hide()
                })
            }


            function init() {
                promise.then(function(response) {
                    $scope.tasks = response.data
                    $ionicLoading.hide()
                })
            }

        }])
})()