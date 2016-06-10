(function(){
  'use strict';

  angular.module('statistics')
    .config(['$stateProvider', function($stateProvider) {

      $stateProvider.state('root.statistics', {
        url: 'statistics',
        views: {
          'content@': {
            templateUrl: 'statistics/statistics.template.html'
          }
        }
      });
    }]);
})();
