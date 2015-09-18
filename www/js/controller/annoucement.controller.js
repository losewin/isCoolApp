(function() {
    app.controller('AnnoucementCtrl', ['$scope', '$ionicModal', '$ionicLoading'
        , function($scope, $ionicModal, $ionicLoading) {

            $ionicModal.fromTemplateUrl('templates/post-announcement.html', {
                scope: $scope
            }).then(function(modal) {
                $scope.modal = modal;
            });


            // $ionicLoading.show({
            //     template: '<span class="icon spin ion-loading-d"></span> Loading Schedules'
            // })

            // $ionicLoading.hide()
            
            $scope.openAnnoucement = function() {
                $scope.modal.show();
            }

            $scope.closeAnnoucement = function() {
                $scope.modal.hide();
            }

            $scope.doPostAnnouncement = function() {

            }
        }])
})()