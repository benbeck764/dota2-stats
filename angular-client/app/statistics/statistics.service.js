(function() {
  'use strict';

  angular.module('statistics')
    .factory('statisticsService', ['$q', '$http', Service]);

  function Service($q, $http) {

    var service = this;

    service.getKDA = function(id, success){
      var deferred = $q.defer();
      var promise = $http({method: 'GET', url: 'http://localhost:45101/api/statistics/kda/' + id});
      promise.then(function(data) {
        deferred.resolve();
        success(data.data);
      });
    };

    service.getWinRate = function(id, success) {
      var deferred = $q.defer();
      var promise = $http({method: 'GET', url: 'http://localhost:45101/api/statistics/winrate/' + id});
      promise.then(function(data) {
        deferred.resolve();
        success(data.data);
      });
    };

    service.getMostUsedItems = function(id, success) {
      var deferred = $q.defer();
      var promise = $http({method: 'GET', url: 'http://localhost:45101/api/items/mostused/' + id});
      promise.then(function(data) {
        deferred.resolve();
        success(data.data);
      });
    };

    service.getMatchDetails = function(id, success) {
      var deferred = $q.defer();
      var promise = $http({method: 'GET', url: 'http://localhost:45101/api/matches/' + id});
      promise.then(function(data) {
        deferred.resolve();
        success(data.data);
      });
    };

    service.getPerMin = function (id, success) {
      var deferred = $q.defer();
      var promise = $http({method: 'GET', url: 'http://localhost:45101/api/statistics/permin/' + id});
      promise.then(function(data) {
        deferred.resolve();
        success(data.data);
      });
    };

    service.getLastHitsAndDenies = function (id, success) {
      var deferred = $q.defer();
      var promise = $http({method: 'GET', url: 'http://localhost:45101/api/statistics/lhdeny/' + id});
      promise.then(function(data) {
        deferred.resolve();
        success(data.data);
      });
    };

    service.getWorstVersus = function (id, success) {
      var deferred = $q.defer();
      var promise = $http({method: 'GET', url: 'http://localhost:45101/api/statistics/worstversus/' + id});
      promise.then(function(data) {
        deferred.resolve();
        success(data.data);
      });
    };

    service.getBestVersus = function (id, success) {
      var deferred = $q.defer();
      var promise = $http({method: 'GET', url: 'http://localhost:45101/api/statistics/bestversus/' + id});
      promise.then(function(data) {
        deferred.resolve();
        success(data.data);
      });
    };

    return service;
  }
})();
