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
  .state('where-to', {
    url: '/where-to',
    templateUrl: 'views/where-to.ejs',
    controller: 'clubCtrl'
  })
  .state('home', {
    url: '/',
    templateUrl: 'views/home.ejs',
    controller: 'loginCtrl',
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


app.controller('mapCtrl', function($scope, $state, $http) {
  $scope.clubs = [
    {
      name: "Booty SF",
      phoneNumber: "###-###-####",
      address: '375 11th St San Francisco, CA 94103',
      url: 'http://bootiemashup.com/sf/',
    },
    {
      name: "Splash",
      phoneNumber: "408-292-2222",
      address: '65 Post St San Jose, CA 95113',
      url: 'splashsj.com',
    },
    {
      name: "Mighty",
      phoneNumber: "415-626-7001",
      address: '119 Utah St San Francisco, CA 94103',
      url: 'mighty119.com',
    },
    {
      name: "Mezzanine",
      phoneNumber: "415-625-8880",
      address: '444 Jessie St San Francisco, CA 94103',
      url: 'mezzaninesf.com',
    },
    {
      name: "Temple",
      phoneNumber: "415-312-3668",
      address: '540 Howard St San Francisco, CA 94105',
      url: 'templesf.com',
    },
    {
      name: "Ruby Skye",
      phoneNumber: "628-400-4688",
      address: '420 Mason St San Francisco, CA 94102',
      url: 'rubyskye.com',
    },
  ];


  var map;
  require(["esri/map", "dojo/domReady!"], function(Map) {
    map = new Map("map", {
      basemap: "topo",  //For full list of pre-defined basemaps, navigate to http://arcg.is/1JVo6Wd
      center: [-122.45, 37.75], // longitude, latitude
      zoom: 13
    });
    console.log('map', map)
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
