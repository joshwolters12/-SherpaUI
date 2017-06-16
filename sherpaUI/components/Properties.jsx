import React, { Component } from 'react';
import CoordinatesAndScaling from '../components/CoordinatesAndScaling';

class Properties extends Component {
    render() {
        let styles = {
            properties: {
                height: 'auto',
                width: '25%',
                minWidth: '240px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                margin: '0.5%'
            }

        }
        return (
            <div style={styles.properties}>
                <CoordinatesAndScaling
                    data={this.props.data}
                    updateProperties={this.props.updateProperties}
                    writeToFile = {this.props.writeToFile}
                />
            </div>
        )
    }
}

export default Properties;