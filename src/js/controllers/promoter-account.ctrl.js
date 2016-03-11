(function() {
  'use strict';

  angular.module('MyEventsApp')

  .controller('PromoterAccountCtrl', function($scope, $auth) {
    $scope.save = save;

    //////////////

    function save() {
      $auth.updateAccount($scope.user)
        .then(function(resp) {
          console.log(resp);
        })
        .catch(function(resp) {
          // handle error response
        });
    }

  });

})();
