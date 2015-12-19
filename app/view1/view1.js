'use strict';

var projectsControllers = angular.module('projectsControllers', [])

projectsControllers.controller('ProjectsListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('data/projects.json').success(function(data) {
      $scope.projects = data;
    });

    $scope.orderProp = '-id';
}]);

projectsControllers.controller('ProjectCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('data/' + $routeParams.projectId + '.json').success(function(data) {
      $scope.project = data;
      $scope.mainImageUrl = data.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
  }]);
