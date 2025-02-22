import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import {TextContext} from './Textcontext_Task38';

class ComponentOne extends Component {
  static contextType = TextContext;
  render() {
    return (
       <Text style={styles.textDisplay}>{this.context.text}</Text>
    );
  }
}

const styles = StyleSheet.create({
    textDisplay: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#00838f',
      },
});

export default ComponentOne;