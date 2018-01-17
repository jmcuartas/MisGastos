(function () {
  'use stric';

  angular
    .module('app.document')
    .controller('DocumentController', DocumentController);

  function DocumentController($scope, DocumentService) {
    var vm = this;

    $scope.$on('$ionicView.beforeEnter', function () {
      initView();
    });

    function initView() {
      vm.saluda = 'Hola Documentos';
    }
  }
})();