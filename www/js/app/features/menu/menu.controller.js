(function () {
  'use strict';

  angular
    .module('app.menu', [])
    .controller('menuController', menuController);

  function menuController() {
    var vm = this;

    initView();

    function initView() {
      vm.version = 'Ver. 1.0.0';      
    }
  }
})();
