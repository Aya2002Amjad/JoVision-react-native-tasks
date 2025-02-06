import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

const Text18 = () => {
  const [Isloading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      {Isloading ? (
        <View>
          <ActivityIndicator size="large" color="pink" />
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      ) : (
        <Text style={styles.nameText} >Aya</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 18,
    color: "hotpink",
  },
  nameText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "deeppink",
  },
});

export default Text18;
