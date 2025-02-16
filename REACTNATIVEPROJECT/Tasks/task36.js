import React from 'react';
import { StyleSheet, Text, ScrollView, StatusBar } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

function generateRandomWord(length) {
  let result = '';
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

const Task36 = () => {

  const text = [];
  for (let i = 0; i < 100; i++) {
    const random = generateRandomWord(i); 
    text.push(<Text style={styles.text}>{random}</Text>); 
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['top']}>
        <ScrollView style={styles.scrollView}>
          {text} 
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight, 
  },
  scrollView: {
    backgroundColor: '#e0f7fa', 
  },
  text: {
    fontSize: 42,
    padding: 12, 
    color:'#00838f'
  },
});

export default Task36
