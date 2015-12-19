'use strict';

var contactControllers = angular.module('contactControllers', [])

contactControllers.controller('ContactCtrl', ['$scope',
  function($scope) {
    $scope.email = 'x@indigoflow.ru';
    $scope.tel = '+7 999 155 24 69';
}]);
