(function () {
  'use strict';

  angular
    .module('app.home')
    .directive('listExpensesDirective', listExpensesDirective);

  function listExpensesDirective() {
    return {
      restric: 'EA',
      templateUrl: 'js/app/home/components/list-expenses/list-expenses.html',
      scope: {
        list: '=',
      },
      controller: homeController,
    };

    function homeController($scope, HomeService) {
    }
  }
})();
