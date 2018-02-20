(function () {
  'use strict';

  angular
    .module('app.core')
    .factory('FirebaseService', FirebaseService);

  function FirebaseService() {
    initService();

    var service = {
      doSignIn: doSignIn,
      doSignOut: doSignOut,
      openFile: openFile,
    };

    return service;
  }

  function initService() {
    initFirebase();
  }

  function initFirebase() {
    var config = {
      apiKey: 'AIzaSyCXu7Jp6KYb9zfYgPePLV0PJCzumVu5G08',
      authDomain: 'misgastos-7dc68.firebaseapp.com',
      databaseURL: 'https://misgastos-7dc68.firebaseio.com',
      projectId: 'misgastos-7dc68',
      storageBucket: 'misgastos-7dc68.appspot.com',
      messagingSenderId: '1073629511603',
    };
    firebase.initializeApp(config);
  }

  function doSignIn() {
    var cred = {
      email: 'gastos.pisito@gmail.com',
      pass: 'gastos_2017',
    };

    firebase.auth().onAuthStateChanged(function (user) {
      if (!user) {
        signInWithEmailAndPassword(cred);
      }
    });
  }

  function doSignOut() {
    firebase.auth().signOut().then(onSucces, onError);
  }

  function openFile(path) {

    var storage = firebase.storage();
    var storageRef = storage.ref();
    var fileRef = storageRef.child(path);
    var storeFile = getStorage();

    fileRef.getDownloadURL().then(function (url) {
      if (typeof(cordova) !== 'undefined') {
        downloadFile(url, storeFile + 'document.pdf');
      } else {
        window.open(url)
      }
    });
  }

  function downloadFile(url, targetPath) {
    var mimeType = 'application/pdf';
    var fileTransfer = new FileTransfer();
    var trustHosts = true;
    var options = {};

    fileTransfer.download(
      url,
      targetPath,
      function (entry) {
        cordova.plugins.fileOpener2.open(decodeURIComponent(entry.nativeURL), mimeType, { success :onSucces, error :onError });
      },
      function (error) {
        onError(error);
      },
      trustHosts,
      options
    );
  }

  function signInWithEmailAndPassword(cred) {
    firebase.auth().signInWithEmailAndPassword(cred.email, cred.pass)
      .then(onSucces, onError);
  }

  function getStorage() {
    if (window.device !== undefined) {
      return window.device.platform === 'Android' ? cordova.file.externalCacheDirectory + "tmp/" : cordova.file.dataDirectory + "tmp/";
    }

    return '';
  }

  function onSucces(result) {
    var message = result;
    if (result.val) {
      message = result.val();
    }

    console.log(message);
  }

  function onError(error) {
    var message = error;
    if (error.code) {
      message = error.code;
    }

    console.log(message);
  }
})();
