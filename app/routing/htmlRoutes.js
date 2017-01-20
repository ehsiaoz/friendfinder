
var path = require("path");

module.exports = function(pathDir){

	return function(app){
		console.log('htmlroutes pathDir', pathDir)
		console.log('htmlroutes __dirname', __dirname)
		app.get("/", function(req, res) {
		  res.sendFile(path.join(pathDir, "/app/public/home.html"));
		});
		// define the survey route
		app.get("/survey", function(req, res) {
		  res.sendFile(path.join(pathDir, "/app/public/survey.html"));
		});	
	}
	
}