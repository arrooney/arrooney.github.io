'use strict';

var a = angular.module('myApp.view1', ['ngRoute']);

a.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

a.controller('View1Ctrl', function($scope, $interval) {
    // Set the date we're counting down to
    
});