'use strict';

var app = angular.module('clubApp', ['ui.router']);
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('map', {
    url: '/map',
    templateUrl: 'views/map.ejs',
    controller: 'mapCtrl'
  })
  .state('splash', {
    url: '/splash',
    templateUrl: 'views/splash.ejs',
    controller: 'splashCtrl'
  })
  .state('where-to', {
    url: '/where-to',
    templateUrl: 'views/where-to.ejs',
    controller: 'clubCtrl'
  })
  .state('home', {
    url: '/',
    templateUrl: 'views/home.ejs',
  })
  .state('search', {
    url: '/search',
    templateUrl: 'views/search.ejs',
    controller: 'searchCtrl'
  })
  .state('mycollection', {
    url: '/mycollection',
    templateUrl: 'views/mycollection.ejs',
    // controller: 'aboutCtrl'
  })
  .state('clubs', {
    url: '/clubs',
    templateUrl: 'views/clubs.ejs',
    controller: 'clubCtrl'
  })
  .state('about', {
    url: '/about',
    templateUrl: 'views/about.ejs',
  });
}]);

app.controller('searchCtrl', function($scope, $state, $http) {
  $scope.moreStuff = [];
  $scope.items = [
    {
      name: 'leggings',
      style: 'awesome',
      brands: 'expensive ones',
      compitem: 'those shirts'
    },
    {
      name: 'leggings',
      style: 'awesome',
      brands: 'expensive ones',
      compitem: 'those shirts'
    },
    {
      name: 'leggings',
      style: 'awesome',
      brands: 'expensive ones',
      compitem: 'those shirts'
    },
    {
      name: 'leggings',
      style: 'awesome',
      brands: 'expensive ones',
      compitem: 'those shirts'
    },
    {
      name: 'leggings',
      style: 'awesome',
      brands: 'expensive ones',
      compitem: 'those shirts'
    },
    {
      name: 'leggings',
      style: 'awesome',
      brands: 'expensive ones',
      compitem: 'those shirts'
    },
    {
      name: 'leggings',
      style: 'awesome',
      brands: 'expensive ones',
      compitem: 'those shirts'
    },
    {
      name: 'leggings',
      style: 'awesome',
      brands: 'expensive ones',
      compitem: 'those shirts'
    }
  ];

});


app.controller('mapCtrl', function($scope) {

  var map;
  require(["esri/map", "dojo/domReady!"], function(Map) {
    map = new Map("map", {
      basemap: "topo",  //For full list of pre-defined basemaps, navigate to http://arcg.is/1JVo6Wd
      center: [-122.45, 37.75], // longitude, latitude
      zoom: 13
    });
  });
  require([
    "esri/map",
    "esri/dijit/Directions",
    "dojo/parser",
    "dijit/layout/BorderContainer", "dijit/layout/ContentPane",
    "dojo/domReady!"
  ], function (Map, Directions, parser) {
    // call the parser
    parser.parse();
    var directions = new Directions({
      map: map
    }, "dir");
    directions.startup();
    // additional code to create a map and directions widget
  });
});
