// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAP4yOpNgGDrzhDI9lKSFhA3ag8Zm1R1gM",
    authDomain: "oucalendar-2c0b8.firebaseapp.com",
    databaseURL: "https://oucalendar-2c0b8-default-rtdb.firebaseio.com",
    projectId: "oucalendar-2c0b8",
    storageBucket: "oucalendar-2c0b8.appspot.com",
    messagingSenderId: "228349542652",
    appId: "1:228349542652:web:ae74f29e9710bb67905779",
    measurementId: "G-5EPCP4ZBBM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // Initialize variables
  const auth = firebase.auth()
  const database = firebase.database()
  