(function () {
  'use strict';

  angular
    .module('app.ayuda')
    .controller('ayudaController', ayudaController);

  function ayudaController($scope) {
    var vm = this;

    $scope.$on('$ionicView.beforeEnter', function () {
      initView();
    });

    function initView() {
      vm.saluda = 'Hola ayuda';
    }
  }
})();
