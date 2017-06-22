
var express = require('express')
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs-extra');
const cors = require('cors')

app.use(cors())

app.use(express.static(path.join(__dirname, './')))

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

//add images?
app.get('/data', function(req, res) {
  res.sendFile(path.join(__dirname, './starterReactVR/myjsonfile.json'))
})


app.listen(8080, function() {
  console.log('listening on 8080');
});
