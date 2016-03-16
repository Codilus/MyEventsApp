(function() {
  'use strict';

  angular.module('MyEventsApp')
	  .constant('BaseUrl', (function() {
      var DEVELOPMENT_URL = 'http://localhost:3000';
      var PRODUCTION_URL = 'https://rocky-hamlet-43434.herokuapp.com';

			return {
				url: DEVELOPMENT_URL
			}
	  })());
})();
