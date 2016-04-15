(function() {
  'use strict';

  angular.module('MyEventsApp')

  .controller('PromoterBillingCtrl', function($scope, PromoterBillingResource, $ionicPopup) {
    $scope.months = moment.months();
    $scope.years = getYears();
    $scope.billingFilter = {
      month: moment().month() + 1,
      year: moment().year()
    };
    $scope.getBilling = getBilling;
    $scope.showBillingDetails = showBillingDetails; 

    getBilling();

    console.log($scope.selectedMonth);

    ////////////////////////////////

    function getBilling() {
      // console.log("oi");
      $scope.billing = null;
      PromoterBillingResource.query($scope.billingFilter).$promise
        .then(function(billing) {
          console.log(billing);
          $scope.billing = billing;
        });
    }

    function getYears() {
      var years = [];

      for (var i = 0; i < 3; i++) {
        years.push(moment().year() - i);
      }

      return years;
    }

    function showBillingDetails() {
      $ionicPopup.alert({
        template: '<p> O processamento indica quantas vezes foi requisitado algum processamento do Servidor. <br>\
        Já Eventos realizados e Orçamentos solicitados indicam o número desses serviços usados no mês. <br>\
        Cada um desses serviços e processamento tem uma tarifa associada.<p>',
        title: "Como é calculado minha Tarifa?"
      });
    }
  });

})();
