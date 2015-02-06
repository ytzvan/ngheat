'use strict';

/**
 * @ngdoc function
 * @name ngheatApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngheatApp
 */
angular.module('ngheatApp')
  .controller('MainCtrl', function ($scope) {
  	 $scope.map = { center: { latitude: 8.9994994, longitude: -79.5874339 }, zoom: 13, draggable : 'false', dragging : 'false' };
  });


angular.module('ngheatApp', ['uiGmapgoogle-maps'])
.controller('MapCtrl', function ($scope) {
  	 $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
  });
