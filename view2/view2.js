'use strict';

var a = angular.module('myApp.view2', ['ngRoute'])

a.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

a.controller('View2Ctrl', function($scope) {
    $scope.test ="fae";
});