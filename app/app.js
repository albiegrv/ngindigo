'use strict';

// Declare app level module which depends on views, and components
var indigoApp = angular.module('indigoApp', [
  'ngRoute',
  'projectsControllers',
  'contactControllers'
]);

indigoApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/projects', {
        templateUrl: 'view1/view1.html',
        controller: 'ProjectsListCtrl'
      }).
      when('/projects/:projectId', {
        templateUrl: 'view1/project.html',
        controller: 'ProjectCtrl'
      }).
      when('/contact', {
        templateUrl: 'view2/view2.html',
        controller: 'ContactCtrl'
      }).
       otherwise({
         redirectTo: '/projects'
       });
  }]);
