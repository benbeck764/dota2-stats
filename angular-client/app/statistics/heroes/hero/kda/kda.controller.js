(function() {
  'use strict';

  angular.module('hero')
    .controller('KdaController', ['statisticsService', Controller]);

  function Controller(statisticsService) {

    var vm = this;
    vm.kda = {};

    vm.$onInit = function() {
      statisticsService.getKDA(vm.currentHero.id, function(kda) {
        vm.kda = kda;
      });
    }

    vm.$onChanges = function(changes) {
      vm.currentHero = changes.currentHero.currentValue;
      statisticsService.getKDA(vm.currentHero.id, function(kda) {
        vm.kda = kda;
      });
    }
  }
})();
