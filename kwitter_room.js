
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = { apiKey: "AIzaSyAgZNVwUrKM4EDs8P05DM43AtSiOuaieqY", authDomain: "project-kwitter-cd7e7.firebaseapp.com", databaseURL: "https://project-kwitter-cd7e7-default-rtdb.firebaseio.com", projectId: "project-kwitter-cd7e7", storageBucket: "project-kwitter-cd7e7.appspot.com", messagingSenderId: "645583595000", appId: "1:645583595000:web:a1ba946041fbaaaf5d620d" };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    username = localStorage.getItem("username");
    document.getElementById("username").innerHTML = "Welcome " + username + "!"; 

    function addroom(){
      roomname = document.getElementById("roomname").value;
      firebase.database().ref("/").child(roomname).update({
            purpose : "Adding user"
      });
      localStorage.setItem("roomname", roomname);
      window.location.replace("kwitter_page.html");
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Roomname - "+ Room_names);
      row = "<div class = 'room_name' id = "+ Room_names +" onclick = 'redirect_to_room(this.id)'>#"+ Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirect_to_room(name){
      console.log(name);
      localStorage.setItem("roomname", name);
      window.location.replace("kwitter_page.html");
}

function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location = "index.html";
}
