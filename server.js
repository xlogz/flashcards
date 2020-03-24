var express = require('express');
var mongoose = require('mongoose');

var db = mongoose.connect(process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'mongodb://127.0.0.1:27017/saver', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}, function(err) {
	if (err) {
		console.error('Could not connect to MongoDB!');
		console.log(err);
	}
});

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/',
function(req, res) {
  res.render('index');
});

const PORT = process.env.PORT || 3001;

console.log('Application is running on port ' + PORT);
app.listen(PORT);
