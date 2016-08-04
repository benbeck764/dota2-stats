(function() {
  'use strict';

  angular.module('hero')
    .component('mostuseditems', {
      templateUrl: 'statistics/heroes/hero/mostuseditems/mostuseditems.template.html',
      controllerAs: 'mostUsedCtrl',
      controller: 'MostUsedItemsController',
      bindings: {
        currentHero: '<'
      }
    });

})();
