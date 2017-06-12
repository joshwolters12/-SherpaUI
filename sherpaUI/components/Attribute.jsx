import React, { Component } from 'react';
import { TextInput } from 'react-desktop/macOs';

class Attribute extends Component {
    render() {
        return (
            <div style={styles.attributeContainer}>
                Title
                <form style={styles.form}>
                    <label style = {styles.label}>Text</label>
                    <textarea style = {styles.inputLarge} type="text"  wrap="soft"/>
                </form>
                <form style={styles.form}>
                    <label style = {styles.label}>Size</label>
                    <input style = {styles.inputSmall} type="text"  wrap="soft"/>
                </form>
                Paragraph
                <form style={styles.form}>
                    <label style = {styles.label}>Text</label>
                    <textarea style = {styles.inputLarge} type="text"  wrap="soft"/>
                </form>
                <form style={styles.form}>
                    <label style = {styles.label}>Size</label>
                    <input style = {styles.inputSmall} type="text"  wrap="soft"/>
                </form>
                Navigation
            </div>
        )
    }
}

let styles = {
    attributeContainer: {
        width: '95%',
        height: '20%',
        margin: '1px auto',
        fontSize: '14px'
    },
    text: {
        color: 'black',
        alignItems: 'left',
        backgroundColor: 'white'
    },
    form: {
        margin: '10px 0px',
        height: 'auto',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: '2px'
    },
    inputLarge: {
        borderRadius: '3px',
        borderWidth: '0px',
        color: '#bdc2d8',
        backgroundColor: '#181b2a',
        margin: '0px 5px',
        height:'50px'
    },
    label:{
        padding: '3px',
        fontSize: '12px',
        width: 'auto',
        alignSelf: 'center',
        opacity:'0.5'
    },
    inputSmall: {
        borderRadius: '3px',
        borderWidth: '0px',
        width: '25px',
        color: '#bdc2d8',
        backgroundColor: '#181b2a',
        margin: '0px 5px',
        height:'25px'
    }
}

export default Attribute;