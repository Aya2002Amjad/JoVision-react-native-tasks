import React, {useState} from 'react';
import { View, Button ,StyleSheet} from 'react-native';
import MyFunctionComponent_Task21 from "../Components/MyFunctionComponent_Task21";


const Task21=() => {
    const [showPage, setShowPage] = useState(false);
      return (
          <View style={styles.container}>
              <Button color={"hotpink"} title={showPage? "Hide" : "Show"} 
              onPress={() => setShowPage(previousState => !previousState)} 
              />
              {showPage && <MyFunctionComponent_Task21></MyFunctionComponent_Task21>}
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

  export default Task21