(function() {
  'use strict';

  angular.module('bensAngularSeed',
    [
      /*
       Below are all of the dependencies to the application.
       */

      //////////////////////////////////////////////////////////////////////////////////////////
      // 3rd PARTY DEPENDENCIES

      /* Testing the component router for Angular 1.5.7 */
      'ngComponentRouter',

      /* Bootstrap's components in Angular */
      'ui.bootstrap',

      /* used for $cookieStore to maintain session variables */
      'ngCookies',

      //////////////////////////////////////////////////////////////////////////////////////////
      // LOCAL DEPENDENCIES
      'templates',

      'root',
      'overview',

      'statistics',
      'heroes',
      'hero'

    ]);
})();
