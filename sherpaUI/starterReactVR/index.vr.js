import React, { Component } from 'react';
import { AppRegistry, VrButton, NativeModules, asset, Pano, View, Text, StyleSheet, Scene, VrHeadModel } from 'react-vr';
import Frame from './frame.vr.js';

const data = require('./myjsonfile.json');
const width = 5;


export default class starterReactVR extends Component {
  constructor() {
    super();
    this.state = data;
    if(data.currView === 'front') 
      this.state.sceneRotateY = 0;
    if(data.currView === 'right')
      this.state.sceneRotateY = 270;
    if(data.currView === 'back')
      this.state.sceneRotateY = 180;
    if(data.currView === 'left')
      this.state.sceneRotateY = 90;

    this.state.sceneRotateX = 0;
    this.navigate = this.navigate.bind(this);
  }

  navigate(frameDeg, direction) {
    console.log('....navnavnavnavnavnavnavnav....')
    let rotationY = VrHeadModel.rotationOfHeadMatrix()[1]*180/(Math.PI);
    while(rotationY >= 360) rotationY-=360;
    while(rotationY < 0) rotationY+=360;
    let goTo = frameDeg + direction*90;
    while(goTo >= 360) goTo-=360;
    while(goTo < 0) goTo+=360;
    const degToRot = goTo - rotationY;
    let updateSceneRotateY = this.state.sceneRotateY+degToRot;
    while(updateSceneRotateY >= 360) updateSceneRotateY-=360;
    while(updateSceneRotateY < 0) updateSceneRotateY+=360;

    console.log('rotationY: ', rotationY);
    console.log('frameDeg: ', frameDeg);
    console.log('goTo: ', goTo);
    console.log('state.sceneRotateY', this.state.sceneRotateY);
    
    this.setState({sceneRotateY: updateSceneRotateY});
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
            <Frame title={this.state.front.title}
                   text={this.state.front.text} 
                   translate={[-width/2, 1.5, -5]} 
                   rotateY={0}
                   navigate={this.navigate}/> 
          </View>

          <View style={styles.container}>
            <Frame title={this.state.right.title}
                   text={this.state.right.text} 
                   translate={[5-width/2, 1.5, 0]} 
                   rotateY={270}
                   navigate={this.navigate}/>
          </View>

          <View style={styles.container}>
            <Frame title={this.state.back.title}
                   text={this.state.back.text} 
                   translate={[-width/2, 1.5, 5]} 
                   rotateY={180}
                   navigate={this.navigate}/>
          </View>

          <View style={styles.container}>
            <Frame title={this.state.left.title}
                   text={this.state.left.text} 
                   translate={[-5-width/2, 1.5, 0]} 
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
