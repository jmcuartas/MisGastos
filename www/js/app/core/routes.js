(function () {
  'use strict';

  var core = angular.module('app.core');
  core.config(config);

  /* @ngInject */
  function config($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'js/app/features/menu/menu.html',
    });

    $urlRouterProvider.otherwise('/app/home');

  }
})();
