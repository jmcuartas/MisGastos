(function () {
  'use stric';

  angular
    .module('app.detalle')
    .controller('detalleController', detalleController);

  function detalleController($scope, $localStorage) {
    var vm = this;

    $scope.$on('$ionicView.beforeEnter', function () {
      initView();
    });

    function initView() {
      vm.saluda = 'Hola detalleos';
      var data = '';
      if (angular.isUndefined($localStorage.gastos)) {
        data = $localStorage.gastos.get();
        console.log(data);
      }
    }
  }
})();
