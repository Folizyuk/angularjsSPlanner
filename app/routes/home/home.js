(function () {
  'use strict';

  angular.module('myApp.home', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/', {
        templateUrl: '/routes/home/home.html',
        controller: 'HomeCtrl'
      });
    }])

    .controller('HomeCtrl', ['$scope', function ($scope) {

    }])
})();