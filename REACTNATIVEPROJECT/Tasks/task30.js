import React, { useRef, useState } from 'react';
import { View, FlatList, Pressable, Alert, Image, StyleSheet, Button, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


const Task30 = () => {

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
  const [imageList, setImages] = useState(images); 

  const handlePress = (index) => {
    Alert.alert('Image Index: '+ parseInt(index + 1));
  };

  const handleScrollToIndex = () => {
    const userIndex = parseInt(indexInput, 10)-1;

    if (isNaN(userIndex) || userIndex < 0 || userIndex >= imageList.length) {
      Alert.alert('Invalid Index , Try again number (1 '+imageList.length+')');
      return;
    }

    flatListRef.current?.scrollToIndex({ index: userIndex, animated: true });

    setShowInput(false);
    setIndexInput('');
  };

  const handleRemoveImage = (index) => {
    Alert.alert(
      "Remove Image",
      "Sure ?!!",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Remove",
          onPress: () => {
            setImages(imageList.filter((item, i) => i !== index));
          },
        },
      ]
    );
  };

  const handleAddImage = (index) =>{
    //setImages((prevList) => [...prevList, imageList[index]]); //  this add image to end list 
    const newImageList = [...imageList];
    newImageList.splice(index + 1, 0, imageList[index]); 
    setImages(newImageList); 
  };

  return (
    <View style={styles.container}>
      <Button title="Choose Image" color='deeppink' onPress={() => setShowInput(true) } />

      {showInput && (
        <View style={styles.inputContainer} >
          <TextInput
            style={styles.input}
            placeholder={'Enter index (1-'+imageList.length+')'}
            keyboardType="numeric"
            value={indexInput}
            onChangeText={setIndexInput}
          />
          <Button title="Submit" color='deeppink' onPress={handleScrollToIndex} />
        </View>
      )}

      <FlatList
        ref={flatListRef}
        data={imageList}
        renderItem={({ item, index }) => (
            <View style={styles.imageContainer}>
             <Pressable onPress={() => handlePress(index)}>
                <Image source={item} style={styles.image} />
            </Pressable>
            <Pressable style={styles.iconremove} onPress={() => handleRemoveImage(index)}>
                    <Icon  name="remove-circle" size={20} color="deeppink" />
            </Pressable>
            <Pressable style={styles.iconadd} onPress={() => handleAddImage(index)}>
                    <Icon  name="add-circle" size={20} color="deeppink" />
            </Pressable>
            </View>
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
  iconremove: {
    position: 'absolute',
    top: 5,
    right: 0,
    borderRadius:20,
    backgroundColor: 'white',
    padding:2,
  },
  imageContainer: {
    position: 'relative',
    marginRight: 10,
  },
  iconadd:{
    position: 'absolute',
    top: 5,
    left: 0,
    borderRadius:20,
    backgroundColor: 'white',
    padding:2,
  },
});


export default Task30;
  