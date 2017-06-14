import { app, BrowserWindow, dialog } from 'electron';
// const dialog = require('electron').remote
const exec = require('child_process').exec;
const fs = require('fs-extra');
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


  //LOAD A FILETO THE STATIC ASSETS DIRECTORY
  // dialog.showOpenDialog({
  //   filters: [
  //     {
  //       name: 'Images',
  //       extensions: ['jpg', 'png', 'gif']
  //     }
  //   ]
  // }, function(filePath) {
  //   if (filePath === undefined) return;
  //   let imageToLoad = filePath[0].split("/").pop()
  //   fs.copy(filePath.toString(), 'starterReactVR/static_assets/' + imageToLoad, function(err) {
  //     if (err) return console.log(err)
  //   })
  // });






  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});
