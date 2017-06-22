const app = require('electron').app;
const BrowserWindow = require('electron').BrowserWindow;
const dialog = require('electron').dialog;
const Menu = require('electron').Menu;
const MenuItem = require('electron').MenuItem
const shell = require('electron').shell;
const exec = require('child_process').exec;
const fs = require('fs-extra');
const touch = require('touch');
const defaultMenu = require('electron-default-menu');




let mainWindow = null;

app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', () => {
  exec('npm run data')
  const menu = defaultMenu(app, shell);

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
          fs.copy(filePaths[0], './starterReactVR/static_assets/' + newImage)
          mainWindow.reload()
        })
      }
    }, {
      label: 'Open Project...',
      accelerator: 'CmdOrCtrl+O',
      click: () => {
        dialog.showOpenDialog({
          buttonLabel: "Open Project",
          defaultPath: "./starterReactVR/saved_projects/"
        }, function(filePaths) {
          if (filePaths) {
            let fileToOpen = filePaths[0].split('/').pop()
            fs.readFile('./starterReactVR/saved_projects/' + fileToOpen, function(err, data) {
              if (err) return console.log(err)
              fs.writeFile('./starterReactVR/myjsonfile.json', data, function(err) {
                if (err) return console.log(err)
              })
            })
          }
        })
      }
    }, {
      label: 'Save',
      accelerator: 'CmdOrCtrl+S',
      click: () => {

      }
    },
      {
        label: 'Save As...',
        accelerator: 'Shift+CmdOrCtrl+S',
        click: (item, focusedWindow) => {
          dialog.showSaveDialog({
            buttonLabel: "Save Project",
            defaultPath: './starterReactVR/saved_projects/',
            nameFieldLabel: "Name:"
          }, function(filename) {
            if (filename) {
              let fileToSave = filename.split('/').pop()
              fs.copy('./starterReactVR/myjsonfile.json', './starterReactVR/saved_projects/' + fileToSave, function(err) {
                if (err) return console.log(err)
              })
            }
          })
        }
      }, {
        type: 'separator'
      },
      {
        label: 'Export Project...',
        accelerator: 'CmdOrCtrl+E',
        click: (item, focusedWindow) => {
          dialog.showMessageBox({
            type: "question",
            message: 'Are you sure you want to Export to Desktop?',
            buttons: ['OK', 'Cancel']
          }, function(response) {
            if (response === 0) {
              exec("cd starterReactVR && npm run bundle")
              console.log('exporting to desktop')
            }
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
