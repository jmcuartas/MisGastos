(function () {
  'use strict';

  angular
    .module('app.home')
    .controller('HomeController', HomeController);

  function HomeController($scope, HomeService, $q) {
    var vm = this;

    $scope.$on('$ionicView.beforeEnter', function () {
      initView();
    });

    function initView() {
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
  }
})();
