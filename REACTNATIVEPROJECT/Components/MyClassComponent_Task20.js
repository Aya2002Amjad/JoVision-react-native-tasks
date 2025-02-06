import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';

class MyClassComponent_Task19 extends Component {

    componentDidMount() {
        console.log("Loaded");
    }

    componentWillUnmount() {
        console.log("Unloaded");
    }

    render() {
        return (
            <View style={styles.classPage}>
                <Text style={styles.text}>Welcome to MyClassPage</Text>
            </View>
        );
    }
}
const styles= StyleSheet.create({
    text: {
        fontSize: 18,
        fontWeight: "bold",
        color: "deeppink",
      },
      classPage: {
        marginTop: 20,
        padding: 20,
        borderRadius: 10,
        elevation: 2,

      },
      
}); 
export default MyClassComponent_Task19