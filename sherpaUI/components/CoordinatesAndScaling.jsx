import React, { Component } from 'react';
import Attribute from '../components/Attribute';

class CoordinatesAndScaling extends Component {
    render() {
        return (
            <div style={styles.properties}>
                <Attribute 
                data={this.props.data}
                updateProperties = {this.props.updateProperties}
                />
            </div>
        )
    }
}

let styles = {
    properties: {
        width: '90%',
        height: 'auto',
        margin: '10px auto'
    }
}

export default CoordinatesAndScaling;