(function() {
  'use strict';

  angular.module('hero')
    .controller('LastHitDenyController', ['statisticsService', Controller]);

  function Controller(statisticsService) {

    var vm = this;
    vm.lhdeny = {};

    vm.$onInit = function() {
      statisticsService.getLastHitsAndDenies(vm.currentHero.id, function(lhdeny) {
        vm.lhdeny = lhdeny;
      });
    }

    vm.$onChanges = function(changes) {
      vm.currentHero = changes.currentHero.currentValue;
      statisticsService.getLastHitsAndDenies(vm.currentHero.id, function(lhdeny) {
        vm.lhdeny = lhdeny;
      });
    }
  }
})();
