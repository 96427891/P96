
const firebaseConfig = {
  apiKey: "AIzaSyBK2GIrSwCcSB590QzZDY79X1ZmI7QdggA",
  authDomain: "practicec94-45d81.firebaseapp.com",
  databaseURL: "https://practicec94-45d81-default-rtdb.firebaseio.com",
  projectId: "practicec94-45d81",
  storageBucket: "practicec94-45d81.appspot.com",
  messagingSenderId: "690945448203",
  appId: "1:690945448203:web:5838cc6b88c963acbe6a0e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

document.getElementById("roomname").innerHTML = room_name;
function logout(){
    localStorage.removeItem("user_name");
    window.location = "index.html";
  };

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function send_message(){
   msg_variable = document.getElementById("text_input").value;
    document.getElementById("output").innerHTML = firebase.database().ref(room_name).push({
    name:user_name ,
    message:msg_variable,
    like:0
   });
   document.getElementById("text_input").innerHTML = ""
  };