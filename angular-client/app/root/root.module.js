(function() {
  'use strict';

  angular.module('root', [])
    .value('$routerRootComponent', 'root')
    .component('root', {
      templateUrl: 'overview/overview.template.html',
      $routeConfig: [
        {name: 'Statistics', path: '/statistics/...', component: 'statistics', useAsDefault: true}
      ]
    });
})();
