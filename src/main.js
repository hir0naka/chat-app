import firebase from 'firebase'
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBidIJopmo4KgCJbP_Qj9P9DEWSE04slns",
  authDomain: "chat-app-486e7.firebaseapp.com",
  databaseURL: "https://chat-app-486e7.firebaseio.com",
  projectId: "chat-app-486e7",
  storageBucket: "chat-app-486e7.appspot.com",
  messagingSenderId: "556612477474"
};
firebase.initializeApp(config);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
