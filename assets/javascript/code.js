var config = {
    apiKey: "AIzaSyA1Cg6yKcCYNYscggCOayHTE2oiq4mxU-k",
    authDomain: "trainschedule-83035.firebaseapp.com",
    databaseURL: "https://trainschedule-83035.firebaseio.com",
    storageBucket: "trainschedule-83035.appspot.com",
    messagingSenderId: "122341399932"
  };

  firebase.initializeApp(config);
  var database = firebase.database();

  /*var train = "";
  var destination = "";
  var frequency = "";
  var time = "";
  var minutes = "";*/


  $("#addTrain").on("click", function() {

	  var trainName = $("#nameInput").val().trim();
	  var destinationTrain = $("#destinationInput").val().trim();
	  var trainTime = $("#timeInput").val().trim();
	  var trainFrequency = $("#frequencyInput").val().trim();

	  var newTrain = {
  			train:trainName,
  			destination:destinationTrain,
  			time:trainTime,
  			frequency:trainFrequency
  		};

      database.ref().push(newTrain);

      console.log(newTrain.train);
      console.log(newTrain.destination);
      console.log(newTrain.time);
      console.log(newTrain.frequency);

    $("#nameInput").val(' ');
    $("#destinationInput").val(' ');
    $("#timeInput").val(' ');
    $("#frequencyInput").val(' ');

  	return false;

  });


  database.ref().on("child_added", function(childSnapshot){
    console.log(childSnapshot.val());

    var train = childSnapshot.val().train;
    var destination = childSnapshot.val().destination;
    var time = childSnapshot.val().time;
    var frequency = childSnapshot.val().frequency;

    console.log(train);
    console.log(destination);
    console.log(time);
    console.log(frequency);

    $("#train-table > tbody").append(
      "<tr><td>" + train + 
      "</td><td>" + destination +
       "</td><td>" + frequency + 
       "</td><td>" + moment(time, "HH:mm").format('hh:mm A') + 
       "</td></tr>");
  });