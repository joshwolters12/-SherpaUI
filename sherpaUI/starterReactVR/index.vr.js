import React, { Component } from 'react';
import { AppRegistry, VrButton, NativeModules, asset, Pano, View, Text, StyleSheet, Scene, VrHeadModel, Image } from 'react-vr';
import TextFrame from './text-frame.vr.js';
import TitleFrame from './title-frame.vr.js';

const data = require('./myjsonfile.json');


export default class starterReactVR extends Component {
  constructor() {
    super();
    this.state = data;
    this.state.sceneRotateY = 0;
    this.state.frontTransformation = {
      translate: [-2.5, 1.5, -5],
      leftTranslate: [-5.5, 0, -5],
      rightTranslate: [.5, 0, -5],
      rotateY: 0
    }
    this.state.rightTransformation = {
      translate: [2.5, 1.5, 0],
      leftTranslate: [2.5, 0, -3],
      rightTranslate: [2.5, 0, 3],
      rotateY: 270
    }
    this.state.backTransformation = {
      translate: [-2.5, 1.5, 5],
      leftTranslate: [.5, 0, 5],
      rightTranslate: [-5.5, 0, 5],
      rotateY: 180
    }
    this.state.leftTransformation = {
      translate: [-7.5, 1.5, 0],
      leftTranslate: [-7.5, 0, 3],
      rightTranslate: [-7.5, 0, -3],
      rotateY: 90
    }
    if(data.currView === 'front') 
      this.state.sceneRotateY = 0;
    if(data.currView === 'right')
      this.state.sceneRotateY = 270;
    if(data.currView === 'back')
      this.state.sceneRotateY = 180;
    if(data.currView === 'left')
      this.state.sceneRotateY = 90;

    this.navigateY = this.navigateY.bind(this);
  }


  navigateY(frameDeg, direction) {
    let rotationY = VrHeadModel.yawPitchRoll()[1];
    while(rotationY >= 360) rotationY-=360;
    while(rotationY < 0) rotationY+=360;
    let goTo = frameDeg + direction*90;
    while(goTo >= 360) goTo-=360;
    while(goTo < 0) goTo+=360;
    let degToRot = goTo - rotationY;
    let updateSceneRotateY = this.state.sceneRotateY+degToRot;
    while(updateSceneRotateY >= 360) updateSceneRotateY-=360;
    while(updateSceneRotateY < 0) updateSceneRotateY+=360;
   {
    console.log('yawpitchroll: ', VrHeadModel.yawPitchRoll() )
    console.log('rotation: ', VrHeadModel.rotation());
    console.log('frameDeg: ', frameDeg);
    console.log('goTo: ', goTo);
    console.log('degToRot: ', degToRot);
    console.log('state.sceneRotateY', this.state.sceneRotateY);
    console.log('updateSceneRotateY: ',updateSceneRotateY);
   } 
    this.setState({sceneRotateY: updateSceneRotateY});
  }

  componentDidMount(){
    console.log('component did mount');
    console.log('current rotation: ', VrHeadModel.rotation());
    console.log('current yawPitchRoll: ', VrHeadModel.yawPitchRoll());
  }

  render() {
    return (

      <Scene style={{ transform: [{rotateY: this.state.sceneRotateY}] }}>
          <Pano source={asset(this.state.imageURL)}></Pano>
          
          {/*FRONT*/}
          <View style={styles.container}>
            <TitleFrame navigateY={this.navigateY}
                       title={this.state.front.title}
                       text={this.state.front.text} 
                       transformation={this.state.frontTransformation}
            />
          </View>
          {/*FRONT*/}

          {/*RIGHT*/}
          <View style={styles.container}>
            <TextFrame navigateY={this.navigateY}
                       title={this.state.right.title}
                       text={this.state.right.text} 
                       transformation={this.state.rightTransformation}
            />
          </View>

          {/*RIGHT*/}

          {/*BACK*/}
          <View style={styles.container}>
            <TextFrame navigateY={this.navigateY}
                       title={this.state.back.title}
                       text={this.state.back.text} 
                       transformation={this.state.backTransformation}
            />
          </View>
          {/*BACK*/}

          {/*LEFT*/}
          <View style={styles.container}>
            <TextFrame navigateY={this.navigateY}
                       title={this.state.left.title}
                       text={this.state.left.text} 
                       transformation={this.state.leftTransformation}
            />
          </View>
          {/*LEFT*/}

      </Scene>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    width: 5,
    alignItems: 'center',
    flexDirection: 'column',
  }
})

AppRegistry.registerComponent('starterReactVR', () => starterReactVR);