const firebaseConfig = {
  apiKey: "AIzaSyBK2GIrSwCcSB590QzZDY79X1ZmI7QdggA",
  authDomain: "practicec94-45d81.firebaseapp.com",
  databaseURL: "https://practicec94-45d81-default-rtdb.firebaseio.com",
  projectId: "practicec94-45d81",
  storageBucket: "practicec94-45d81.appspot.com",
  messagingSenderId: "690945448203",
  appId: "1:690945448203:web:5838cc6b88c963acbe6a0e"
};

firebase.initializeApp(firebaseConfig);

 username = localStorage.getItem("user_name");
  
document.getElementById("aob").innerHTML = "Welcome ," + username;
  function addRoom(){
   room_name = document.getElementById("room_name_input").value;
   localStorage.setItem("name_of_room" , room_name);
   window.location = "lets_chat.html";
  };

  function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
room_name_display = "<div id='room_name_display_div'><h4 id='room_name_display_h4'</h4></div><br>";

//End code
});});};
function redirectToRoomName(){
  localStorage.setItem("name_of_room" , room_name);
   window.location("lets_chat.html");
};

function logout(){
  localStorage.removeItem("user_name");
  window.location = "index.html";
}