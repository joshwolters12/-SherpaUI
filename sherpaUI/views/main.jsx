import React, { Component } from 'react';
import { SegmentedControl, SegmentedControlItem, Text } from 'react-desktop/macOs';
import Gui from '../components/Gui';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      selected: 1
    }
  }

  render() {
    return (
      <div id='appcontainer' style={styles.appcontainer}>
        <div id="headspacer" style={styles.header}></div>
        <Gui></Gui>
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
    height: "2%",
    minHeight:'15px',
    flex: '[1 0 5%]',
  },
  footer: {
    height: '8%',
    minHeight:'50px',
    flex: '[1 0 10%]',
  }
}