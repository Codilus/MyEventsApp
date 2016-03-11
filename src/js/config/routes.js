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
                $state.go("promoter.home");
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
        .state('promoter', {
          url: '/promoter',
          templateUrl: 'templates/promoter.html',
          abstract: true,
          controller: 'PromoterCtrl',
          resolve: {

          }
        })
        .state('promoter.home', {
          url: '/home',
          views: {
            'content': {
              templateUrl: 'templates/promoter/home.html',
              controller: 'PromoterHomeCtrl'
            }
          }
        })
        .state('promoter.account', {
          url: '/account',
          views: {
            'content': {
              templateUrl: 'templates/promoter/account.html',
              controller: 'PromoterAccountCtrl'
            }
          }
        })
        .state('promoter.events', {
          url: '/events',
          views: {
            'content': {
              templateUrl: 'templates/promoter/events.html',
              controller: 'PromoterEventsCtrl'
            }
          }
        });
      $urlRouterProvider.otherwise('/home');
    });

})();
