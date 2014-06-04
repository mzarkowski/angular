'use strict';

/* Controllers */

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('WalutyCtrl', function ($scope, $http) {
  $http.get('waluty/waluty.json').success(function(data) {
    $scope.waluty = data;
  });

  $scope.orderProp = 'I';
});