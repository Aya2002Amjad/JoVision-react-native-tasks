import React, { useState } from 'react';
import { View, Text, StyleSheet ,TextInput} from 'react-native';

const MyFunctionComponent_Task22 = ({ onTextChange }) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="input new text"
        onChangeText={onTextChange}
      />
    </View>
  );
};

const Task22=()=> {
  const [text, setText] = useState("Hello Page !");

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <MyFunctionComponent_Task22 onTextChange={setText} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
    color:"hotpink"
  },
  input: {
    height: 40,
    borderColor: "pink",
    borderWidth: 1,
    width:"100%"
  },
});


export default Task22