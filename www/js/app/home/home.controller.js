(function () {
  'use strict';

  angular
    .module('app.home')
    .controller('HomeController', HomeController);

    function HomeController($scope) {
      var vm = this;

      $scope.$on('$ionicView.beforeEnter', function () {
        initView();
      });

      function initView() {
        vm.saluda = 'Hola Mundo!!!';
      }
    }
})();
