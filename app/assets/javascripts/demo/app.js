( function() {
  'use strict';
  angular.module('demo', [
    // Libraries
    'templates',
    'ngRoute',
    'Devise',
    'public.ctrl.signUp'
  ])
  .config(['$routeProvider',
    function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'demo/public/landing/landing.html'
        })
        .when('/sign-up', {
          templateUrl: 'demo/public/sign_up/sign_up.html'
        });
    }
  ]);
})();