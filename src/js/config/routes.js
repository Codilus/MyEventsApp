(function() {
  'use strict';

  angular.module('MyEventsApp')
    .config(function($stateProvider, $urlRouterProvider) {
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

      .state('app.browse', {
          url: '/browse',
          views: {
            'menuContent': {
              templateUrl: 'templates/browse.html'
            }
          }
        })
      .state('app.playlists', {
        url: '/playlists',
        views: {
          'menuContent': {
            templateUrl: 'templates/playlists.html',
            controller: 'PlaylistsCtrl'
          }
        }
      })

      .state('app.single', {
        url: '/playlists/:playlistId',
        views: {
          'menuContent': {
            templateUrl: 'templates/playlist.html',
            controller: 'PlaylistCtrl'
          }
        }
      })

      .state('app.promoter', {
        url: '/promoter/dashboard',
        views: {
          'menuContent': {
            templateUrl: 'templates/promoter/dashboard.html',
            controller: 'PromoterDashboardCtrl'
          }
        }
      })

      .state('app.promoter_profile', {
        url: '/promoter/profile',
        views: {
          'menuContent': {
            templateUrl: 'templates/promoter/profile.html',
            controller: 'PromoterProfileCtrl'
          }
        }
      });
      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/app/playlists');
    });

})();
