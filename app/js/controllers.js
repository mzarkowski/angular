'use strict';

/* Controllers */
var myApp = angular.module('myApp.controllers', []);

myApp.controller('kursyCtrl', function ($scope, $http) {
  setInterval(function() {
    $http.get('http://marketools.plus500.com/Feeds/UpdateTable?instsIds=56,55,2,100,27,5,177,305').success(function(data) {
      $scope.kursy = data.Feeds;
    });
  },1000);
});