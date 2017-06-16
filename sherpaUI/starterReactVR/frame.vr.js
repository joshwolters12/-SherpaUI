import React, { Component } from 'react';
import { AppRegistry, VrButton, NativeModules, asset, Pano, View, Text, StyleSheet, Scene, VrHeadModel } from 'react-vr';
import data from './obj.js';

export default class Frame extends Component {
    constructor() {
      super();
    }

  render() {
    return (
      <View>

        {/*NAV LEFT*/}
        <VrButton 
          style={{
            transform: [ {translate: this.props.translate}, {rotateY: this.props.rotateY}],
            flexDirection: 'row', 
          }}
          onClick={() => this.props.navigate(this.props.rotateY, 1)}>
          <Text>move to the left</Text>
        </VrButton>
        {/*NAV LEFT*/}

        {/*NAV RIGHT*/}
        <VrButton 
          style={{
            transform: [ {translate: this.props.translate}, {rotateY: this.props.rotateY}],
            flexDirection: 'row', 
          }}
          onClick={() => this.props.navigate(this.props.rotateY, -1)}>
          <Text>move to the right</Text>
        </VrButton>
        {/*NAV RIGHT*/}

        {/*TEXT*/}
        <Text style={{
                transform: [ {translate: this.props.translate}, {rotateY: this.props.rotateY}], 
                fontSize: .2,
              }}>
              {this.props.text}
        </Text>
        {/*TEXT*/}

      </View>
    )
  }
};