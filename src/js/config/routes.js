(function() {
  'use strict';

  angular.module('MyEventsApp')
    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('login', {
          url: '/login',
          templateUrl: 'templates/login.html',
          controller: 'LoginCtrl'
        })
        .state('register', {
          url: '/register',
          templateUrl: 'templates/register.html',
          controller: 'RegisterCtrl'
        })
        .state('client', {
          url: '/client',
          templateUrl: 'templates/client.html',
          abstract: true,
          controller: 'ClientCtrl'
        })
        .state('client.home', {
          url: '/home',
          views: {
            'content': {
              templateUrl: 'templates/client/home.html',
              controller: 'ClientHomeCtrl'
            }
          }
        })
        .state('client.account', {
          url: '/account',
          views: {
            'content': {
              templateUrl: 'templates/client/account.html',
              controller: 'ClientAccountCtrl'
            }
          }
        });
      $urlRouterProvider.otherwise('/login');
    });

})();
