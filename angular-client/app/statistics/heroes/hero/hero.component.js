(function() {
  'use strict';

  angular.module('hero')
    .component('hero', {
      templateUrl: 'statistics/heroes/hero/hero.template.html',
      controllerAs: 'heroCtrl',
      controller: 'HeroController',
      bindings: {
        currentHero: '<'
      }
    });

})();
