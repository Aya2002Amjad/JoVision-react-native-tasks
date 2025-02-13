import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import useCurrentTime from "../Components/useCurrentTime";

const TimeDisplay = () => {
    
  const currentTime = useCurrentTime();

  return (
    <View  marginBottom='20'>
      <Text style={styles.timeText}>{currentTime.toLocaleTimeString()}</Text>
      <Text style={styles.dateText}>{currentTime.toDateString()}</Text>
    </View>
  );
};

const Task34 = () => {

  const [showTime, setShowTime] = useState(true);

  return (
    <View style={styles.container}>
      {showTime && <TimeDisplay />}
      <Button title="Toggle Time"  color='#6a1b9a' onPress={() => setShowTime(!showTime)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#9c27b0'
  },
  dateText: {
    fontSize: 15,
    color: '#ba68c8',
  },
});

export default Task34;