import React, { Component } from 'react';

class Canvas extends Component {
    render() {
        return (
            <div style = {styles.canvas}>
                <iframe style={styles.iframe} src="http://localhost:8081/vr/"></iframe>
            </div>
        )
    }
}

let styles = {
    canvas:{
        backgroundColor: 'grey',
        width: '50%',
        height: '100%',
        minWidth: '300px'
    },
    iframe:{
        width: '100%',
        height: '100%',
        borderWidth: '0px'
    }
}

export default Canvas;