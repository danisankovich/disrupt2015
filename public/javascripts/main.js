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
    });
    // .state('home', {
    //   url: '/home',
    //   templateUrl: 'views/home.ejs',
    //   controller: 'dashboardCtrl'
    // })
    // .state('login', {
    //   url: '/login',
    //   templateUrl: 'views/login.ejs',
    //   controller: 'dashboardCtrl'
    // })
    // .state('about', {
    //   url: '/about',
    //   templateUrl: 'views/about.ejs',
    //   controller: 'aboutCtrl'
    // })
    // .state('account', {
    //   url: '/account',
    //   templateUrl: 'views/account.ejs',
    //   controller: 'dashboardCtrl'
    // })
    // .state('dashboard', {
    //   url: '/dashboard',
    //   templateUrl: 'views/dashboard.ejs',
    //   controller: 'dashboardCtrl'
    // })
    // .state('search', {
    //   url: '/search',
    //   templateUrl: 'views/search.ejs',
    //   controller: 'searchCtrl'
    // })
    // .state('signup', {
    //   url: '/signup',
    //   templateUrl: 'views/register.ejs',
    // });
}]);
