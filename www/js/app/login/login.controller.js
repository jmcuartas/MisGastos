(function () {
  'use strict';

  angular
    .module('app.login')
    .controller('LoginController', LoginController);

  function LoginController($scope, FirebaseService) {
    var vm = this;

    vm.hola = 'Hola mundo';

    $scope.$on('$ionicView.beforeEnter', function () {
      initView();
    });

    function initView() {

    }
  }
})();
