import { app, BrowserWindow, dialog, Menu, shell } from 'electron';
// const dialog = require('electron').remote
const exec = require('child_process').exec;
const fs = require('fs-extra');
const defaultMenu = require('electron-default-menu');




let mainWindow = null;


app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', () => {
  const menu = defaultMenu(app, shell);

  menu.splice(4, 0, {
    label: 'Custom',
    submenu: [
      {
        label: 'Export Project to Desktop',
        click: (item, focusedWindow) => {
          dialog.showMessageBox({
            type: "question",
            message: 'Export to Desktop?',
            buttons: ['OK']
          }, function() {
            exec("cd starterReactVR && npm run bundle")
            console.log('exporting to desktop')
          })
        }
      }
    ]
  })







  exec('node starterReactVR/node_modules/react-native/local-cli/cli.js start')
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800
  });
  setTimeout(function() {
    mainWindow.loadURL('file://' + __dirname + '/index.html',);
  }, 500)

  //LOAD A FILE TO THE STATIC ASSETS DIRECTORY
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
  //   fs.readFile('starterReactVR/myjsonfile.json', 'utf8', function(err, data) {
  //     let obj = JSON.parse(data)
  //     obj.imageURL = imageToLoad
  //     let json = JSON.stringify(obj, null, 2)
  //     fs.writeFile('./starterReactVR/myjsonfile.json', json, 'utf8', function(err) {
  //       if (err) return console.log(err)
  //       mainWindow.reload()
  //     })
  //   })
  // });





  Menu.setApplicationMenu(Menu.buildFromTemplate(menu))
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});
