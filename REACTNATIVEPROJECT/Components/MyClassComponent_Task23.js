import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

class MyClassComponent_Task23 extends Component {
    render() {
      return (
        <View>
          <TextInput
            style={styles.input}
            placeholder="input new text"
            onChangeText={this.props.onTextChange}
          />
        </View>
      );
    }
  }

  const styles =StyleSheet.create({
    input: {
        height: 40,
        borderColor: "pink",
        borderWidth: 1,
        width:"100%"
      },
  });

  export default MyClassComponent_Task23