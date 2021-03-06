// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// console.log('s __dirname', __dirname);
// var setAppClosure = require("./app/routing/htmlRoutes.js");
// console.log('setAppClosure', setAppClosure);
var setApp =  require("./app/routing/htmlRoutes.js")(__dirname)
// var apiRoutes = require("./apiRoutes.js")

// Sets up the Express App
// =============================================================
var app = express(); 
var htmlRoutes = setApp(app);
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


app.use("/data", express.static(path.join(__dirname, '/app/data')));


//Global Variables==============================================

var profiles = [
				{name: "Donald Trump", photo: "http://static4.businessinsider.com/image/55918a4b6da811695ab77f22-480/rtx1gzco.jpg", scores: ['3', '2', '3', '3', '3', '3', '2', '3', '3', '3']}, 
				{name: "Sarah Palin", photo: "https://static.mediaequalizer.com/files/uploads/2015/03/Palin-Sarah-2-919x517.jpg", scores: ['5', '5', '5', '5', '5', '5', '5', '5', '5', '5']},
				{name: "George Bush", photo: "http://cdn.totalfratmove.com/wp-content/uploads/2013/10/678d12741729e00a5d8a19b47edcb865214846856.jpg", scores: ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1']},
				{name: "Tom Cruise", photo: "https://wallpaperscraft.com/image/tom_cruise_2015_actor_101066_3840x2400.jpg", scores: ['4', '4', '4', '4', '4', '4', '4', '4', '4', '4']},
				{name: "Winona Ryder", photo: "https://s-media-cache-ak0.pinimg.com/564x/3d/ac/64/3dac64674e03a09dadd66604940b0539.jpg", scores: ['3', '1', '5', '2', '3', '3', '3', '1', '3', '2']}
				];

var userProfile = {};
var topMatchIndex = null;
var bestMatchScore = 40;

// Routes
// =============================================================

// define the home page route
// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "/app/public/home.html"));
// });
// // define the survey route
// app.get("/survey", function(req, res) {
//   res.sendFile(path.join(__dirname, "/app/public/survey.html"));
// });

app.get("/api/friends", function(req, res) {

	// console.log("this is app.get /api/friends: ", profiles);
       res.json(profiles);
       res.end();
});

app.post("/api/survey", function(req, res) {
  userProfile = req.body;
  bestMatchScore = 40;
    console.log("This is newProfile inside Post: ", userProfile);
    profiles.forEach(compareScore);
    console.log("This is your best match: ", profiles[topMatchIndex]);
       res.json(profiles[topMatchIndex]);
       res.end();
  
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});


//Functions ================================================

function compareScore(item, index) {
	var currentMatchScore = null;
	for (i = 0; i < item.scores.length; i++) {
		currentMatchScore += Math.abs(item.scores[i] - userProfile.scores[i]);
	};
	
	if (currentMatchScore <= bestMatchScore) {
			bestMatchScore = currentMatchScore;
			topMatchIndex = index;
	}
	console.log("this is currentMatchScore: ", currentMatchScore);
	console.log("this is the person: ", item.name);
	console.log("this is the bestMatchScore: ", bestMatchScore);
	console.log("this is topMatchIndex: ", topMatchIndex);
}

