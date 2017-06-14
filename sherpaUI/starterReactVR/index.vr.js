import React, { Component } from 'react';
import { AppRegistry, asset, Pano, View, Text, StyleSheet, Plane, Scene } from 'react-vr';
import Frame from './frame.vr.js';
import data from './obj.js';

const width = 10;

export default class starterReactVR extends Component {
  constructor() {
    super();
    this.state = data;
  }

  render() {
    return (
      // <Scene>
        <View style={styles.container}>
          <Pano source={asset('winter-outdoor.jpg')}></Pano>
          <Plane
            text={'idk this is text'}
            style={{color: 'black',
                    transform: [{translate: [-width/2, 0, -3]}]
                  }}
            dimWidth={1}
            dimHeight={1}
          />
          <Plane
            text={'idk this is text'}
            style={{color: 'blue',
                    transform: [{translate: [-width/2, 0, -3]}]
                  }}
            dimWidth={1}
            dimHeight={1}
            wireFrame={true}
          />
          <Frame text={this.state.front.text} translate={[-width/2, 0, -3]} rotateY={0}/>
          <Frame text={this.state.right.text} translate={[-width/2, .125, -3]} rotateY={-90}/> 
          <Frame text={this.state.back.text} translate={[-width/2, .25, -3]} rotateY={180}/>
          <Frame text={this.state.left.text} translate={[-width/2, .375, -3]} rotateY={90}/>
        </View>
      // </Scene>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    alignItems: 'center',
    flexDirection: 'row',
    alignItems: 'stretch'
  }
})

AppRegistry.registerComponent( 'starterReactVR', () => starterReactVR );