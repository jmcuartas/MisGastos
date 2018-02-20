(function () {
  'use strict';

  angular
    .module('app.home')
    .controller('HomeController', HomeController);

  function HomeController($scope, FirebaseService, $localStorage, HomeService, $state) {
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

      initStorage();
    }

    function initStorage() {
      if (angular.isUndefined($localStorage.gastos)) {
        $localStorage.gastos = [];
      }
    }

    function orderByDate(val) {
      return Object.keys(val).map(function (value) {
        return { Fecha: new Date(value), values: val[value] };
      });
    }

    function goDetalles(data) {
      createGasto(data);
      $state.go('app.detalle');
    }

    function createGasto(gasto) {
      var storage = { id: 'gastos', data: JSON.stringify(gasto) };
      if ($localStorage.gastos.length === 0) {
        $localStorage.gastos.push(storage);
      } else {
        updateGasto(storage);
      }
    }

    function updateGasto(data) {
      $localStorage.gastos = $localStorage.gastos.map(function (gastoToUpdate) {
        if (data.id === gastoToUpdate.id) {
          return data;
        }
        return gastoToUpdate;
      });
    }
  }
})();
