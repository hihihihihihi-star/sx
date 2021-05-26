
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCTAeMUY3O93RNIYL94Nu-UZRPxlaLKv64",
      authDomain: "kwitter-2a5e7.firebaseapp.com",
      databaseURL: "https://kwitter-2a5e7-default-rtdb.firebaseio.com",
      projectId: "kwitter-2a5e7",
      storageBucket: "kwitter-2a5e7.appspot.com",
      messagingSenderId: "219064583521",
      appId: "1:219064583521:web:2408a3f6ee0256b0f4f120",
      measurementId: "G-J6HPCD2X7P"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
     
      //End code
      });});}
getData();
