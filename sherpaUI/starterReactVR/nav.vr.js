import React, { Component } from 'react';
import { AppRegistry, VrButton, NativeModules, asset, Pano, View, Text, StyleSheet, Scene, VrHeadModel, Image } from 'react-vr';
import data from './obj.js';

export default class Nav extends Component {
    constructor() {
      super();
    }

  render() {
    console.log('this.props: ',this.props)
    return (
      <View>
        <VrButton 
          style={{
            transform: [{translate: [this.props.translate]}, {rotateY: this.props.rotateY}],
            flexDirection: 'row', 
          }}
          onClick={() => this.props.navigate(this.props.rotateY, -1)}>
          <Text style={{
                  fontSize: .15,
                }}>{this.props.direction}</Text>
          <Image source={asset('arrowright.png')}
                  style={{width: .4, height: .4}} />
        </VrButton>
      </View>
    )
  }
};