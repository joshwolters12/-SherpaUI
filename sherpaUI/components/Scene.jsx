import React, { Component } from 'react';

class Scene extends Component {
    render() {
        return (
            <div style = {styles.scene}>
            </div>
        )
    }
}

let styles = {
  scene: {
    height: '100%',
    width:'5%',
    minWidth: '50px',
    backgroundColor: '#1e2538'
  }
}

export default Scene;