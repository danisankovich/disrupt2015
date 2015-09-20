'use strict';

var app = angular.module('clubApp', ['ui.router']);
// var app = angular.module('StockDash', []);
// app.constant('constant', {
//   url: 'http://localhost:3000/'
//
// });


app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('map', {
      url: '/map',
      templateUrl: 'views/map.ejs',
    })
    .state('home', {
      url: '/',
      templateUrl: 'views/home.ejs',
      // controller: 'dashboardCtrl'
    })
    .state('search', {
      url: '/search',
      templateUrl: 'views/search.ejs',
      controller: 'searchCtrl'
    })
    .state('profile', {
      url: '/profile',
      templateUrl: 'views/profile.ejs',
      // controller: 'aboutCtrl'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'views/about.ejs',
      // controller: 'dashboardCtrl'
    })
    // .state('dashboard', {
    //   url: '/dashboard',
    //   templateUrl: 'views/dashboard.ejs',
    //   controller: 'dashboardCtrl'
    // })
}]);

app.controller('searchCtrl', function($scope, $state) {
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
});
