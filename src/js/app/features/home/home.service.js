(function () {
  'use strict';

  angular
    .module('app.home')
    .factory('HomeService', HomeService);

  function HomeService() {

    var services = {
      get: get,
    };

    return services;
  }

  function get() {
    return new Promise(resolve => {
      firebase.database().ref().once('value').then((snapshot) => resolve(snapshot.val()));
    });
  }
})();
