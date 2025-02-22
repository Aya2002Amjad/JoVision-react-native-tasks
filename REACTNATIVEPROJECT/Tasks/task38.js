import React from 'react';
import { View, StyleSheet } from 'react-native';
import ComponentTwo from "../Components/MyComponent_Task38";
import {TextContextProvid} from '../Components/Textcontext_Task38';

const Task38 = () => {
  return (
    <TextContextProvid>
      <View style={styles.container}>
        <ComponentTwo />
        <ComponentTwo />
        <ComponentTwo />
        <ComponentTwo />
      </View>
      </TextContextProvid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default Task38;