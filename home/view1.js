'use strict';

var a = angular.module('myApp.home', ['ngRoute']);

a.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/view1.html',
    controller: 'View1Ctrl'
  });
}])

a.controller('View1Ctrl', function($scope, $interval) {
    // logic goes here
    
});