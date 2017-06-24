import React, { Component } from 'react';
import { SegmentedControl, SegmentedControlItem, Text } from 'react-desktop/macOs';
import Gui from '../components/Gui';
import Publish from '../components/Publish';
import Open from '../components/Open';
import Save from '../components/Save';
import Store from './store'

const {BrowserWindow} = require('electron').remote
const app =require('electron').remote.app
const exec = require('child_process').exec
const fs = require('fs-extra');
const path = require('path');
let filePath = app.getPath('userData') + '/user-preferences.json'
console.log('filePath',filePath)
var data = require(filePath);
const dialog = require('electron').remote.dialog;



const store = new Store({
  // We'll call our data file 'user-preferences'
  configName: 'user-preferences',
  defaults: data
    // 800x600 is the default size of our window
});



export default class Main extends Component {
  constructor() {
    super();
    this.state = data;
    this.selectPage = this.selectPage.bind(this)
    this.updateProperties = this.updateProperties.bind(this)
    this.writeToFile = this.writeToFile.bind(this)
    this.setState = this.setState.bind(this)
    this.chooseImage = this.chooseImage.bind(this)
    this.publish = this.publish.bind(this)
    this.openWindow = this.openWindow.bind(this)
    this.updateName = this.updateName.bind(this)
  }

  selectPage(page) {
    let _this = this;
    new Promise((resolve,reject)=>{
      this.setState({
        currView: page
      },()=>{resolve()});
    }).then(()=>{
      fs.writeFile(filePath, JSON.stringify(_this.state), function (err) {
      console.log(err)
    });
    }).then(()=>{
      _this.setState({
        loadURL: _this.state.loadURL + Date.now()
      });
    })
  }

  openWindow() {
    let win = new BrowserWindow({
      width: 800,
      height: 600
    })
    win.on('closed', () => {
      win = null
    })
    win.loadURL(this.state.loadURL)
  }

  updateName(event) {
    let newState = this.state
    newState[event.target.name] = event.target.value;
    this.setState(newState)
  }

  updateProperties(event) {
    let newState = this.state
    newState[this.state.currView][event.target.name] = event.target.value;
    this.setState(newState)
  }

  writeToFile() {
    fs.writeFile(filePath, JSON.stringify(this.state), function (err) {
      console.log(err)
    });
    this.setState({
      loadURL: "http://localhost:8081/vr/?" + Date.now()
    })
  }

  publish() {
    exec("npm run publish")
  }

  chooseImage() {
    let _this = this;
    new Promise((resolve, reject) => {
      dialog.showOpenDialog({
        filters: [
          {
            name: 'Images',
            extensions: ['jpg', 'png', 'gif']
          }
        ]
      }, function(filePath) {
        if (filePath === undefined) return;
        let imageToLoad = filePath[0].split("/").pop();
        let pathLength = filePath[0].split("/").length;
        let pathMatch = filePath[0].split("/").slice(pathLength - 3, pathLength).join("/");

        if (pathMatch !== 'static_assets/' + imageToLoad) {
          console.log('filePath', filePath)
          console.log('saveURI', 'static_assets/' + imageToLoad)
          fs.copy(filePath.toString(), 'static_assets/' + imageToLoad, function(err) {
            if (err) return console.log(err)
            resolve(imageToLoad)
          })
        } else {
          resolve(imageToLoad)
        }
      })
    }).then((imageURL) => {
      let newState = _this.state;
      newState.imageURL = imageURL
      this.setState(newState)
      this.writeToFile()
    })
  }

  render() {
    return (
      <div id='appcontainer' style={styles.appcontainer} >
        <div id="headspacer" style={styles.header}>
          <Open/>
          <Save/>
          <div style={styles.logo}>
            <img src="./starterReactVR/static_assets/sherpa.png" />
          </div>
          <Publish
      publish = {this.publish}
      />
        </div>
        <Gui
      data={this.state}
      selectPage={this.selectPage}
      updateProperties={this.updateProperties}
      writeToFile={this.writeToFile}
      loadURL={this.state.loadURL}
      imageURL={this.state.imageURL}
      chooseImage={this.chooseImage}
      openWindow={this.openWindow}
      updateName={this.updateName}
      ></Gui>
        <div id="footer" style={styles.footer}></div>
      </div >
      );
  }
}

let styles = {
  appcontainer: {
    backgroundColor: '#1e2538',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    height: "8%",
    width: "100%",
    minWidth: '800px',
    minHeight: '50px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flex: '[1 0 5%]'
  },
  footer: {
    height: '2%',
    minHeight: '15px',
    flex: '[1 0 10%]',
  },
  logo: {
    minWidth: '145px',
    minHeight: '30px',
    maxWidth: '190px',
    maxHeight: '42px',
    margin: 'auto',
    alignItems: 'center'
  }
}
