(function() {
  'use strict';

  angular.module('hero')
    .controller('MostUsedItemsController', ['statisticsService', Controller]);

  function Controller(statisticsService) {

    var vm = this;
    vm.mostUsed = {};

    vm.$onInit = function() {
      statisticsService.getMostUsedItems(vm.currentHero.id, function(mostUsed) {
        vm.mostUsed = mostUsed;
      });
    }

    vm.$onChanges = function(changes) {
      vm.currentHero = changes.currentHero.currentValue;
      statisticsService.getMostUsedItems(vm.currentHero.id, function(mostUsed) {
        vm.mostUsed = mostUsed;
      });
    }
  }
})();
