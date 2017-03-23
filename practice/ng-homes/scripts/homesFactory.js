angular
.module('ngHomes')
.factory('homesFactory', function($http) {

  function getHomes() {
    return $http.get('data/data.json');
  }

  return {
    getHomes: getHomes
  }
});
