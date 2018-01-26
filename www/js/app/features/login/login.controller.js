(function () {
  'use strict';

  angular
    .module('app.login', [])
    .controller('LoginController', LoginController);

  function LoginController($scope, $state, $ionicLoading, FirebaseService) {
    var vm = this;

    vm.doLogin = doLogin;

    $scope.$on('$ionicView.beforeEnter', function () {
      initView();
    });

    function initView() {

    }

    function doLogin(action) {
      console.log(action);
      $ionicLoading.show(getOptions());
      FirebaseService.doSignIn(action);
      $state.go('app.home');
    }

    function getOptions() {
      return {
        template: 'Cargando...',
        duration: '2000',
      };
    }
  }
})();
