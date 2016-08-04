(function() {
  'use strict';

  angular.module('hero')
    .component('matchdetails', {
      templateUrl: 'statistics/heroes/hero/matches/matches.template.html',
      controllerAs: 'matchesCtrl',
      controller: 'MatchesController',
      bindings: {
        currentHero: '<'
      }
    });

})();
