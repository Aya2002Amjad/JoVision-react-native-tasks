import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';

const MyFunctionComponent_Task21 =()=>{
    useEffect(() => {
        console.log("Loaded");
        return () => {
            console.log("Unloaded");
        };
    }, []);

        return (
            <View style={styles.classPage}>
                <Text style={styles.text}>Welcome to MyClassPage</Text>
            </View>
        );
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
export default MyFunctionComponent_Task21