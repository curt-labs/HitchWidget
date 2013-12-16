'use strict';

angular.module('widgetApp').controller('MainCtrl', function ($scope, $http, VehicleService, PartService) {
    
    $scope.$watch('config.Year', function(newValue, oldValue) {
		if(newValue === oldValue || newValue === ''){
			return;
		}
		VehicleService.Year = parseFloat(newValue);
		VehicleService.getMakes(function(makes,parts,err){
			if(err){
				alertify.error(err);
				return;
			}
			$scope.Makes = makes;
			PartService.populateParts(parts);
			$scope.Parts = parts;
		});
    });
    $scope.$watch('config.Make', function(newValue, oldValue) {
		if(newValue === oldValue || newValue === ''){
			return;
		}
		VehicleService.Make = newValue;
		VehicleService.getModels(function(models,parts,err){
			if(err){
				alertify.error(err);
				return;
			}
			$scope.Models = models;
			$scope.Parts = parts;
		});
    });
    $scope.$watch('config.Model', function(newValue, oldValue) {
		if(newValue === oldValue || newValue === ''){
			return;
		}
		VehicleService.Model = newValue;
		VehicleService.getSubmodels(function(subs,parts,err){
			if(err){
				alertify.error(err);
				return;
			}
			$scope.Submodels = subs;
			$scope.Parts = parts;
		});
    });

    $scope.Years = [];
    $scope.Makes = [];
    $scope.Models = [];
    $scope.Submodels = [];

    VehicleService.getYears(function(years, err){
		if(err){
			alertify.error(err);
			return;
		}
		$scope.Years = years;
    });


});
