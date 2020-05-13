const express = require('express');
const mongoose = require('mongoose');

const User = require('./app/Models/User.js');
const CardSet = require('./app/Models/CardSet.js');
const Token = require('./app/Models/Token.js');
const Folder = require('./app/Models/Folder.js')
const Favorite = require('./app/Models/Favorite.js')

const bodyParser = require("body-parser");

const dotenv = require('dotenv').config();

const db = mongoose.connect(process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || process.env.MONGO_LOCAL_CONN_URL, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}, function(err) {
	if (err) {
		console.error('Could not connect to MongoDB!');
		console.log(err);
	}
});

const app = express();

if(process.env.NODE_ENV === 'production'){
	// Express will serve up production assets
	// like our main js file, or main css file!
	app.use(express.static('client/build'));
	
	//Express will serve uip the index.html file 
	//if it doesnt recognize the route
}else{
	app.use(express.static(__dirname + '/public'));
}

app.use(bodyParser.json())
app.use(bodyParser.text({ type: 'text/html' }))
app.use(bodyParser.text({ type: 'text/xml' }))
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
app.use(bodyParser.json({ type: 'application/*+json' }))

const path = require('path');

app.get('/',
function(req, res) {
  res.render('index');
});



const PORT = process.env.PORT || 3001;

console.log('Application is running on port ' + PORT);
app.listen(PORT);

const routes = require('./app/Routes/routes.js')(app);