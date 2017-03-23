angular
.module('ngHomes')
.controller('homesController', function($scope, homesFactory) {

  $scope.homes;

  homesFactory.getHomes().then(function successCallback(response) {
    $scope.homes = response.data;
  }, function errorCallback(response) {
    console.log(response.statusText);
  });
});
