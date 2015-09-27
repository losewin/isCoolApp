
(function() {

  app.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

app.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

app.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('isCoolTasksCtrl', function($scope) {
  $scope.tasks = [
    { title: 'Grades', name: 'grade',id: 1 , icon: 'ion-clipboard'},
    { title: 'Syllabus', name: 'syllabus', id: 2 , icon: 'ion-ios-list'},
    { title: 'Announcements', name: 'announce',id: 3, icon: 'ion-speakerphone' },
    { title: 'Discussions', name:'discuss', id: 4, icon: 'ion-chatbox-working' },
   
  ];
})

.controller('isCoolGradeCtrl', function($scope, $stateParams) {
  $scope.grade = [
    {
      id: 1,  title: 'Grados'
    }
  ]
})
.controller('isCoolSyllabusCtrl', function($scope, $stateParams) {
  $scope.syllabus = [
       {
      id: 2,  title: 'Syllas'
    }
  ]
})
.controller('isCoolAnnounceCtrl', function($scope, $stateParams) {
  $scope.announce = [
   
    {
      id: 3,  title: 'Announces'
    }
  ]
})
.controller('isCoolDiscussCtrl', function($scope, $stateParams) {
  $scope.discuss = [
    
    {
      id: 4,  title: 'Discusss'
    }
  ]
})
.controller("IndexCtrl", ['$rootScope', "$scope", "$stateParams", "$q", "$location", "$window", '$timeout', 
      function($rootScope, $scope, $stateParams, $q, $location, $window, $timeout){
          $scope.onSlideMove = function(data){
        alert("You have selected " + data.index + " tab");
      };
        }
        ]);

})()