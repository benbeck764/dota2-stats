(function() {
  'use strict';

  angular.module('heroes')
    .controller('HeroesController', ['heroesService', Controller]);

  function Controller(heroesService) {

    var vm = this;
    vm.data = null;
    vm.currentHero = {};

    vm.$onInit = function() {
      vm.data = heroesService.data;
      vm.selectHero(vm.data.heroes[0]);
    }

    vm.selectHero = function(hero) {
      vm.currentHero = hero;
    }
  }
})();
