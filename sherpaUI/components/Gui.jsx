import React, { Component } from 'react';
import Scene from '../components/Scene';
import Page from '../components/Page';
import Canvas from '../components/Canvas';
import Properties from '../components/Properties';

class Gui extends Component {
    render() {
        return (
            <div style = {styles.gui}>
                <Scene/>
                <div id='pageContainer' style={styles.pageContainer}>
                    <Page />
                    <Page />
                    <Page />
                    <Page />
                </div>
                <Canvas/>
                <Properties/>
            </div>
        )
    }
}

let styles = {
  gui: {
    height: '90%',
    flex: '[3 0 85%]',
    backgroundColor: '#181b2a',
    padding: '1px',
    flexDirection:'row',
    display: 'flex'
  },
  pageContainer: {
    height: '100%',
    width:'15%',
    minWidth:'240px',
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-around'
  }
}

export default Gui;