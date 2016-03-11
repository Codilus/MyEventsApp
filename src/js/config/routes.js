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
        .state('app.offer_offers', {
          url: '/offer/offers',
          views: {
            'menuContent': {
              templateUrl: 'templates/offer/offers.html',
              controller: 'OfferOffersCtrl'
            }
          }
        })
        .state('app.offer_offer', {
          url: '/offer/offers/:offerId',
          views: {
            'menuContent': {
              templateUrl: 'templates/offer/offer.html',
              controller: 'OfferOfferCtrl'
            }
          }
        })
        .state('app.offer_budget_new', {
          url: '/offer/offers/:offerId/budget/new',
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
              controller: 'OfferEventOffersCtrl'
            }
          }
        })
        .state('app.offer_event_offer', {
          url: '/offer/events/:eventId/offers/:offerId',
          views: {
            'menuContent': {
              templateUrl: 'templates/offer/event.html',
              controller: 'OfferEventOfferCtrl'
            }
          }
        })
        ;
      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/app/offer/events/14');
    });

})();
