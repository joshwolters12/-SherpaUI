import React, { Component } from 'react';
import { AppRegistry, VrButton, NativeModules, asset, Pano, View, Text, StyleSheet, Scene, VrHeadModel, Image } from 'react-vr';
import data from './obj.js';

export default class Frame extends Component {
  constructor() {
    super();
  }

  render() {
    return (
<<<<<<< HEAD
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
=======
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
>>>>>>> 17c794cf43b079b5eaa8ee014677fd053ab83c2f
        </Text>
        {/*TITLE*/}

        {/*TEXT*/}
        <Text style={{
<<<<<<< HEAD
          transform: [{ translate: this.props.translate }, { rotateY: this.props.rotateY }],
          fontSize: .25,
          color: 'white',
          backgroundColor: 'transparent',
        }}>
          {this.props.text}
=======
                fontSize: .2,
                color: 'white',
              }}>
              {this.props.text}
>>>>>>> 17c794cf43b079b5eaa8ee014677fd053ab83c2f
        </Text>
        {/*TEXT*/}

      </View>
    )
  }
};