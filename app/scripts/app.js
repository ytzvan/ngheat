'use strict';

/**
 * @ngdoc overview
 * @name ngheatApp
 * @description
 * # ngheatApp
 *
 * Main module of the application.
 */
angular
  .module('ngheatApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/map', {
        templateUrl: 'views/map.html',
        controller: 'MapCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
