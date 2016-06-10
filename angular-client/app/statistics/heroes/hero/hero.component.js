(function() {
  'use strict';

  angular.module('hero')
    .component('hero', {
      templateUrl: 'statistics/heroes/hero/hero.template.html',
      controller: function() {
        this.$onChanges = function(changes) {
          console.log('TEST: ' + changes);
          this.currentHero = changes;
        };
      },
      bindings: {
        currentHero: '<'
      }
    });

})();
