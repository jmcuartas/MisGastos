(function () {
  'use stric';

  angular
    .module('app.detalle')
    .controller('detalleController', detalleController);

  function detalleController($scope, $localStorage, FirebaseService) {
    var vm = this;
    vm.verFactura = verFactura;

    $scope.$on('$ionicView.beforeEnter', function () {
      initView();
    });

    function initView() {
      vm.saluda = 'Hola detalleos';
      var data = JSON.parse(getGastos('gastos').data);
      vm.data = data;
      console.log(vm.data);
    }

    function getGastos(id) {
      return $localStorage.gastos.filter(function (gasto) {
        return gasto.id === id;
      })[0];
    }

    function verFactura(path) {
      if (path !== '') {
        FirebaseService.openFile(path);        
      }
    }
  }
})();
