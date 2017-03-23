angular
	.module('ngHomes')
	.controller('homesController', function($scope, homesFactory) {

		$scope.homes;

		$scope.priceInfo = {
			min: 0,
			max: 1000000
		}

		$scope.newListing = {};

		$scope.addHome = function(newListing) {
			newListing.image = 'default-Home';
			$scope.homes.push(newListing);
			$scope.newListing = {};
		}

		$scope.editHome = function(Home) {
			$scope.editListing = true;
			$scope.existingListing = Home;
		}

		$scope.saveHomeEdit = function() {
			$scope.existingListing = {};
			$scope.editListing = false;
		}

		$scope.deleteHome = function(listing) {
			var index = $scope.homes.indexOf(listing);
			$scope.homes.splice(index, 1);
			$scope.existingListing = {};
			$scope.editListing = false;
		}

		homesFactory.getHomes().success(function(data) {
			$scope.homes = data;
		}).error(function(error) {
			console.log(error);
		});

	});
