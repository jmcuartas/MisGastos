(function () {
  'use strict';

  angular
    .module('app.document', [])
    .config(config);

  function config($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app.document', {
      url: '/document',
      cache: false,
      views: {
        content: {
          templateUrl: 'js/app/features/document/document.html',
          controller: 'DocumentController',
          controllerAs: 'vm',
        },
      },
    });
  }
})();
