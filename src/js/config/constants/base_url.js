(function() {
  'use strict';

  angular.module('MyEventsApp')
	  .constant('BaseUrl', (function() {
			var URL = 'http://192.168.0.137';
			var PORT = '3000';

			return {
				url: URL + ':' + PORT
			}
	  })());
})();
