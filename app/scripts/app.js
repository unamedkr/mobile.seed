'use strict';

angular.module('mobileApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
  ])
  .config(function ($stateProvider, $urlRouterProvider) {


    $urlRouterProvider.otherwise('/');


    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      });
  });