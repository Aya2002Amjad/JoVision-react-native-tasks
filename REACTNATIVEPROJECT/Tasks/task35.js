import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Task35 = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');

  useEffect(() => {
    const loadData = async () => {
      try {
        const storedData = await AsyncStorage.getItem('userData');
        if (storedData) {
          const { name, age, country, timestamp } = JSON.parse(storedData);
          const dataTime = new Date(timestamp);
          const now = new Date();
          const datemin = (now - dataTime) / 1000 / 60;

          if (datemin < 1) {
            setName(name);
            setAge(age);
            setCountry(country);
          }
        }
      } catch (error) {
        Alert.alert('Failed to load previous data.');
      }
    };

    loadData();
  }, []);

  const handleSubmit = async () => {
 
    if(!isNaN(name) && !isNaN(age) && !isNaN(country)){
      Alert.alert('Please Enter all field.');
      return;
    }

    if (typeof name !== 'string' || !isNaN(name)){
      Alert.alert('Valid name , Try again');
      return;
    }

    if (age <= 0 || isNaN(age)) {
      Alert.alert('Valid age , Try again');
      return;
    }

    if(!isNaN(country)){
      Alert.alert('Valid country , Try again');
      return;
    }

    const timestamp = new Date().toISOString();
    const data = { name, age, country, timestamp };

    try {
      await AsyncStorage.setItem('userData', JSON.stringify(data));
      Alert.alert('Data saved successfully!');
    } catch (error) {
      Alert.alert('Failed to save data.');
    }
  };

  return (
    <View style={styles.container}>
       <Text style={styles.title}>Enter Your Details</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
      />
      <TextInput
        style={styles.input}
        placeholder="Country"
        value={country}
        onChangeText={setCountry}
      />
      <Button title="Submit" color='#6a1b9a' onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#6a1b9a',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ce93d8',
    borderWidth: 1,
    marginBottom: 10,
  },
});


export default Task35