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
        $scope.$apply(function () {
          vm.list = val[2017];
        });
      });
    }
  }
})();
