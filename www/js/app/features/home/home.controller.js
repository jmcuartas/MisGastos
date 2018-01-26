(function () {
  'use strict';

  angular
    .module('app.home')
    .controller('HomeController', HomeController);

  function HomeController($scope, FirebaseService, HomeService, $ionicLoading) {
    var vm = this;

    vm.openFile = openFile;

    $scope.$on('$ionicView.beforeEnter', function () {
      initView();
    });

    function initView() {
      FirebaseService.doSignIn();
      HomeService.get().then(function (val) {
        vm.list = orderByDate(val);
        $scope.$apply();
        $ionicLoading.hide();
      });
    }

    function orderByDate(val) {
      return Object.keys(val).map(function (value) {
        return { Fecha: new Date(value), values: val[value] };
      });
    }

    function openFile(path) {
      FirebaseService.openFile(path);
    }
  }
})();
