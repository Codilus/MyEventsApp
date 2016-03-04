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
      .state('app.fake_event', {
        url: '/contract/fake_event',
        views: {
          'menuContent': {
            templateUrl: 'templates/contract/fake_event.html',
            controller: 'FakeEventDetailCtrl'
          }
        }
      })
      .state('app.contract_promoters', {
        url: '/contract/promoters',
        views: {
          'menuContent': {
            templateUrl: 'templates/contract/promoters.html',
            controller: 'ContractPromotersCtrl'
          }
        }
      })
      .state('app.contract_promoter', {
        url: '/contract/promoter/:promoterId',
        views: {
          'menuContent': {
            templateUrl: 'templates/contract/promoter.html',
            controller: 'ContractPromoterCtrl'
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
      });
      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/app/playlists');
    });

})();
