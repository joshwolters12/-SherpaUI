import React, { Component } from 'react';

class Page extends Component {
    constructor() {
        super()
        this.state = {
            opacity: '0.5'
        }
    }

    render() {
        let styles = {
            page: {
                height: '22%',
                width: '85%',
                backgroundColor: '#1e2538',
                margin: 'auto',
                borderRadius: '2px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#bdc2d8',
                fontSize: '16px',
                opacity: this.state.opacity,
                cursor: 'hand'
            }
        }

        return (
            <div style={styles.page}
            onMouseEnter={()=>this.setState({opacity: '0.75'})}
            onMouseLeave={()=>this.setState({opacity: '0.5'})}
            >
                Update View
            </div>
        )
    }

}



export default Page;