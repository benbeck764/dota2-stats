(function() {
  'use strict';

  angular.module('root', ['ngComponentRouter'])
    .value('$routerRootComponent', 'root')
    .component('root', {
      templateUrl: 'root/root.template.html',
      $routeConfig: [
        {path: '/', name: 'Home', component: 'overview', useAsDefault: true},
        {path: '/statistics', name: 'Statistics', component: 'statistics'},
        {path: '/**', redirectTo: ['Home']}
      ]
    });
})();
