// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        abstract : false,
        templateUrl : 'templates/login.html',
        controller : 'LoginCtrl'
      })
      // ACCOUNT MENU
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl : 'templates/account-menu.html'
      })
      .state('app.subjects', {
        url: '/subjects',
        views : {
          'accountMenu' : {
            templateUrl: 'templates/subject.html',
            controller : 'SubjectCtr'
          }
        }
      })
      .state('app.account', {
        url: '/account',
        views : {
          'accountMenu' : {
            templateUrl: 'templates/account.html'
          }
        }
      })
      .state('subjectMenu', {
        url: '/subject-menu/:subjectID',
        abstract : false,
        templateUrl : 'templates/subject-menu.html',
        controller : 'SpiceficSubjectCtr'
      })

      // ATTENDACE TAB
      .state('attendance', {
        url: '/attendance',
        abstract : true,
        templateUrl : 'templates/attendance-tab.html'
      })
      .state('attendance.camera', {
        url: '/camera',
        views : {
          'attendace-camera' : {
            templateUrl : 'templates/attendance/attendance-barcode.html',
            controller : 'StudentCtr'
          }
        }
      })
      .state('attendance.manual', {
        url: '/manual',
        views: {
          'attendace-manual' : {
            templateUrl : 'templates/attendance/attendance-manual.html',
            controller : 'StudentCtr'
          }
        }
      })
      .state('attendance.view', {
        url: '/view',
        views: {
          'attendace-view' : {
            templateUrl : 'templates/attendance/attendance-students.html',
            controller : 'StudentCtr'
          }
        }
      })

      // STUDENT RECORD
      .state('student-record', {
        url : '/student-record',
        abstract : false,
        templateUrl : 'templates/student-record.html'
      })
      // ANNOUNCEMENT
      .state('announcement', {
        url : '/announcement',
        abstract : false,
        templateUrl : 'templates/announcement.html'
      })
      // TASK
      .state('task', {
        url : '/task',
        abstract : false,
        templateUrl : 'templates/task.html'
      })
      // SETTINGS
      .state('settings', {
        url : '/settings',
        abstract : false,
        templateUrl : 'templates/settings.html'
      })

    $urlRouterProvider.otherwise('/login')

  })
