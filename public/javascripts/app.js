'use strict';

var app = angular.module('clubApp', ['ui.router']);
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('map', {
      url: '/map',
      templateUrl: 'views/map.ejs',
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
    })
    .state('myclubs', {
      url: '/myclubs',
      templateUrl: 'views/myclubs.ejs',
    })
    .state('about', {
      url: '/about',
      templateUrl: 'views/about.ejs',
    });
}]);
