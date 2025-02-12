import React from 'react';
import { View, FlatList, Pressable, Alert, Image, StyleSheet } from 'react-native';

const Task28 = () => {
  // Array of local image sources
  const images = [
    require('../Resource/image1.jpg'),
    require('../Resource/image2.jpg'),
    require('../Resource/image3.jpg'),
    require('../Resource/image4.jpg'),
    require('../Resource/image5.jpg'),
    require('../Resource/image6.jpg'),
    require('../Resource/image7.jpg'),
    require('../Resource/image8.jpg'),
    require('../Resource/image9.jpg'),
    require('../Resource/image10.jpg'),
  ];

  const handlePress = (index) => {
    Alert.alert('index this image: '+ parseInt(index+1));
  };

  const renderItem = ({ item, index }) => {
    return (
      <Pressable onPress={() => handlePress(index)}>
        <Image source={item} style={styles.image} />
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        renderItem={renderItem}
        horizontal
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 300,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
});

export default Task28;

