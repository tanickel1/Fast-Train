var config = {
  apiKey: "AIzaSyDCqxTaVg3e94rgZhtIv21SxKhRl_0Aq3A",
  authDomain: "fast-train-79738.firebaseapp.com",
  databaseURL: "https://fast-train-79738.firebaseio.com",
  projectId: "fast-train-79738",
  storageBucket: "fast-train-79738.appspot.com",
  messagingSenderId: "911201500196"
};
firebase.initializeApp(config);

var database = firebase.database();
var connectionsRef = database.ref("/connections");
var connectedRef = database.ref(".info/connected");

connectedRef.on("value", function(snap) {
  if (snap.val()) {
    var con = connectionsRef.push(true);
    con.onDisconnect().remove();
  }
});

connectionsRef.on("value", function(snap) {
  $("#addtrain").text(snap.numChildren());
});


$("#add-train").on(click, function(event) {
	  var train = $("#train-input").val().trim();
    var destination = $("#destination-input").val().trim();
    var firsttraintime = $("#firsttraintime-input").val().trim();
    var frequency = $("#frequency-input").val().trim();
      console.log(train);
      console.log(destination);
      console.log(firsttraintime);
      console.log(frequency);
      $("#train-input").text(train);
      $("#destination-input").text(destination);
      $("#firsttraintime-input").text(firsttraintime);
      $("#frequency-input").text(frequency);
      sessionStorage.clear();
      sessionStorage.setItem("train", train);
      sessionStorage.setItem("destination", destination);
      sessionStorage.setItem("firsttraintime", firsttraintime);
      sessionStorage.setItem("frequency", frequency);

});


