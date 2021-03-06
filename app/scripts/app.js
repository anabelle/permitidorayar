'use strict';

angular
  .module('permitidorayarApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'CornerCouch'
    //'angularMoment'
  ])
  .config(function ($routeProvider ) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/input', {
        templateUrl: 'views/input.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
