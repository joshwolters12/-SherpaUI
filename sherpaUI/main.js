import { app, BrowserWindow, dialog } from 'electron';
// const dialog = require('electron').remote
const exec = require('child_process').exec;
const fs = require('fs')
let mainWindow = null;

app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', () => {
  exec('node starterReactVR/node_modules/react-native/local-cli/cli.js start')
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  });
  setTimeout(function() {
    mainWindow.loadURL('file://' + __dirname + '/index.html',);
  }, 500)





  dialog.showOpenDialog({
    //only allow image files to be selected
    filters: [
      {
        name: 'Images',
        extensions: ['jpg', 'png', 'gif']
      }

    ]
  }, function(fileNames) {
    //isolate filename to update rendered image in ReactVR
    if (fileNames === undefined) return;
    console.log(fileNames[0].split("/").pop())
    let imageToLoad = fileNames[0].split("/").pop()

  });





  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});
