(function() {
  'use strict';

  angular.module('hero')
    .component('bestversus', {
      templateUrl: 'statistics/heroes/hero/bestversus/bestversus.template.html',
      controllerAs: 'bvCtrl',
      controller: 'BestVersusController',
      bindings: {
        currentHero: '<'
      }
    });

})();
