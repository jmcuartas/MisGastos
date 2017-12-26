(function () {
  'use strict';

  angular
    .module('app.home')
    .factory('HomeService', HomeService);

  function HomeService() {
    initService();

    var services = {
      get: get,
    };

    return services;
  }

  function initService() {
    initFirebase();
    doSignIn();
  }

  function get() {
    return new Promise(resolve => {
      firebase.database().ref().once('value').then((snapshot) => resolve(snapshot.val()));
    });
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
        signInWithEmailAndPassword();
      }
    });
  }

  function doSignOut() {
    firebase.auth().signOut().then(onSucces, onError);
  }

  function signInWithEmailAndPassword() {
    firebase.auth().signInWithEmailAndPassword(cred.email, cred.pass)
      .then(onSucces, onError);
  }

  function onSucces(result) {
    var message = result;
    if (result.val()) {
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
