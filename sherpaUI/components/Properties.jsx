import React, { Component } from 'react';
import CoordinatesAndScaling from '../components/CoordinatesAndScaling';

class Properties extends Component {
    render() {
        let styles = {
            properties: {
                height: '100%',
                width: '30%',
                minWidth: '240px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                backgroundColor: '#1e2538'
            }
            
        }
        return (
            <div style={styles.properties}>
                <CoordinatesAndScaling 
                data={this.props.data}
                updateProperties = {this.props.updateProperties}
                 />
            </div>
        )
    }
}

export default Properties;