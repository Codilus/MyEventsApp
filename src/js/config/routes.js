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
      .state('app.fake_event', {
        url: '/offer/fake_event',
        views: {
          'menuContent': {
            templateUrl: 'templates/offer/fake_event.html',
            controller: 'FakeEventDetailCtrl'
          }
        }
      })
      .state('app.offer_promoters', {
        url: '/offer/event/:eventId/promoters',
        views: {
          'menuContent': {
            templateUrl: 'templates/offer/promoters.html',
            controller: 'OfferPromotersCtrl'
          }
        }
      })
      .state('app.offer_promoter', {
        url: '/offer/event/:eventId/promoter/:promoterId',
        views: {
          'menuContent': {
            templateUrl: 'templates/offer/promoter.html',
            controller: 'OfferPromoterCtrl'
          }
        }
      })
      .state('app.offer_details', {
        url: '/offers/:offerId',
        views: {
          'menuContent': {
            templateUrl: 'templates/offer/offer_details.html',
            controller: 'OfferDetailsCtrl'
          }
        }
      })
      .state('app.offers', {
        url: '/offers',
        views: {
          'menuContent': {
            templateUrl: 'templates/offer/offers.html',
            controller: 'OffersCtrl'
          }
        }
      })
      .state('app.offer_budget_new', {
        url: '/offers/:offerId/budget/new',
        views: {
          'menuContent': {
            templateUrl: 'templates/offer/budget_new.html',
            controller: 'OfferBudgetNewCtrl'
          }
        }
      })
      ;
      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/app/offer/fake_event');
    });

})();
