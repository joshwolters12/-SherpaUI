import React, { Component } from 'react';
import { SegmentedControl, SegmentedControlItem, Text } from 'react-desktop/macOs';
import Gui from '../components/Gui';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
        imageURL: "chess-world.jpg",
        currView: "front",
        front: {
          title: "Hello World",
          text: "This is the starting text for the front view",
          navleft: "Left",
          navright: "Right"
        },
        back: {
          title: "Looking Back",
          text: "Heyooooo",
          navleft: "Right",
          navright: "Left"
        },
        left: {
          title: "Looking Left",
          text: "Watcha gonna do about it",
          navleft: "Back",
          navright: "Front"
        },
        right: {
          title: "Looking Right",
          text: "Teaaaaam Misfits!",
          navleft: "Front",
          navright: "Back"
        }
      }
      this.selectPage = this.selectPage.bind(this)
    }

    selectPage(page) {
        this.setState({currView: page});
    }

    render() {
      return (
        <div id='appcontainer' style={styles.appcontainer}>
          <div id="headspacer" style={styles.header}></div>
          <Gui 
            data={this.state}
            selectPage={this.selectPage}></Gui>
          <div id="footer" style={styles.footer}></div>
        </div>
      );
    }
  }

let styles = {
  appcontainer: {
    backgroundColor: '#1e2538',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  header: {
    height: "2%",
    minHeight: '15px',
    flex: '[1 0 5%]',
  },
  footer: {
    height: '8%',
    minHeight: '50px',
    flex: '[1 0 10%]',
  }
}