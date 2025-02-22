import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {setText} from '../Components/store_task39';

const ComponentOne = () => {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.text.value);

  return (
    <View>
      <TextInput
        value={text}
        onChangeText={(newText) => dispatch(setText(newText))}
        placeholder="Enter Your Text"
        style={styles.input}
      />
      <Text style={styles.textDisplay}>{text}</Text>
    </View>
  );
};

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

export default ComponentOne