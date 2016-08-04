(function() {
  'use strict';

  angular.module('hero')
    .component('permin', {
      templateUrl: 'statistics/heroes/hero/permin/permin.template.html',
      controllerAs: 'perminCtrl',
      controller: 'PerMinController',
      bindings: {
        currentHero: '<'
      }
    });

})();
