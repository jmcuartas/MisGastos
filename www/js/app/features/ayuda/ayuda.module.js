(function () {
  'use strict';

  angular
    .module('app.ayuda', [])
    .config(config);

  function config($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app.ayuda', {
      url: '/ayuda',
      cache: false,
      views: {
        content: {
          templateUrl: 'js/app/features/ayuda/ayuda.html',
          controller: 'ayudaController',
          controllerAs: 'vm',
        },
      },
    });
  }
})();
