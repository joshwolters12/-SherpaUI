import React, { Component } from 'react';
import { AppRegistry, asset, Pano, View, Text, StyleSheet } from 'react-vr';
import data from './obj.js';

export default class Frame extends Component {

  render() {
    return (
      <View>
        <Text style={{
                transform: [ {translate: [-1,0,-3] && this.props.translate}, {rotateY: 0 && this.props.rotateY}], 
                textAlign: 'center',
                flexDirection: 'row',
                fontSize: .2
              }}
        >{this.props.text}</Text>
      </View>
    )
  }
};

// AppRegistry.registerComponent( 'Frame', () => Frame );