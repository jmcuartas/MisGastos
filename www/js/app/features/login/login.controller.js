(function () {
  'use strict';

  angular
    .module('app.login')
    .controller('LoginController', LoginController);

  function LoginController() {
    var vm = this;

    $scope.$on('$ionicView.beforeEnter', function () {
      initView();
    });

    function initView() {
      vm.saluda = 'hola mundo!!!';
    }
  }
})();
