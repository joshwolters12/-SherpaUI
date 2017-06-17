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
                transform: [ {translate: this.props.translate}, {rotateY: this.props.rotateY}], 
                fontSize: .5,
                color: 'white',
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
              }}>
              {this.props.title}
        </Text>
        {/*TITLE*/}

        {/*TEXT*/}
        <Text style={{
                transform: [ {translate: this.props.translate}, {rotateY: this.props.rotateY}], 
                fontSize: .2,
                color: 'white',
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
              }}>
              {this.props.text}
        </Text>
        {/*TEXT*/}

      </View>
    )
  }
};