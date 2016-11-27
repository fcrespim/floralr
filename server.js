// server.js

// set up ======================================================================
// get all the tools we need
var express  			= require('express')
var session  			= require('express-session')
var app      			= express()
var bodyParser    = require('body-parser')
var port     			= process.env.PORT || 8080

// configuration ===============================================================
// connect to our database



// set up our express application
app.use(bodyParser.urlencoded({
	extended: true
}))
app.use(bodyParser.json())
app.set('view engine', 'ejs') // set up ejs for templating

app.use(express.static('public'))
// required for passport

// routes ======================================================================
require('./config/routes.js')(app) // load our routes and pass in our app and fully configured passport


// launch ======================================================================
app.listen(port)
console.log('The magic happens on port ' + port)
