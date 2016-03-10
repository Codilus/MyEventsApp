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
        .state('app.offer_event', {
          url: '/offer/events/:eventId',
          views: {
            'menuContent': {
              templateUrl: 'templates/offer/event.html',
              controller: 'OfferEventCtrl'
            }
          }
        })
        .state('app.offer_event_promoters', {
          url: '/offer/events/:eventId/promoters',
          views: {
            'menuContent': {
              templateUrl: 'templates/offer/event_promoters.html',
              controller: 'OfferEventPromotersCtrl'
            }
          }
        })
        .state('app.offer_event_promoter', {
          url: '/offer/events/:eventId/promoters/:promoterId',
          views: {
            'menuContent': {
              templateUrl: 'templates/offer/event_promoter.html',
              controller: 'OfferEventPromoterCtrl'
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
        .state('app.offer_event_offers', {
          url: '/offer/events/:eventId/offers',
          views: {
            'menuContent': {
              templateUrl: 'templates/offer/event_offers.html',
              controller: 'EventOffersCtrl'
            }
          }
        })
        .state('app.offer_event_offer', {
          url: '/offer/events/:eventId/offers/:offerId',
          views: {
            'menuContent': {
              templateUrl: 'templates/offer/event.html',
              controller: 'EventOfferCtrl'
            }
          }
        })
        ;
      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/app/offer/events/14');
    });

})();
