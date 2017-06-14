import React, { Component } from 'react';
import { AppRegistry, asset, Pano, View, Text, StyleSheet, Plane, Scene } from 'react-vr';
import Frame from './frame.vr.js';
var data = require('./myjsonfile.json')

const width = 3;

export default class starterReactVR extends Component {
  constructor() {
    super();
    this.state = data;
  }

  render() {
    console.log(this.state)
    return (
      <View>

        <Pano source={asset(this.state.imageURL)}></Pano>

        <View style={styles.container}>
          <Frame text={this.state.front.text} translate={[-width / 2, 0, -5]} rotateY={0}/>
        </View>

        <View style={styles.container}>
          <Frame text={this.state.right.text} translate={[5 - width / 2, 0, 0]} rotateY={-90}/>
        </View>

        <View style={styles.container}>
          <Frame text={this.state.back.text} translate={[-width / 2, 0, 5]} rotateY={180}/>
        </View>

        <View style={styles.container}>
          <Frame text={this.state.left.text} translate={[-5 - width / 2, 0, 0]} rotateY={90}/>
        </View>

      </View>
    )
  }
}
;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: width,
    // height: 10,
    // textAlign: 'center',
    justifyContent: 'center',
    // backgroundColor: 'blue',
    // alignItems: 'center',
    flexDirection: 'row',
  // justifyContent: 'flex-start'
  // margin: 'none'
  }
})

AppRegistry.registerComponent('starterReactVR', () => starterReactVR);
