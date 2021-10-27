var firebaseConfig = {
      apiKey: "AIzaSyCyalAk_NRJLiM7Pj3Vxo9ke6fPHfObXtA",
      authDomain: "kwitter-ff106.firebaseapp.com",
      databaseURL: "https://kwitter-ff106-default-rtdb.firebaseio.com",
      projectId: "kwitter-ff106",
      storageBucket: "kwitter-ff106.appspot.com",
      messagingSenderId: "769457823703",
      appId: "1:769457823703:web:604ce2882615671e337592"
    };
    
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room_names"+Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(room_name){
      console.log(room_name);
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html"
}

function add_room(){
      room_name = document.getElementById("room_name").value;
      localStorage.setItem("room_name",room_name);
      firebase.database().ref("/").child(room_name).update({
            porpose:"adding room name"
      });
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name",user_name);
      window.location = "index.html"
}