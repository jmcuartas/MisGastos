(function () {
  'use strict';

  angular
    .module('app.detalle', [])
    .config(config);

  function config($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app.detalle', {
      url: '/detalle',
      cache: false,
      views: {
        content: {
          templateUrl: 'js/app/features/detalle/detalle.html',
          controller: 'detalleController',
          controllerAs: 'vm',
        },
      },
      params: {
        data: '',
      },
    });
  }
})();
