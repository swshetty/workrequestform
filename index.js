var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.set('port', (process.env.PORT || 5000))


// parse application/json
app.use(bodyParser.json())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static('public'));

// index
app.get('/', function (req, res) {
  res.send('hello world i am create request form')
})


// Finally, start our server
app.listen(app.get('port'), function() {
  console.log('running on port', app.get('port'))
})