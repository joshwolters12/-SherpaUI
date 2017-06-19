import React, { Component } from 'react';
import { AppRegistry, VrButton, NativeModules, asset, Pano, View, Text, StyleSheet, Scene, VrHeadModel, Image } from 'react-vr';
import data from './obj.js';

export default class Frame extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View>
        {/*TITLE*/}
        <Text style={{
          transform: [{ translate: this.props.translate }, { rotateY: this.props.rotateY }],
          fontSize: .5,
          fontFamily: 'Helvetica',
          color: 'white',
          backgroundColor: 'transparent',
          textAlign: 'center',
          fontWeight: 'bold'
        }}>
          {this.props.title}
        </Text>
        {/*TITLE*/}

        {/*TEXT*/}
        <Text style={{
          transform: [{ translate: this.props.translate }, { rotateY: this.props.rotateY }],
          fontSize: .25,
          color: 'white',
          backgroundColor: 'transparent',
        }}>
          {this.props.text}
        </Text>
        {/*TEXT*/}

      </View>
    )
  }
};