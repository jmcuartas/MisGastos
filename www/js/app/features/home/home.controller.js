(function () {
  'use strict';

  angular
    .module('app.home')
    .controller('HomeController', HomeController);

  function HomeController($scope, FirebaseService, $localStorage, HomeService, $state, $ionicLoading) {
    var vm = this;

    vm.goDetalles = goDetalles;
    vm.ingresosTotales = 0;
    vm.gastosTotales = 0;
    vm.diferenciaTotal = 0;
    vm.loading = $ionicLoading;

    $scope.$on('$ionicView.beforeEnter', function () {
      initView();
    });

    function initView() {
      vm.gastos = 0;
      vm.ingresos = 0;
      vm.diferencia = 0;
      FirebaseService.doSignIn();
      $ionicLoading.show({
        template: '<ion-spinner icon="bubbles"></ion-spinner>'+'<p>Cargando ...</p>'
      });
      HomeService.get().then(function (val) {
        vm.list = orderByDate(val);
        calcGastoT(vm.list);
        calcIngresoT(vm.list);
        vm.diferenciaTotal = (vm.ingresosTotales - vm.gastosTotales).toFixed(2);
        $scope.$apply();
      })
      .finally(function () {
        $ionicLoading.hide();
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

    function calcGastoT(data) {
      data.forEach(function (elem) {
        vm.gastosTotales += elem.values.Total.Gastos;
      });
    }

    function calcIngresoT(data) {
      data.forEach(function (elem) {
        vm.ingresosTotales += elem.values.Total.Ingresos;
      });
    }
  }
})();
