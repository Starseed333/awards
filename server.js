// Node Dependencies
var express = require('express');

const PORT = process.env.PORT || 3000;
 

// Set up Express
var app = express();
var router = express.Router();


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));


// Index Redirect
router.get('/', function (req, res) {
  res.redirect('/index');
});

// Index Page 
router.get('/index', function (req, res) {
  res.render('index.html')
});



// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});