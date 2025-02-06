import React, { useState } from "react";
import { View, Button, StyleSheet } from "react-native";
import MyClassComponent_Task19 from "../Components/MyClassComponent_Task19";


const Task19 =()=>  {
const [showPage, setShowPage] = useState(false);

return (
  <View style={styles.container}>
    <Button title="Show" color={"hotpink"} onPress={() => setShowPage(true)} />
    {showPage && <MyClassComponent_Task19></MyClassComponent_Task19>}
  </View>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
},
});
export default Task19