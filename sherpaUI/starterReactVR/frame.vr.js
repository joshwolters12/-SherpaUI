import React, { Component } from 'react';
import { AppRegistry, VrButton, NativeModules, asset, Pano, View, Text, StyleSheet, Scene, VrHeadModel, Image } from 'react-vr';
import data from './obj.js';

export default class Frame extends Component {
    constructor() {
      super();
    }

  render() {
    return (
      <View style={{
              transform: [ {translate: this.props.translate}, 
                           {rotateY: this.props.rotateY},
                           {rotateX: this.props.rotateX} ], 
              backgroundColor: 'rgba(0, 0, 0, 0.3)'
            }}>

        {/*TITLE*/}
        <Text style={{
                fontSize: .5,
                color: 'white',
              }}>
              {this.props.title}
        </Text>
        {/*TITLE*/}

        {/*TEXT*/}
        <Text style={{
                fontSize: .2,
                color: 'white',
              }}>
              {this.props.text}
        </Text>
        {/*TEXT*/}

      </View>
    )
  }
};