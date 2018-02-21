(function () {
  'use strict';

  var core = angular.module('app.core');
  core.config(config);

  /* @ngInject */
  function config($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app', {
      url: '/login',
      cache: false,
      views: {
        content: {
          templateUrl: 'js/app/login/login.html',
          controller: 'LoginController',
          controllerAs: 'vm',
        },
      },
    });

    //$urlRouterProvider.otherwise('/app/menu');
  }
})();
