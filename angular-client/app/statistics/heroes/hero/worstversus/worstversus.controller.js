(function() {
  'use strict';

  angular.module('hero')
    .controller('WorstVersusController', ['statisticsService', Controller]);

  function Controller(statisticsService) {

    var vm = this;
    vm.worstversus = {};

    vm.$onInit = function() {
      statisticsService.getWorstVersus(vm.currentHero.id, function(worstversus) {
        vm.worstversus = worstversus;
      });
    }

    vm.$onChanges = function(changes) {
      vm.currentHero = changes.currentHero.currentValue;
      statisticsService.getWorstVersus(vm.currentHero.id, function(worstversus) {
        vm.worstversus = worstversus;
      });
    }
  }
})();
