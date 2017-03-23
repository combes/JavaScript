angular
.module('ngHomes')
.controller('homesController', function($scope, homesFactory) {
  $scope.homes = homesFactory.getHomes();
});
