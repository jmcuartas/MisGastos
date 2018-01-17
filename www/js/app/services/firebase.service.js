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
        //signInWithEmailAndPassword(cred);
        signWithGoogle();
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
    var storeFile = ( typeof cordova !== "undefined" )? cordova.file.dataDirectory : "";

    fileRef.getDownloadURL().then(function (url) {
      //window.open(url)
      downloadFile(url, storeFile + 'document.pdf');
    });
  }

  function downloadFile(url, targetPath) {
    var fileTransfer = new FileTransfer();
    var trustHosts = true;
    var options = {};

    fileTransfer.download(
      url,
      targetPath,
      function (entry) {
        cordova.plugins.FileOpener.openFile(entry.toURL(), onSucces, onError);
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

  function signWithGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
      .then(function (result) {
        var token = result.credential.accessToken;
        var user = result.user;

        console.log(result);
        console.log(token);
        console.log(user);
      })
      .catch(function (error) {
        var errorCode = error.code;
      var errorMessage = error.message;

      console.log(error.code);
      console.log(error.message);
      })
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
