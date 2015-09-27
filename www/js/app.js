// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var app = angular.module('iscoolapp', ['ionic', 'ngResource', 'tabSlideBox'])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

app.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.account-management', {
      url: '/account-management',
      views: {
        'menuContent': {
          templateUrl: 'templates/account-management.html'
        }
      }
    })
    .state('app.schedules', {
      url: '/schedules',
      views: {
        'menuContent': {
          templateUrl: 'templates/schedules.html',
          controller: 'ScheduleCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/schedules/:schedID',
    views: {
      'menuContent': {
        templateUrl: 'templates/tasks.html',
        controller: 'SubjectCtrl'
      }
    }
  })
  // .state('app.announcement', {
  //   url: '/announcement',
  //   views: {
  //     'menuContent': {
  //       templateUrl: 'templates/announcement.html',
  //       controller : 'AnnoucementCtrl'
  //     }
  //   }
  // })
  .state('tab-student', {
    url: '/students',
    abstract: true,
    templateUrl: 'templates/students.html'
  })
    .state('tab-student.scanstudentbarcode', {
      url: '/scanbarcode',
      views: {
        'scan-barcode': {
          templateUrl: 'templates/tabs/attendance-barcode.html'
        }
      }
    })
    .state('tab-student.manual', {
      url: '/manual',
      views: {
        'manual': {
          templateUrl: 'templates/tabs/attendance-manual.html'
        }
      }
    })
    .state('tab-student.activestudents', {
      url: '/active-students',
      views: {
        'active-students': {
          templateUrl: 'templates/tabs/attendance-activestudent.html'
        }
      }
    })
    .state('app.grade', {
      url: '/tasks/grade',
      views: {
        'menuContent': {
          templateUrl: 'templates/grade.html',
          controller: 'isCoolGradeCtrl'
        }
      }
    })
    .state('app.syllabus', {
      url: '/tasks/syllabus',
      views: {
        'menuContent': {
          templateUrl: 'templates/syllabus.html',
          controller: 'isCoolSyllabusCtrl'
        }
      }
    })
    .state('app.announce', {
      url: '/tasks/announce',
      views: {
        'menuContent': {
          templateUrl: 'templates/announce.html',
          controller: 'isCoolAnnounceCtrl'
        }
      }
    })
    .state('app.discuss', {
      url: '/tasks/discuss',
      views: {
        'menuContent': {
          templateUrl: 'templates/discuss.html',
          controller: 'isCoolDiscussCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/schedules');
});
