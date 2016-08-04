(function() {
  'use strict';

  angular.module('hero')
    .controller('WinRateController', ['statisticsService', Controller]);

  function Controller(statisticsService) {

    var vm = this;
    vm.winRate = {};

    vm.$onInit = function() {
      statisticsService.getWinRate(vm.currentHero.id, function(winrate) {
        vm.winRate = winrate;
      });
    }

    vm.$onChanges = function(changes) {
      vm.currentHero = changes.currentHero.currentValue;
      statisticsService.getWinRate(vm.currentHero.id, function(winrate) {
        vm.winRate = winrate;
      });
    }
  }
})();
