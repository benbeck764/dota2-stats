(function() {
  'use strict';

  angular.module('heroes')
    .component('heroesList', {
      templateUrl: 'statistics/heroes/heroes.template.html',
      controllerAs: 'heroesCtrl',
      controller: 'HeroesController'
    });

})();
