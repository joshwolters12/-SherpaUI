import React, { Component } from 'react';
import { AppRegistry, VrButton, NativeModules, asset, Pano, View, Text, StyleSheet, Scene, VrHeadModel, Image } from 'react-vr';
import data from './obj.js';

export default class Front extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View>
        {/*TITLE*/}
        <Image
          source={{ uri: '../static_assets/sherpalarge.png' }}
          style={{
            transform: [{ translate: this.props.translate }, { rotateY: this.props.rotateY }],
            width: 4, height: 0.75
          }}
        >
        </Image>
        {/*TEXT*/}
        <Text style={{
          transform: [{ translate: this.props.translate }, { rotateY: this.props.rotateY }],
          fontSize: .3,
          color: 'white',
          backgroundColor: 'transparent',
          textAlign: 'center'
        }}>
          {this.props.text}
        </Text>
        {/*TEXT*/}

        <VrButton
          style={{ width: 0.7 }}
          onClick={() => this._onViewClicked()}>
          <Image style={{
            transform: [{ translate: this.props.translate }, { rotateY: this.props.rotateY }],
            width: 1, 
            height: 1,
            backgroundColor: 'white' }}
            inset={[0.2, 0.2, 0.2, 0.2]}
            insetSize={[0.05, 0.45, 0.55, 0.15]} >
          </Image>
        </VrButton>

      </View>
    )
  }
};