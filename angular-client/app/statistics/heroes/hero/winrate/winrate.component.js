(function() {
  'use strict';

  angular.module('hero')
    .component('winrate', {
      templateUrl: 'statistics/heroes/hero/winrate/winrate.template.html',
      controllerAs: 'winRateCtrl',
      controller: 'WinRateController',
      bindings: {
        currentHero: '<'
      }
    });

})();
