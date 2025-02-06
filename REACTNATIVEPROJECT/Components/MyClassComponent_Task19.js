import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MyClassComponent_Task19 = ()=> {
      return(
      <View style={styles.classPage}>
        <Text style={styles.text}>Welcome to MyClassComponent_Task19 </Text>
      </View>
      )
  
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