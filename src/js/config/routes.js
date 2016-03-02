(function() {
  'use strict';

  angular.module('MyEventsApp')
    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('login', {
          url: '/login',
          templateUrl: 'templates/login.html',
          controller: 'LoginCtrl'
        });
      $urlRouterProvider.otherwise('/login');
    });

})();
