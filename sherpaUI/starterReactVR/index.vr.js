import React, { Component } from 'react';
import { AppRegistry, 
         VrButton,
         NativeModules, 
         asset, 
         Pano, 
         View, 
         Text, 
         StyleSheet, 
         Scene, 
         VrHeadModel } from 'react-vr';
// import { VRInstance } from 'react-vr-web';
import Frame from './frame.vr.js';
// import data from './myjsonfile.json';

console.log('before require json');
var data = require('./myjsonfile.json');
console.log('after require json');
console.log('data: ',data);
// console.log('VRInstance: ', VRInstance)

// const camera = VRInstance.camera()
const width = 3;

// console.log('VrHeadModel: ', VrHeadModel)
// console.log('camera: ', camera);

export default class starterReactVR extends Component {
  constructor() {
    super();
    this.state = data;
    this.state.sceneRotate = 0;
  }

  navigate() {
    const rotation = VrHeadModel.rotationOfHeadMatrix();
    console.log('rotation: ', rotation);

    let theta = 90 - rotation[1]*180/(Math.PI);
    console.log('theta: ', theta)
    this.setState({sceneRotate: theta})
    
  }

  printLocation() {
    console.log('in the print location');
    const position = VrHeadModel.positionOfHeadMatrix();
    const rotation = VrHeadModel.rotationOfHeadMatrix();
    const horizFov = VrHeadModel.horizontalFov();
    const vertFov = VrHeadModel.verticalFov();
    console.log('position: ',position);
    console.log('rotation: ',rotation[1]*180/(Math.PI));
    console.log('horizFov: ',horizFov);
    console.log('vertFov: ',vertFov);
    console.log('scene: ', Scene)

  }

  printCamera() {
    NativeModules.TeleportModule.camera();
  
    // NativeModules.TeleportModule.rotateCamera(0,0,0);
    // {matrix: [Math.cos(Math.PI/2), 0, Math.sin(Math.PI/2), 0, 
    //           0, 1, 0, 0,
    //           -Math.sin(Math.PI/2), 0, Math.cos(Math.PI/2), 0,
    //           0, 0, 0, 1]}
    //           ], 
  }

  onHeadPoseCaptured(){
    console.log('onheadPoseCapture');
  }

  render() {
    console.log('in the render');
    return (
      <Scene style={{ 
                transform: [ 
                  {rotateY: this.state.sceneRotate},
                ]
            }}>
      <View >
        <Pano source={asset(this.state.imageURL)}></Pano>

        <VrButton
          style={{
                transform: [ {translate: [-width/2,0,-5]}], 
          }} 
          onClick={() => this.printLocation()}>
          <Text>location</Text>
        </VrButton>

        {/*<VrButton
          style={{
                transform: [ {translate: [-width/2,0,-5]}], 
          }} 
          onClick={() => this.printCamera()}>
          <Text>camera</Text>
        </VrButton>*/}

        <VrButton 
          style={{
            transform: [ {translate: [0,0,-5]}], 
          }}
          onClick={() => this.navigate()}>
          <Text>move to the left</Text>
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