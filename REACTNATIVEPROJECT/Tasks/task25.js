import React, { useState, useRef } from 'react';
import { View, TextInput , StyleSheet} from 'react-native';
import MyClassComponent_Task25 from "../Components/MyClassComponent_Task25";

const Task25 = () => {
  const [inputText, setInputText] = useState('');
  const childRef = useRef(null);

  const handleChangeText = (text) => {
    setInputText(text);
    if (childRef.current) {
      childRef.current.updateText(text);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={inputText}
        onChangeText={handleChangeText}
      />
      <MyClassComponent_Task25 ref={childRef} />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: "hotpink",
    borderWidth: 1,
    width:"50%",
    color:"hotpink"
  },
});


export default Task25