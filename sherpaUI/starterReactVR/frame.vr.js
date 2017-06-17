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
                color: 'blue'
              }}>
              {this.props.title}
        </Text>
        {/*TITLE*/}

        {/*TEXT*/}
        <Text style={{
                transform: [ {translate: this.props.translate}, {rotateY: this.props.rotateY}], 
                fontSize: .2,
                color: 'orange'
              }}>
              {this.props.text}
        </Text>
        {/*TEXT*/}

       
        {/*NAV LEFT*/}
        {/*<VrButton 
          style={{
            transform: [ {translate: this.props.translate}, {rotateY: this.props.rotateY}],
            flexDirection: 'row', 
          }}
          onClick={() => this.props.navigate(this.props.rotateY, 1)}>
          <Image source={asset('arrowleft.png')}
                  style={{width: .4, height: .4}} />
          <Text style={{
                  fontSize: .15,
                }}>girlBye</Text>
        </VrButton>*/}
        {/*NAV LEFT*/}

        {/*NAV RIGHT*/}
        {/*<VrButton 
          style={{
            transform: [ {translate: this.props.translate}, {rotateY: this.props.rotateY}],
            flexDirection: 'row', 
          }}
          onClick={() => this.props.navigate(this.props.rotateY, -1)}>
          <Text style={{
                  fontSize: .15,
                }}>bitchMove</Text>
          <Image source={asset('arrowright.png')}
                  style={{width: .4, height: .4}} />
        </VrButton>*/}
        {/*NAV RIGHT*/}

      </View>
    )
  }
};