(function() {
  'use strict';

  angular.module('MyEventsApp')

  .factory('Event', function() {
    

    return {
      getAll: function() {
        return [
          { name: 'Aniversario 1', date: '14/06/1993', status: 'Ok' },
          { name: 'Aniversario 2', date: '14/06/1993', status: 'Ok' },
          { name: 'Aniversario 3', date: '14/06/1993', status: 'Ok' },
          { name: 'Aniversario 4', date: '14/06/1993', status: 'Ok' },
          { name: 'Aniversario 5', date: '14/06/1993', status: 'Ok' }
        ];
      }
    }
  });

})();
