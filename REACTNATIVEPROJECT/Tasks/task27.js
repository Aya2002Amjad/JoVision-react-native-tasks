import React, { useState } from 'react';
import { View, Image, Button, Alert, StyleSheet } from 'react-native';

const Task27 = () => {

  const images = [
    require('../Resource/image1.jpg'),
    require('../Resource/image2.jpg'),
    require('../Resource/image3.jpg'),
  ];

  const colors=['red','pink','blue'];
  
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [buttonColor, setButtonColor] = useState(colors[0]);
  
  const chooseImage = () => {
    Alert.alert(
      'Choose an Image',
      'Select  1, 2, 3',
      [
        { text: '1', onPress: () => { setSelectedImage(images[0]);  setButtonColor(colors[0])}},
        { text: '2', onPress: () => { setSelectedImage(images[1]);  setButtonColor(colors[1])}},
        { text: '3', onPress: () => { setSelectedImage(images[2]);  setButtonColor(colors[2])}},
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Image source={selectedImage} style={styles.image} />
      <Button title="Choose Image" onPress={chooseImage} color={buttonColor}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
});

export default Task27;