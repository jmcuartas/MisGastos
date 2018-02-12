(function () {
  'use strict';

  angular
    .module('app.home')
    .controller('HomeController', HomeController);

  function HomeController($scope, FirebaseService, HomeService) {
    var vm = this;

    vm.openFile = openFile;

    $scope.$on('$ionicView.beforeEnter', function () {
      initView();
    });

    function initView() {
      FirebaseService.doSignIn();
      HomeService.get().then(function (val) {
        vm.list = orderByDate(val);
        vm.gastos = calcGastos(Object.values(val));
        vm.ingresos = calcIngresos(Object.values(val));
        $scope.$apply();
      });
    }

    function orderByDate(val) {
      return Object.keys(val).map(function (value) {
        return { Fecha: new Date(value), values: val[value] };
      });
    }

    function calcGastos(values) {
      var total = 0;
      Object.values(values).map(function (val) {
        Object.values(val).map(function (gasto) {
          if (gasto.hasOwnProperty('Coste')) {
            total += gasto.Coste;
          }
        });
      });

      return total;
    }

    function calcIngresos(values) {
      var total = 0;
      Object.values(values[0].Ingresos).map(function (ing) { total += ing; });

      return total;
    }



    function openFile(path) {
      FirebaseService.openFile(path);
    }
  }
})();
