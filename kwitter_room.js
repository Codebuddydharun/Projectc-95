var firebaseConfig = {
    apiKey: "AIzaSyC96gflz37jJOXeL55D1X3ZDT6BWc1PA5c",
    authDomain: "let-s-chat-ad064.firebaseapp.com",
    databaseURL: "https://let-s-chat-ad064-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-ad064",
    storageBucket: "let-s-chat-ad064.appspot.com",
    messagingSenderId: "470688213529",
    appId: "1:470688213529:web:19af8584625399fc961888",
    measurementId: "G-97CRHZJMY0"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

    function add_room(){
          user_room=document.getElementById("room_name").value;
          localStorage.setItem("user_room",user_room);
          firebase.database().ref("/").child(user_room).update({
                purpose:"Adding Roomname"
          });
          window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      row="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("user_room");
      window.location="index.html";
      

}
function redirecttoroomname(names){
localStorage.setItem("user_room",names);
window.location="kwitter_page.html"
}
