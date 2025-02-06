import React, {useState} from 'react';
import { View, Button ,StyleSheet} from 'react-native';
import MyClassComponent_Task20 from "../Components/MyClassComponent_Task20";


const Task20=() => {
    const [showPage, setShowPage] = useState(false);
      return (
          <View style={styles.container}>
              <Button color={"hotpink"} title={showPage? "Hide" : "Show"} 
              onPress={() => setShowPage(previousState => !previousState)} 
              />
              {showPage && <MyClassComponent_Task20></MyClassComponent_Task20>}
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

  export default Task20