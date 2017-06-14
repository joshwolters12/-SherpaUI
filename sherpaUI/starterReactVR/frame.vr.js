import React, { Component } from 'react';
import { AppRegistry, asset, Pano, View, Text, StyleSheet } from 'react-vr';
import data from './obj.js';

export default class Frame extends Component {

  render() {
    return (
      <View style={{}}>
        <Text style={{
                transform: [ {translate: this.props.translate}, {rotateY: this.props.rotateY}], 
                fontSize: .2,
              }}
        >{this.props.text}</Text>
      </View>
    )
  }
};