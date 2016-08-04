(function() {
  'use strict';

  angular.module('hero')
    .controller('MatchesController', ['statisticsService', Controller]);

  function Controller(statisticsService) {

    var vm = this;
    vm.details = {};

    vm.$onInit = function() {
      statisticsService.getMatchDetails(vm.currentHero.id, function(details) {
        vm.details = details;
      });
    }

    vm.$onChanges = function(changes) {
      vm.currentHero = changes.currentHero.currentValue;
      statisticsService.getMatchDetails(vm.currentHero.id, function(details) {
        vm.details = details;
      });
    }
  }
})();
