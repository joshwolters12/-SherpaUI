import React, { Component } from 'react';
import { AppRegistry, VrButton, NativeModules, asset, Pano, View, Text, StyleSheet, Scene, VrHeadModel, Image } from 'react-vr';
import Frame from './frame.vr.js';
import Nav from './nav.vr.js'

var ls = require('local-storage');
const data = require('./myjsonfile.json');
const width = 5;


export default class starterReactVR extends Component {
  constructor() {
    super();
    this.state = data;
    this.state.sceneRotateX = 0;
    this.state.sceneRotateY = 0;
    if (data.currView === 'front')
      this.state.sceneRotateY = 0;
    if (data.currView === 'right')
      this.state.sceneRotateY = 270;
    if (data.currView === 'back')
      this.state.sceneRotateY = 180;
    if (data.currView === 'left')
      this.state.sceneRotateY = 90;

    this.navigateY = this.navigateY.bind(this);
  }

  navigateY(frameDeg, direction) {
    console.log('....navnavnavnavnavnavnavnav....')
    console.log('state.sceneRotateY', this.state.sceneRotateY);

    let rotationY = VrHeadModel.yawPitchRoll()[1];

    while (rotationY >= 360) rotationY -= 360;
    while (rotationY < 0) rotationY += 360;

    let goTo = frameDeg + direction * 90;

    while (goTo >= 360) goTo -= 360;
    while (goTo < 0) goTo += 360;

    const degToRot = goTo - rotationY;
    let updateSceneRotateY = this.state.sceneRotateY + degToRot;
    while (updateSceneRotateY >= 360) updateSceneRotateY -= 360;
    while (updateSceneRotateY < 0) updateSceneRotateY += 360;

    console.log('yawpitchroll: ', VrHeadModel.yawPitchRoll())
    console.log('rotation: ', VrHeadModel.rotation());
    console.log('frameDeg: ', frameDeg);
    console.log('goTo: ', goTo);
    console.log('degToRot: ', degToRot);
    console.log('state.sceneRotateY', this.state.sceneRotateY);
    console.log('updateSceneRotateY: ', updateSceneRotateY);

    this.setState({
      sceneRotateY: updateSceneRotateY
    });
  }

  componentDidMount() {
    console.log('IN COMPONENTDIDMOUNT');
    console.log('rot', VrHeadModel.rotation());
    console.log('yawpitchroll: ', VrHeadModel.yawPitchRoll())
  }

  navigateDown(frameDeg, direction) {
    console.log('....navnavnavnavnavnavnavnav....')
    let rotationY = VrHeadModel.rotationOfHeadMatrix()[1] * 180 / (Math.PI);
    while (rotationY >= 360) rotationY -= 360;
    while (rotationY < 0) rotationY += 360;
    let goTo = frameDeg + direction * 90;
    while (goTo >= 360) goTo -= 360;
    while (goTo < 0) goTo += 360;
    const degToRot = goTo - rotationY;
    let updateSceneRotateY = this.state.sceneRotateY + degToRot;
    while (updateSceneRotateY >= 360) updateSceneRotateY -= 360;
    while (updateSceneRotateY < 0) updateSceneRotateY += 360;

    console.log('rotationY: ', rotationY);
    console.log('frameDeg: ', frameDeg);
    console.log('goTo: ', goTo);
    console.log('state.sceneRotateY', this.state.sceneRotateY);

    this.setState({
      sceneRotateY: updateSceneRotateY
    });
  }

  render() {
    console.log('GET!!!,', ls.get('path'))
    return (

      <Scene style={{
        transform: [
          {
            rotateX: this.state.sceneRotateX
          },
          {
            rotateY: this.state.sceneRotateY
          },
        ]
      }}>


          <Pano source={asset(this.state.imageURL)}></Pano>

          { /*FRONT*/ }
          <View style={styles.container}>
            <Frame title={this.state.front.title}
      text={this.state.front.text}
      translate={[-width / 2, 1.5, -5]}
      rotateY={0}
      rotateX={0}/>
          </View>
          <Nav direction={'left'}
      translate={[-width - .5, 0, -5]}
      rotateY={0}
      rotateX={0}
      navigateY={this.navigateY}/>
          <Nav direction={'right'}
      translate={[.5, 0, -5]}
      rotateY={0}
      rotateX={0}
      navigateY={this.navigateY}/>
          { /*FRONT*/ }

          { /*RIGHT*/ }
          <View style={styles.container}>
            <Frame title={this.state.right.title}
      text={this.state.right.text}
      translate={[5 - width / 2, 1.5, 0]}
      rotateY={270}
      rotateX={0}/>
          </View>
          <Nav direction={'left'}
      translate={[5 - width / 2, 0, -width / 2 - .5]}
      rotateY={270}
      rotateX={0}
      navigateY={this.navigateY}/>
          <Nav direction={'right'}
      translate={[5 - width / 2, 0, width / 2 + .5]}
      rotateY={270}
      rotateX={0}
      navigateY={this.navigateY}/>
          { /*RIGHT*/ }

          { /*BACK*/ }
          <View style={styles.container}>
            <Frame title={this.state.back.title}
      text={this.state.back.text}
      translate={[-width / 2, 1.5, 5]}
      rotateY={180}
      rotateX={0}/>
          </View>
          <Nav direction={'left'}
      translate={[.5, 0, 5]}
      rotateY={180}
      rotateX={0}
      navigateY={this.navigateY}/>
          <Nav direction={'right'}
      translate={[-width - .5, 0, 5]}
      rotateY={180}
      rotateX={0}
      navigateY={this.navigateY}/>
          { /*BACK*/ }

          { /*LEFT*/ }
          <View style={styles.container}>
            <Frame title={this.state.left.title}
      text={this.state.left.text}
      translate={[-5 - width / 2, 1.5, 0]}
      rotateY={90}
      rotateX={0}/>
          </View>
          <Nav direction={'left'}
      translate={[-5 - width / 2, 0, width / 2 + .5]}
      rotateY={90}
      rotateX={0}
      navigateY={this.navigateY}/>
          <Nav direction={'right'}
      translate={[-5 - width / 2, 0, -width / 2 - .5]}
      rotateY={90}
      rotateX={0}
      navigateY={this.navigateY}/>
          { /*LEFT*/ }


          { /*TOP*/ }
          { /*<View style={styles.container}>
            <Frame title={this.state.left.title}
                   text={this.state.left.text}
                   translate={[-width/2, 5, 0]}
                   rotateY={0}
                   rotateX={90}/>
          </View>*/ }
          { /*TEMP NAV DOWN BUTTON*/ }
            { /*<View style={{
                  flex: 1,
                  position: 'absolute',
                  width: 5,
                  alignItems: 'center',
                  flexDirection: 'column',
                }}
            >
                <VrButton onClick={() => this.state.navigateDown}>
                    <Image source={asset(`arrowdown.png`)}
                        style={{ width: .4,
                                height: .4,
                                transform: [{translate: [-width/2, 5, -width/2]},
                                            {rotateY: 0},
                                            {rotateX: 90}],
                              }}
                    />
                </VrButton>
            </View>*/ }
            { /*TEMP NAV DOWN BUTTON*/ }
          { /*TOP*/ }

      </Scene>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    width: width,
    // justifyContent: 'center',
    // textAlign: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  }
})

AppRegistry.registerComponent('starterReactVR', () => starterReactVR);
