const app = require('electron').app;
const BrowserWindow = require('electron').BrowserWindow;
const dialog = require('electron').dialog;
const Menu = require('electron').Menu;
const MenuItem = require('electron').MenuItem
const shell = require('electron').shell;
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
  console.log(menu[0])
  menu.splice(1, 0, {
    label: 'File',
    submenu: [{
      label: 'New Project',
      accelerator: 'CmdOrCtrl+N',
      click: (item, focusedWindow) => {
        dialog.showOpenDialog(mainWindow, {
          message: 'Please Select Image File',
          properties: ['openFile'],
          buttonLabel: 'Create Project',
          filters: [
            {
              name: 'Images',
              extensions: ['jpg', 'png', 'gif']
            }
          ]
          //update image path
          //erase object properties in json object

        }, function(filePaths) {
          let newImage = filePaths[0].split('/').pop()
          fs.readFile('./starterReactVR/myjsonfile.json', function(err, data) {
            let stateObj = JSON.parse(data)
            stateObj.projectName = ''
            stateObj.imageURL = newImage
            stateObj.loadURL = "http://localhost:8081/vr/?" + Date.now()
            stateObj.front["title"] = ''
            stateObj.front["text"] = ''
            stateObj.back["title"] = ''
            stateObj.back["text"] = ''
            stateObj.left["title"] = ''
            stateObj.left["text"] = ''
            stateObj.right["title"] = ''
            stateObj.right["text"] = ''
            fs.writeFile('./starterReactVR/myjsonfile.json', JSON.stringify(stateObj, null, 2), function(err) {
              if (err) return console.log(err)
            })
          })
          fs.copy(filePaths[0], './starterReactVR/static_assets' + newImage)
          BrowserWindowc.reload()
        })


      }
    }, {
      label: 'Open Project...',
      accelerator: 'CmdOrCtrl+O'
    }, {
      label: 'Save',
      accelerator: 'CmdOrCtrl+S'
    },
      {
        label: 'Save As...',
        accelerator: 'Shift+CmdOrCtrl+S'
      },
      {
        label: 'Export Project...',
        accelerator: 'CmdOrCtrl+E',
        click: (item, focusedWindow) => {
          dialog.showMessageBox({
            type: "question",
            message: 'Are you sure you want to Export to Desktop?',
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
    mainWindow.loadURL('file://' + __dirname + '/index.html');
  }, 500)

  Menu.setApplicationMenu(Menu.buildFromTemplate(menu))

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});
