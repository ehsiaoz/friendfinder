var express = require('express')
var router = express.Router()

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

// Routes
// =============================================================


// define the survey route
app.get("/api/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "survey.html"));
});

module.exports = apiRouter