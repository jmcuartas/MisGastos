(function () {
  'use strict';

  angular
    .module('app.home')
    .controller('HomeController', HomeController);

  function HomeController($scope, FirebaseService, HomeService, $state, $localStorage) {
    var vm = this;

    vm.goDetalles = goDetalles;

    $scope.$on('$ionicView.beforeEnter', function () {
      initView();
    });

    function initView() {
      vm.gastos = 0;
      vm.ingresos = 0;
      vm.diferencia = 0;
      FirebaseService.doSignIn();
      HomeService.get().then(function (val) {
        vm.list = orderByDate(val);
        $scope.$apply();
      });
    }

    function orderByDate(val) {
      return Object.keys(val).map(function (value) {
        return { Fecha: new Date(value), values: val[value] };
      });
    }

    function goDetalles(data) {
      if (angular.isUndefined($localStorage.gastos)) {
        $localStorage.gastos = [];
        $localStorage.gastos.push(data);
      }
      $state.go('app.detalle');
    }
  }
})();
