import React, { Component } from 'react';
import { TextInput } from 'react-desktop/macOs';

class Attribute extends Component {
    render() {
        let currentView = (this.props.data.currView) ? this.props.data.currView : null;
        let currentViewProps = (currentView) ? this.props.data[currentView] : {};
        console.log(currentViewProps)
        return (
            <div style={styles.attributeContainer}>
                Title
                <form style={styles.form}>
                    <label style={styles.label}>Title</label>
                    <textarea style={styles.inputLarge} type="text" wrap="soft" value={currentViewProps.title}/>
                </form>
                {/*<form style={styles.form}>
                    <label style={styles.label}>Size</label>
                    <input style={styles.inputSmall} type="text" wrap="soft" />
                </form>*/}
                Paragraph
                <form style={styles.form}>
                    <label style={styles.label}>Text</label>
                    <textarea style={styles.inputLarge} type="text" wrap="soft" value={currentViewProps.text}/>
                </form>
                {/*<form style={styles.form}>
                    <label style={styles.label}>Size</label>
                    <input style={styles.inputSmall} type="text" wrap="soft" />
                </form>*/}
                Navigation
                <form style={styles.form}>
                    <label style={styles.label}>Left</label>
                    <textarea style={styles.inputMedium} type="text" wrap="soft" value={currentViewProps.navleft}/>
                </form>
                <form style={styles.form}>
                    <label style={styles.label}>Right</label>
                    <textarea style={styles.inputMedium} type="text" wrap="soft" value={currentViewProps.navright}/>
                </form>
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
    label: {
        padding: '3px',
        fontSize: '12px',
        width: '50px',
        alignSelf: 'center',
        opacity: '0.5'
    },
    inputLarge: {
        borderRadius: '3px',
        borderWidth: '0px',
        color: '#bdc2d8',
        backgroundColor: '#181b2a',
        margin: '0px 5px',
        height: '50px',
        display: 'inline-block',
        verticalAlign: 'middle',
        padding:'5px'
    },
    inputMedium: {
        borderRadius: '3px',
        borderWidth: '0px',
        width: '200px',
        color: '#bdc2d8',
        backgroundColor: '#181b2a',
        margin: '0px -3px',
        height: '25px',
        display: 'inline-block',
        verticalAlign: 'middle',
        padding:'5px'
    },
    inputSmall: {
        borderRadius: '3px',
        borderWidth: '0px',
        width: '25px',
        color: '#bdc2d8',
        backgroundColor: '#181b2a',
        margin: '0px -3px',
        height: '25px',
        display: 'inline-block',
        verticalAlign: 'middle',
        padding:'5px'
    }
}

export default Attribute;