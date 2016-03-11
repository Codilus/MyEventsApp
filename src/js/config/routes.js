(function() {
  'use strict';

  angular.module('MyEventsApp')
    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
          url: '/home',
          resolve: {
            verifyLoggedUser: function(AuthSrv, $state) {
              return AuthSrv.currentUser().then(function(user) {
                $state.go("client.home");
              }, function(err) {
                $state.go("login");
              });
            }
          }
        })
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
          controller: 'ClientCtrl',
          resolve: {

          }
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
        .state('client.event-new', {
          url: '/events/new',
          views: {
            'content': {
              templateUrl: 'templates/client/events/new.html',
              controller: 'ClientEventsNewCtrl'
            }
          }
        })
        .state('client.event-show', {
          url: '/events/{:eventId}',
          views: {
            'content': {
              templateUrl: 'templates/client/events/show.html',
              controller: 'ClientEventsShowCtrl'
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
      $urlRouterProvider.otherwise('/home');
    });

})();
