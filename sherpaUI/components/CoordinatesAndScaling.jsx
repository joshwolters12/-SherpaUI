import React, { Component } from 'react';
import Attribute from '../components/Attribute';

class CoordinatesAndScaling extends Component {
    render() {
        return (
            <div style={styles.properties}>
                <Attribute/>
            </div>
        )
    }
}

let styles = {
    properties: {
        width: '90%',
        height: '20%',
        margin: '10px auto'
    }
}

export default CoordinatesAndScaling;