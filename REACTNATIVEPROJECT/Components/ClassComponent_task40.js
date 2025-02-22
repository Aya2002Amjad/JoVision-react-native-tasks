import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import store, { setText } from '../Components/store_task39';

class ComponentOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: store.getState().text.value,
    };
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({ text: store.getState().text.value });
    });
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  handleTextChange = (newText) => {
    this.setState({ text: newText });
    store.dispatch(setText(newText)); 
  };

  render() {
    return (
      <View>
        <TextInput
          value={this.state.text}
          onChangeText={this.handleTextChange}
          placeholder="Enter Your Text"
          style={styles.input}
        />
        <Text style={styles.textDisplay}>{this.state.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
    borderColor: '#b2dfdb',
    color: '#26a69a',
  },
  textDisplay: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#009688',
    marginTop: 10,
  },
});

export default ComponentOne;
