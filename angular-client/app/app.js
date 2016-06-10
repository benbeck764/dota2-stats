(function() {
  'use strict';

  angular.module('bensAngularSeed',
    [
      /*
       Below are all of the dependencies to the application.
       */

      //////////////////////////////////////////////////////////////////////////////////////////
      // 3rd PARTY DEPENDENCIES

      /*The 'ui-router' is provided by the 'angular-ui-router' package. It manages all of
      the routing in the application and allows for advanced features such as multiple
      views on a page, nested views, and most importantly state.
      (This functionality should be implemented in Angular 2.0!)
      See: http://angularjs.blogspot.com/2015/09/angular-2-survey-results.html */
      'ui.router',

      /* Bootstrap's components in Angular */
      'ui.bootstrap',

      /* used for $cookieStore to maintain session variables */
      'ngCookies',

      //////////////////////////////////////////////////////////////////////////////////////////
      // LOCAL DEPENDENCIES
      'templates',
      'root',

      'statistics',
      'heroes',
      'hero'
    ]);
})();
