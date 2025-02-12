import React, { useState } from 'react';
import { View, Text, Button, ActivityIndicator, StyleSheet } from 'react-native';

const Task26 = () => {
  const [ip, setIp] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchIpNonBlocking = async () => {
    fetch('https://api.ipify.org/?format=json')
      .then(response => response.json())
      .then(data => setIp(data.ip))
      .catch(error => console.error('Error fetching IP:', error));
  };

  const fetchIpBlocking = async () => {
    setLoading(true);
    try {
      let response = await fetch('https://api.ipify.org/?format=json');
      let data = await response.json();
      setIp(data.ip);
    } catch (error) {
      console.error('Error fetching IP:', error);
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your IP:</Text>
      <Text style={styles.text}>{ip || "Press a button to fetch\n"}</Text>
      <Button title="Fetch IP (Non-Blocking)" color='pink' onPress={fetchIpNonBlocking} />
      <Button title="Fetch IP (Blocking)"  color='lightpink' onPress={fetchIpBlocking} disabled={loading} />
      {loading && <ActivityIndicator size="large" color="pink" />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color:'deeppink',
    fontSize: 18,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Task26;