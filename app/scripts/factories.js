var app = angular.module('widgetApp.factories', []);

app.factory('VehicleFactory',function($http){
	var VehicleFactory = {
		Year: 0,
		Make: '',
		Model: '',
		Submodel: '',
		Extensions: []
	};

	var API_KEY = '8aee0620-412e-47fc-900a-947820ea1c1d';

	VehicleFactory.getYears = function(callback){
		$http.jsonp('http://goapi.curtmfg.com/vehicle?callback=JSON_CALLBACK&key='+API_KEY).success(function(data){
			
			var Years = [];
			angular.forEach(data.ConfigOption.Options, function(opt){
				Years.push(opt);
			});
			callback(Years.sort().reverse(), data.Matched.Parts,null);
		}).error(function(err){
			callback([],[],err);
		});
	};

	VehicleFactory.getMakes = function(callback){
		$http.jsonp('http://goapi.curtmfg.com/vehicle/'+this.Year+'?callback=JSON_CALLBACK&key='+API_KEY).success(function(data){
			callback(data.ConfigOption.Options,data.Matched.Parts,null);
		}).error(function(err){
			callback([],[],err);
		});
	};

	VehicleFactory.getModels = function(callback){
		$http.jsonp('http://goapi.curtmfg.com/vehicle/'+this.Year+'/'+this.Make+'?callback=JSON_CALLBACK&key='+API_KEY).success(function(data){
			callback(data.ConfigOption.Options,data.Matched.Parts,null);
		}).error(function(err){
			callback([],[],err);
		});
	};
	VehicleFactory.getSubmodels = function(callback){
		$http.jsonp('http://goapi.curtmfg.com/vehicle/'+this.Year+'/'+this.Make+'/'+this.Model+'?callback=JSON_CALLBACK&key='+API_KEY).success(function(data){
			callback(data.ConfigOption.Options,data.Matched.Parts,null);
		}).error(function(err){
			callback([],[],err);
		});
	};

	return VehicleFactory;
});

app.factory('PartFactory',function(){
	var PartFactory = {
		Parts: []
	};

	PartFactory.populate = function(parts){
		this.Parts = parts;
	};

	var Part = {
		PartId: 0,
		Status: 0,
		PriceCode: 0,
		RelatedCount: 0,
		AverageReview: 0,
		DateModified: '',
		DateAdded: '',
		ShortDesc: '',
		PartClass: '',
		InstallSheet: {},
		Attributes: [],
		VehicleAttributes: [],
		Content: [],
		Pricing: [],
		Reviews: [],
		Images: [],
		Related: [],
		Categories: [],
		Videos: [],
		Packages: [],
		Customer: {}
	};

	return PartFactory;
});