(function() {
  'use strict';

  angular.module('heroes')
    .controller('HeroesController', ['heroesService', Controller]);

  function Controller(heroesService) {

    var vm = this;
    vm.data = heroesService.data;
    vm.currentHero = {};

    vm.$onInit = function() {
      this.selectHero(vm.data.heroes[0]);
    }

    vm.selectHero = function(hero) {
      vm.currentHero = hero;
    }

  }
})();
