(function() {
  'use strict';

  angular.module('MyEventsApp')

  .controller('ClientBillingCtrl', function($scope, ClientBillingResource) {
    $scope.months = moment.months();
    $scope.years = getYears();
    $scope.billingFilter = {
      month: moment().month(),
      year: moment().year()
    };
    $scope.getBilling = getBilling;


    getBilling();

    console.log($scope.selectedMonth);

    ////////////////////////////////

    function getBilling() {
      console.log("oi");
      $scope.billing = null;
      ClientBillingResource.query($scope.billingFilter).$promise
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
  });

})();
