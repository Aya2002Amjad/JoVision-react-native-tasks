import React, { useRef, useState } from 'react';
import { View, FlatList, Pressable, Alert, Image, StyleSheet, Button, TextInput } from 'react-native';

const Task29 = () => {

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


  const flatListRef = useRef(null); 
  const [indexInput, setIndexInput] = useState(''); 
  const [showInput, setShowInput] = useState(false); 

  const handlePress = (index) => {
    Alert.alert('Image Index: '+ parseInt(index + 1));
  };

  const handleScrollToIndex = () => {
    const userIndex = parseInt(indexInput, 10)-1;

    if (isNaN(userIndex) || userIndex < 0 || userIndex >= images.length) {
      Alert.alert('Invalid Index , Try again number (1-10)');
      return;
    }

    flatListRef.current?.scrollToIndex({ index: userIndex, animated: true });

    setShowInput(false);
    setIndexInput('');
  };

  return (
    <View style={styles.container}>
      <Button title="Choose Image" color='deeppink' onPress={() => setShowInput(true) } />

      {showInput && (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter index (1-10)"
            keyboardType="numeric"
            value={indexInput}
            onChangeText={setIndexInput}
          />
          <Button title="Submit" color='deeppink' onPress={handleScrollToIndex} />
        </View>
      )}

      <FlatList
        ref={flatListRef}
        data={images}
        renderItem={({ item, index }) => (
          <Pressable onPress={() => handlePress(index)}>
            <Image source={item} style={styles.image} />
          </Pressable>
        )}
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
    marginTop: 200,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  input: {
    width: 150,
    height: 40,
    borderWidth: 1,
    borderColor:'pink',
    marginRight: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginTop:20,
  },
});

export default Task29;