import React, { Component } from 'react';
import { SegmentedControl, SegmentedControlItem, Text } from 'react-desktop/macOs';
import Gui from '../components/Gui';
const fs = require('fs-extra');
var data = require('../starterReactVR/myjsonfile.json');

export default class Main extends Component {
  constructor() {
    super();
    this.state = data;
    this.selectPage = this.selectPage.bind(this)
    this.updateProperties = this.updateProperties.bind(this)
    this.writeToFile = this.writeToFile.bind(this)
    this.setState=this.setState.bind(this)
  }

  selectPage(page) {
    this.setState({ currView: page });
  }

  updateProperties(event) {
    let newState = this.state
    newState[this.state.currView][event.target.name] = event.target.value;
    this.setState(newState)
  }

  writeToFile() {
    fs.writeFile('./starterReactVR/myjsonfile.json', JSON.stringify(this.state), 'utf8', () => { console.log('Writing Changes to File') });
    this.setState({loadURL: this.state.loadURL + Date.now()})
  }

  render() {
    return (
      <div id='appcontainer' style={styles.appcontainer}>
        <div id="headspacer" style={styles.header}>
          <div style={styles.logo}>
            <img src="./starterReactVR/static_assets/sherpa.png"/>
          </div>
        </div>
        <Gui
          data={this.state}
          selectPage={this.selectPage}
          updateProperties={this.updateProperties}
          writeToFile={this.writeToFile}
          loadURL={this.state.loadURL}
          imageURL={this.state.imageURL}
        ></Gui>
        <div id="footer" style={styles.footer}></div>
      </div>
    );
  }
}

let styles = {
  appcontainer: {
    backgroundColor: '#1e2538',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  header: {
    height: "8%",
    minHeight: '50px',
    flex: '[1 0 5%]',
    display: 'flex'
  },
  footer: {
    height: '2%',
    minHeight: '15px',
    flex: '[1 0 10%]',
  },
  logo:{
    width: '200px',
    height: '48px',
    margin: 'auto',
    alignItems: 'center'
  }
}
