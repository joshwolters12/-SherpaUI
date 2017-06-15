import React, { Component } from 'react';
import { AppRegistry, VrButton, NativeModules, asset, Pano, View, Text, StyleSheet, Plane, Scene, VrHeadModel } from 'react-vr';
// import { VRInstance } from 'react-vr-web';
import Frame from './frame.vr.js';
import data from './obj.js';

// const camera = VRInstance.camera()
const width = 3;

console.log('VrHeadModel: ', VrHeadModel)
// console.log('camera: ', camera);

export default class starterReactVR extends Component {
  constructor() {
    super();
    this.state = data;
    this.state.sceneRotate = 90;
  }

  navigate() {
    console.log('in the click me');
    let a = this.state.sceneRotate + 90;
    this.setState({sceneRotate: a})
    
    // NativeModules.TeleportModule.teleportCamera(0,0,0);
    // NativeModules.TeleportModule.rotateCamera(0,0,0);
  }

  printLocation() {
    const position = VrHeadModel.positionOfHeadMatrix();
    const rotation = VrHeadModel.rotationOfHeadMatrix();
    const horizFov = VrHeadModel.horizontalFov();
    const vertFov = VrHeadModel.verticalFov();
    console.log('position: ',position);
    console.log('rotation: ',rotation);
    console.log('horizFov: ',horizFov);
    console.log('vertFov: ',vertFov);
    console.log('scene: ', Scene)

  }

  printCamera() {
    NativeModules.TeleportModule.rotateCamera(0,0,0);
    {/*{matrix: [Math.cos(Math.PI/2), 0, Math.sin(Math.PI/2), 0, 
              0, 1, 0, 0,
              -Math.sin(Math.PI/2), 0, Math.cos(Math.PI/2), 0,
              0, 0, 0, 1]}
              ], */}
  }

  render() {
    return (
      <Scene style={{ 
                transform: [ 
                  {rotateY: this.state.sceneRotate}
                ]
            }}>
      <View >

        <Pano source={asset(this.state.image)}></Pano>
        <VrButton 
          style={{
                transform: [ {translate: [-width/2,0,-5]}], 
          }}
          onClick={() => this.navigate()}>
          <Text>move to the left</Text>
        </VrButton>

        <VrButton
          style={{
                transform: [ {translate: [-width/2,0,-5]}], 
          }} 
          onClick={() => this.printLocation()}>
          <Text>location</Text>
        </VrButton>

        <VrButton
          style={{
                transform: [ {translate: [-width/2,0,-5]}], 
          }} 
          onClick={() => this.printCamera()}>
          <Text>camera</Text>
        </VrButton>

        <View style={styles.container}>
          <Frame text={this.state.front.text} translate={[-width/2, 0, -5]} rotateY={0}/> 
        </View>

        <View style={styles.container}>
          <Frame text={this.state.right.text} translate={[5-width/2, 0, 0]} rotateY={-90}/> 
        </View>

        <View style={styles.container}>
          <Frame text={this.state.back.text} translate={[-width/2, 0, 5]} rotateY={180}/>
        </View>

        <View style={styles.container}>
          <Frame text={this.state.left.text} translate={[-5-width/2, 0, 0]} rotateY={90}/>
        </View>

      </View>
      </Scene>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: width,
    justifyContent: 'center',
    flexDirection: 'row',
  }
})

AppRegistry.registerComponent( 'starterReactVR', () => starterReactVR );