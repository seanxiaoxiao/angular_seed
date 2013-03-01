'use strict';


// Declare app level module which depends on filters, and services
angular.module('banterApp', ['banterApp.filters', 'banterApp.services', 'banterApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/',  {templateUrl: 'partials/home/index.html', controller: HomeController}) ;
    $routeProvider.when('/forum/:forumId/', {templateUrl: 'partials/forums/forum.html', controller: ForumController});
    $routeProvider.when('/forum/:forumId/edit/', {templateUrl: 'partials/forums/edit.html', controller: ForumEditController});
  }]);
