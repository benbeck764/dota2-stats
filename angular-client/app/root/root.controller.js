(function() {
  'use strict';

  angular.module('root')
    .controller('RootController', ['$state', Controller]);

  function Controller($state) {

    var vm = this;

    vm.navigate = function (link) {
      $state.go(link);
    };
  }
})();
