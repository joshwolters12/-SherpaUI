import React, { Component } from 'react';
import { AppRegistry, VrButton, NativeModules, asset, Pano, View, Text, StyleSheet, Scene, VrHeadModel, Image } from 'react-vr';
import data from './obj.js';

export default class Nav extends Component {
    constructor() {
      super();
    }

  render() {
    let multiplier = this.props.direction === 'left' ? 1 : -1;
    return (
        <View style={{
                flex: 1,
                position: 'absolute',
                width: 5,
                alignItems: 'center',
                flexDirection: 'column',
                }}
        >
            <VrButton onClick={() => this.props.navigateY(this.props.rotateY, multiplier)}>
                <Image source={asset(`arrow`+this.props.direction+`.png`)}
                    style={{ width: .4, 
                                height: .4,
                                transform: [ {translate: this.props.translate}, {rotateY: this.props.rotateY}],
                            }}
                />
            </VrButton>
        </View>
    )
  }
};