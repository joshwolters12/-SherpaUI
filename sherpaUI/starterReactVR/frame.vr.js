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
              }}>
              {this.props.title}
        </Text>
        {/*TITLE*/}

        {/*TEXT*/}
        <Text style={{
                transform: [ {translate: this.props.translate}, {rotateY: this.props.rotateY}], 
                fontSize: .2,
              }}>
              {this.props.text}
        </Text>
        {/*TEXT*/}

        <View>
          {/*NAV LEFT*/}
          <VrButton 
            style={{
              transform: [ {translate: this.props.translate}, {rotateY: this.props.rotateY}],
              flexDirection: 'row', 
            }}
            onClick={() => this.props.navigate(this.props.rotateY, 1)}>
            <Text style={{
                fontSize: .15,
              }}>move to the left</Text>
              <Image source={asset('arrowleft.png')}
                     style={{width: 1, height: 1}} />
          </VrButton>
          {/*NAV LEFT*/}

          {/*NAV RIGHT*/}
          <VrButton 
            style={{
              transform: [ {translate: this.props.translate}, {rotateY: this.props.rotateY}],
              flexDirection: 'row', 
            }}
            onClick={() => this.props.navigate(this.props.rotateY, -1)}>
            <Text style={{
                    fontSize: .15,
                  }}>move to the right</Text>
          </VrButton>
          {/*NAV RIGHT*/}
        </View>

      </View>
    )
  }
};