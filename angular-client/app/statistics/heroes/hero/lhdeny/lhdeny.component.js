(function() {
  'use strict';

  angular.module('hero')
    .component('lhdeny', {
      templateUrl: 'statistics/heroes/hero/lhdeny/lhdeny.template.html',
      controllerAs: 'lhdenyCtrl',
      controller: 'LastHitDenyController',
      bindings: {
        currentHero: '<'
      }
    });

})();
