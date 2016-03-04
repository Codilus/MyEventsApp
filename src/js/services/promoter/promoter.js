(function() {
  'use strict';

  angular.module('MyEventsApp')

  .factory('Promoter', function() {
    

    return {
      get: function(id) {
        return { name: 'João', email: 'Bobao@gmail.com', cpf: '111111111-11' };
      }
    }
  });

})();
