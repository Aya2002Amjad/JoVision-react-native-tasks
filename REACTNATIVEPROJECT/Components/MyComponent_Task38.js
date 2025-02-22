import React, { useContext } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import ComponentOne from "../Components/MyClassComponent_task38";
import {TextContext} from './Textcontext_Task38';

const ComponentTwo = () => {
  const { text, setText } = useContext(TextContext);

  return (
    <View style={styles.componentContainer}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText} 
        placeholder="Enter Your Text"
      />
      <ComponentOne />
    </View>
  );
};

const styles = StyleSheet.create({
    componentContainer: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 30,
      },
      input: {
        width: '80%',
        height: 40,
        borderColor: '#80deea',
          color: '#0097a7',
        borderWidth: 1,
        marginBottom: 10,
        borderRadius: 5,
      },
});

export default ComponentTwo