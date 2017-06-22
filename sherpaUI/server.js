const electron = require('electron').remote;
var express = require('express')
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs-extra');
const cors = require('cors')

// const userDataPath = electron.getPath('userData');
//     // We'll use the `configName` property to set the file name and path.join to bring it all together as a string
// let filePath = path.join(userDataPath, opts.configName + '.json');

app.use(cors())

app.use(express.static(path.join(__dirname, './')))

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

//add images?
app.get('/data', function(req, res) {
  let filePath = path.join(__dirname, '/../../../../Library/Application\ Support/Sherpa-UI/user-preferences.json');
  console.log(filePath)
  res.sendFile(filePath)
})


app.listen(8080, function() {
  console.log('listening on 8080');
});
