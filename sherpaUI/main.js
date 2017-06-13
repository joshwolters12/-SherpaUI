import { app, BrowserWindow } from 'electron';

const exec = require('child_process').exec;
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
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});
