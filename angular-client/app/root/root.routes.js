(function(){
  'use strict';

  angular.module('root')
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

      $stateProvider.state('root', {
        url: '/',
        views: {
          'content': {
            templateUrl: 'overview/overview.template.html',
            controller: 'RootController',
            controllerAs: 'rootCtrl'
          }
        }
      });
    }]);
})();
