import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { View, Text , StyleSheet} from 'react-native';

const MyFunctionComponent_Task24 = forwardRef((props, ref) => {
  const [text, setText] = useState('');

  useImperativeHandle(ref, () => ({
    updateText: (newText) => setText(newText),
  }));

  return (
    <View>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
});

const styles=StyleSheet.create({
  text: {
    fontSize: 20,
    marginTop: 20,
    color:"deeppink"
  },
});

export default MyFunctionComponent_Task24;