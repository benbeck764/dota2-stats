(function() {
  'use strict';

  angular.module('hero')
    .controller('PerMinController', ['statisticsService', Controller]);

  function Controller(statisticsService) {

    var vm = this;
    vm.permin = {};

    vm.$onInit = function() {
      statisticsService.getPerMin(vm.currentHero.id, function(permin) {
        vm.permin = permin;
      });
    }

    vm.$onChanges = function(changes) {
      vm.currentHero = changes.currentHero.currentValue;
      statisticsService.getPerMin(vm.currentHero.id, function(permin) {
        vm.permin = permin;
      });
    }
  }
})();
