import React, { Component } from 'react';
import { AppRegistry, VrButton, NativeModules, asset, Pano, View, Text, StyleSheet, Scene, VrHeadModel } from 'react-vr';
import Frame from './frame.vr.js';

const data = require('./myjsonfile.json');
const width = 5;


export default class starterReactVR extends Component {
  constructor() {
    super();
    this.state = data;
    this.state.sceneRotateX = 0
    this.state.sceneRotateY = 0;

    this.navigate = this.navigate.bind(this);
  }

  navigate(frameDeg, direction) {
    console.log('....navnavnavnavnavnavnavnav....')
    let rotationY = VrHeadModel.rotationOfHeadMatrix()[1]*180/(Math.PI);
    while(rotationY >= 360) rotationY-=360;
    while(rotationY < 0) rotationY+=360
    let goTo = frameDeg + direction*90;
    while(goTo >= 360) goTo-=360;
    while(goTo < 0) goTo+=360
    const degToRot = goTo - rotationY;

    console.log('rotationY: ', rotationY);
    console.log('frameDeg: ', frameDeg);
    console.log('goTo: ', goTo);
    console.log('state.sceneRotateY', this.state.sceneRotateY);
    
    this.setState({sceneRotateY: this.state.sceneRotateY+degToRot});
  }

  render() {
    return (

      <Scene style={{ 
                transform: [ 
                  {rotateX: this.state.sceneRotateX},
                  {rotateY: this.state.sceneRotateY},
                ]
            }}>
        <View>

          <Pano source={asset(this.state.imageURL)}></Pano>

          <View style={styles.container}>
            <Frame text={this.state.front.text} 
                   translate={[-width/2, 0, -5]} 
                   rotateY={0}
                   navigate={this.navigate}/> 
          </View>

          <View style={styles.container}>
            <Frame text={this.state.right.text} 
                   translate={[5-width/2, 0, 0]} 
                   rotateY={270}
                   navigate={this.navigate}/>
          </View>

          <View style={styles.container}>
            <Frame text={this.state.back.text} 
                   translate={[-width/2, 0, 5]} 
                   rotateY={180}
                   navigate={this.navigate}/>
          </View>

          <View style={styles.container}>
            <Frame text={this.state.left.text} 
                   translate={[-5-width/2, 0, 0]} 
                   rotateY={90}
                   printLocation={this.printLocation}
                   navigate={this.navigate}/>
          </View>

        </View>
      </Scene>
    )
  }
}
;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: width,
    justifyContent: 'center',
    flexDirection: 'row',
  }
})

AppRegistry.registerComponent('starterReactVR', () => starterReactVR);
