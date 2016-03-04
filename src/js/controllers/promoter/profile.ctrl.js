(function() {
  'use strict';

  angular.module('MyEventsApp')

  .controller('PromoterProfileCtrl', function($scope, Promoter) {
    $scope.promoter = Promoter.get(1);
  });

})();
