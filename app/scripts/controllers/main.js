'use strict';

angular.module('widgetApp').controller('MainCtrl', function ($scope, $http, VehicleFactory, PartFactory) {
    
    $scope.$watch('config.Year', function(newValue, oldValue) {
		if(newValue === oldValue || newValue === ''){
			return;
		}
		VehicleFactory.Year = parseFloat(newValue);
		VehicleFactory.getMakes(function(makes,parts,err){
			if(err){
				alertify.error(err);
				return;
			}
			$scope.Makes = makes;
			PartFactory.populate(parts);
			$scope.Parts = parts;
		});
    });
    $scope.$watch('config.Make', function(newValue, oldValue) {
		if(newValue === oldValue || newValue === ''){
			return;
		}
		VehicleFactory.Make = newValue;
		VehicleFactory.getModels(function(models,parts,err){
			if(err){
				alertify.error(err);
				return;
			}
			$scope.Models = models;
			PartFactory.populate(parts);
			$scope.Parts = parts;
		});
    });
    $scope.$watch('config.Model', function(newValue, oldValue) {
		if(newValue === oldValue || newValue === ''){
			return;
		}
		VehicleFactory.Model = newValue;
		VehicleFactory.getSubmodels(function(subs,parts,err){
			if(err){
				alertify.error(err);
				return;
			}
			$scope.Submodels = subs;
			PartFactory.populate(parts);
			$scope.Parts = parts;
		});
    });

    $scope.Years = [];
    $scope.Makes = [];
    $scope.Models = [];
    $scope.Submodels = [];

    VehicleFactory.getYears(function(years, parts, err){
		if(err){
			alertify.error(err);
			return;
		}
		$scope.Years = years;
		PartFactory.populate(parts);
		$scope.Parts = parts;
    });


});
