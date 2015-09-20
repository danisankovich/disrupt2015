angular.module('clubApp')
.controller('searchCtrl', function($scope, $state) {
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
  console.log($scope.items);
  var addToCollection = function() {
    console.log($scope.items);
  };
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
