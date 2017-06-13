import React, { Component } from 'react';
import CoordinatesAndScaling from '../components/CoordinatesAndScaling';

class Properties extends Component {
    constructor() {
        super()
        this.state = {
            backgroundColor: '#bdc2d8',
            color: '#1e2538'
        }
    }
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
            },
            button: {
                width: '80px',
                height: '30px',
                color: this.state.color,
                backgroundColor: this.state.backgroundColor,
                borderColorBottom: 'black',
                borderColorRight: 'black',
                borderRadius: '3px',
                margin: '0px auto'
            }
        }
        return (
            <div style={styles.properties}>
                <CoordinatesAndScaling data={this.props.data} />
                <button style={styles.button}
                    onMouseEnter={() => this.setState({ backgroundColor: '#1e2538', color: '#bdc2d8' })}
                    onMouseLeave={() => this.setState({ backgroundColor: '#bdc2d8', color: '#1e2538' })}
                    onClick={() => this.props.selectPage(this.props.page)}
                >Update</button>
            </div>
        )
    }
}

export default Properties;