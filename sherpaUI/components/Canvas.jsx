import React, { Component } from 'react';

class Canvas extends Component {

    render() {
        console.log('rerendering canvas')
        return (
            <div style={styles.canvas}>
                <iframe
                    style={styles.iframe}
                    src={this.props.loadURL}
                    ref={(f) => this.ifr = f} />
            </div>
        )
    }
}

let styles = {
    canvas: {
        backgroundColor: 'grey',
        width: '50%',
        height: '100%',
        minWidth: '300px'
    },
    iframe: {
        width: '100%',
        height: '100%',
        borderWidth: '0px'
    }
}

export default Canvas;