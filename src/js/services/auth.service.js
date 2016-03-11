(function() {
  'use strict';

  angular.module('MyEventsApp')

  .service('AuthSrv', function($auth) {

    return {
      currentUser: currentUser
    };

    ////////////////////////////////
    function currentUser() {
      return $auth.validateUser();
    }

  });

})();
