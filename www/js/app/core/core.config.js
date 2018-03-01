(function () {
  'use strict';

  var core = angular.module('app.core');

  core.config(configureButtonBack);

  /* @ngInject */
    function configureButtonBack($ionicConfigProvider) {
        $ionicConfigProvider.views.swipeBackEnabled(false);

        $ionicConfigProvider.backButton
            .text('Volver')
            .previousTitleText('')
            .icon('ion-chevron-left');
    }
})();
