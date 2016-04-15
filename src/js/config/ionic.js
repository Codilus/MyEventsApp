(function() {
  'use strict';

  angular.module('MyEventsApp')
  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function loadPlugins() {
      try {
        if (window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
          // org.apache.cordova.statusbar required
          StatusBar.styleDefault();
        }
      } catch (e) {
        console.log(e);
        setTimeout(loadPlugins, 200);
      }
    });
  });
})();
