angular.module('clubApp')
.controller('searchCtrl', function($scope, $state) {
  $scope.items = [
    {
      img: "https://secure-i4.ztat.net//detail/LV/02/1B/00/1K/11/LV021B001-K11@12.jpg",
      name: 'A-line skirt - navy',
      style: 'Knee-length',
      brands: 'Love',
      compitem: 'those shirts'
    },
    {
      img: "https://secure-i6.ztat.net//detail/OA/12/1L/01/GQ/11/OA121L01G-Q11@14.jpg",
      name: 'Leather jacket - black',
      style: 'leather',
      brands: 'Oakwood',
      compitem: 'those shirts'
    },
    {
      img: "https://secure-i3.ztat.net//detail/C5/15/1J/01/H1/03/C5151J01H-103@6.jpg",
      name: 'Tights - anthracite',
      style: 'tights',
      brands: 'Camano',
      compitem: 'those shirts'
    },
    {
      img: 'https://secure-i2.ztat.net//detail/AN/62/1C/A2/7I/11/AN621CA27-I11@14.jpg',
      name: 'Jersey dress - purple',
      style: 'Cache-coeur',
      brands: 'Anna Field',
      compitem: 'those shirts'
    },
    {
      img: 'https://secure-i5.ztat.net//detail/TS/12/1B/00/4Q/11/TS121B004-Q11@8.jpg',
      name: 'Mini skirt - noir',
      style: 'mini-skirt',
      brands: 'Teddy Smith',
      compitem: 'those shirts'
    },
    {
      img: 'https://secure-i6.ztat.net//detail/MA/32/2D/07/BK/11/MA322D07B-K11@18.jpg',
      name: 'Shirt - blue',
      style: 'Shaped-fit',
      brands: 'Marc O\'Polo',
      compitem: 'those shirts'
    },
    {
      img: 'https://secure-i4.ztat.net//detail/ES/12/2E/01/4C/11/ES122E014-C11@14.jpg',
      name: 'Chinos - grey',
      style: 'Flow',
      brands: 'Espirit',
      compitem: 'those shirts'
    },
    {
      img: "https://secure-i3.ztat.net//detail/WR/12/2G/02/0C/11/WR122G020-C11@11.jpg",
      name: 'Straight leg jeans',
      style: 'stonewash',
      brands: 'Wrangler',
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
