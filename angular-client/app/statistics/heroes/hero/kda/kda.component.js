(function() {
  'use strict';

  angular.module('hero')
    .component('kda', {
      templateUrl: 'statistics/heroes/hero/kda/kda.template.html',
      controllerAs: 'kdaCtrl',
      controller: 'KdaController',
      bindings: {
        currentHero: '<'
      }
    });

})();
