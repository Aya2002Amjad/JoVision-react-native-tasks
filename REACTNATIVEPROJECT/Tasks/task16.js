import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Task16 = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={styles.container}>
      {isVisible && <Text style={styles.name}>Aya</Text>}
      <Button 
        title={isVisible ? "Hide" : "Show"} 
        onPress={() => setIsVisible(previousState => !previousState)} 
        color={isVisible? "deeppink":"lightpink"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color:"hotpink"
  },
 
});

export default Task16;
