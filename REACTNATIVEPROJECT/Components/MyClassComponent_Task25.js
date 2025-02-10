import React, { Component } from 'react';
import { View, Text , StyleSheet} from 'react-native';

class MyClassComponent_Task25 extends Component {
  
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  
  updateText = (newText) => {
    this.setState({ text: newText });
  };

  render(){
  return (
    <View>
      <Text style={styles.text}>{this.state.text}</Text>
    </View>
  );
}
}

const styles=StyleSheet.create({
  text: {
    fontSize: 20,
    marginTop: 20,
    color:"deeppink"
  },
});

export default MyClassComponent_Task25;