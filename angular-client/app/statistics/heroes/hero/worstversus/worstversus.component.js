(function() {
  'use strict';

  angular.module('hero')
    .component('worstversus', {
      templateUrl: 'statistics/heroes/hero/worstversus/worstversus.template.html',
      controllerAs: 'wvCtrl',
      controller: 'WorstVersusController',
      bindings: {
        currentHero: '<'
      }
    });

})();
