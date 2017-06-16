import React, { Component } from 'react';
import { AppRegistry, asset, Pano, View, Text, StyleSheet, VrButton } from 'react-vr';
import data from './obj.js';

export default class Frame extends Component {

  render() {
    return (
      <View style={{}}>

        {/*<VrButton 
          style={{
            transform: [ {translate: [0,0,-5]}], 
          }}
          onClick={() => this.navigate()}>
          <Text>move to the left</Text>
        </VrButton>*/}

        <Text style={{
                transform: [ {translate: this.props.translate}, {rotateY: this.props.rotateY}], 
                fontSize: .2,
              }}>
              {this.props.text}
        </Text>

        {/*<VrButton 
          style={{
            transform: [ {translate: [0,0,-5]}], 
          }}
          onClick={() => this.navigate()}>
          <Text>move to the right</Text>
        </VrButton>*/}

      </View>
    )
  }
};