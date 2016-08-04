(function() {
  'use strict';

  angular.module('hero')
    .controller('BestVersusController', ['statisticsService', Controller]);

  function Controller(statisticsService) {

    var vm = this;
    vm.bestversus = {};

    vm.$onInit = function() {
      statisticsService.getBestVersus(vm.currentHero.id, function(bestversus) {
        vm.bestversus = bestversus;
      });
    }

    vm.$onChanges = function(changes) {
      vm.currentHero = changes.currentHero.currentValue;
      statisticsService.getBestVersus(vm.currentHero.id, function(bestversus) {
        vm.bestversus = bestversus;
      });
    }
  }
})();
