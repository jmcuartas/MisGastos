(function () {
  'use strict';

  angular
    .module('app.login', [])
    .config(config);

  function config($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app.login', {
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
  }
})();
