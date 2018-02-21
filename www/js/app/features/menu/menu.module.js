(function () {
  'use strict';

  angular
    .module('app.menu', [])
    .config(config);

  /* @ngInject */
  function config($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app.menu', {
      url: '/menu',
      abstract: true,
      templateUrl: 'js/app/features/menu/menu.html',
    });

    $urlRouterProvider.otherwise('/app/home');
  }
})();
