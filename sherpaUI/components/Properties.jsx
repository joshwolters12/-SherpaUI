import React, { Component } from 'react';
import CoordinatesAndScaling from '../components/CoordinatesAndScaling';

class Properties extends Component {
    render() {
        return (
            <div style = {styles.properties}>
                <CoordinatesAndScaling/>
            </div>
        )
    }
}

let styles = {
  properties: {
    height: '100%',
    width:'30%',
    minWidth:'240px',
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-start',
    backgroundColor: '#1e2538'
  }
}

export default Properties;