'use strict';

var app = angular.module('myApp', [
  'ngRoute',
  'myApp.controllers'
]);
app.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
  $routeProvider.when('/kursywalut', {templateUrl: 'partials/tabelka.html', controller: 'kursyCtrl'});
  $routeProvider.otherwise({redirectTo: '/kursywalut'});
  
   $httpProvider.defaults.withCredentials = true;
  delete $httpProvider.defaults.headers.common["X-Requested-With"];


}]);