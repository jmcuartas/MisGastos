(function () {
  'use strict';

  angular
    .module('app.document')
    .factory('DocumentService', DocumentService);

  function DocumentService() {

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
