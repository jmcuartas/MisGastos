(function () {
  'use strict';

  angular
    .module('app.home', [])
    .config(config);

  function config($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app.home', {
      url: '/home',
      cache: false,
      views: {
        content: {
          templateUrl: 'js/app/features/home/home.html',
          controller: 'HomeController',
          controllerAs: 'vm',
        },
      },
    });
  }
})();
