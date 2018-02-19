(function () {
  'use strict';

  angular
    .module('app.detalle')
    .factory('detalleService', detalleService);

  function detalleService() {

      var service = {
        openFile: openFile,
      };

      return service;
  }

  function openFile(path) {
    FirebaseService.doSignIn();

    var storage = firebase.storage();
    var storageRef = storage.ref();
    var fileRef = storageRef.child(path);

    tangRef.getDownloadURL().then(function (url) {
      window.open(url)
    });
  }
})();
