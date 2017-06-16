import React, { Component } from 'react';
import { SegmentedControl, SegmentedControlItem, Text } from 'react-desktop/macOs';
import Gui from '../components/Gui';
import Publish from '../components/Publish';
import Open from '../components/Open';

const exec = require('child_process').exec
const fs = require('fs-extra');
var data = require('../starterReactVR/myjsonfile.json');
import { BrowserWindow, dialog } from 'electron';

console.log(dialog)


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
  }

  selectPage(page) {
    this.setState({
      currView: page
    });
  }

  updateProperties(event) {
    let newState = this.state
    newState[this.state.currView][event.target.name] = event.target.value;
    this.setState(newState)
  }

  writeToFile() {
    fs.writeFile('./starterReactVR/myjsonfile.json', JSON.stringify(this.state), 'utf8', () => {
      console.log('Writing Changes to File')
    });
    this.setState({
      loadURL: this.state.loadURL + Date.now()
    })
  }

  publish(){
    exec("npm run publish")
  }

  chooseImage() {
    console.log('choosing image')
    dialog.showOpenDialog({
      filters: [
        {
          name: 'Images',
          extensions: ['jpg', 'png', 'gif']
        }
      ]
    }, function (filePath) {
      if (filePath === undefined) return;
      let imageToLoad = filePath[0].split("/").pop()

      fs.copy(filePath.toString(), 'starterReactVR/static_assets/' + imageToLoad, function (err) {
        if (err) return console.log(err)
      })

      fs.readFile('starterReactVR/myjsonfile.json', 'utf8', function (err, data) {
        let obj = JSON.parse(data)
        obj.imageURL = imageToLoad
        let json = JSON.stringify(obj, null, 2)

        fs.writeFile('./starterReactVR/myjsonfile.json', json, 'utf8', function (err) {
          if (err) return console.log(err)
          mainWindow.reload()
        })

      })
    })
  }

  render() {

    return (
      <div id='appcontainer' style={styles.appcontainer} >
        <div id="headspacer" style={styles.header}>
          <Open/>
          <div style={styles.logo}>
            <img src="./starterReactVR/static_assets/sherpa.png" />
          </div>
          <Publish
            publish = {this.publish}
          />
        </div>
      </div>

      <Gui
        data={this.state}
        selectPage={this.selectPage}
        updateProperties={this.updateProperties}
        writeToFile={this.writeToFile}
        loadURL={this.state.loadURL}
        imageURL={this.state.imageURL}
        chooseImage = {this.chooseImage}
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
    justifyContent:'center',
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
