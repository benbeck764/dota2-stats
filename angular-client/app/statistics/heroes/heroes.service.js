(function() {
  'use strict';

  angular.module('heroes')
    .factory('heroesService', ['$q', '$http', Service]);

  function Service($q, $http) {

    var service = this;

    service.data = {
      heroes: []
    };

    service.update = function() {
      init();
    };

    function init() {
      var promises = [];
      promises.push($http({method: 'GET', url: 'http://localhost:45101/api/heroes/information'}));
      $q.all(promises).then(function(data) {
        service.data.heroes = data[0].data;
      });
    }

    init();

    return service;
  }
})();
