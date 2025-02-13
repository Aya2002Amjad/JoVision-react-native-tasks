import React, { useRef, useState } from 'react';
import { View, StyleSheet,Image, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Task33 = () => {

  const videoRef = useRef(null); 
  const [paused, setPaused] = useState(false);

  const togglePlayPause = () => {
    setPaused(!paused); 
  };

  return (
    <View style={styles.container}>
      <Video
        source={require('../Resource/video1.mp4')}
        style={styles.video}
        resizeMode="contain"
        repeat
        ref={videoRef} 
        paused={paused}
        controls={false} 
        poster={Image.resolveAssetSource(require('../Resource/masha.jpg')).uri}
        posterResizeMode="cover"
      />
      <TouchableOpacity onPress={togglePlayPause} style={styles.button}>
       <Icon name={paused ? 'play-circle' : 'pause'} size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: 200,
  },
  button: {
    position: 'absolute',
    left:'45%',
    top:'50%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    padding: 10,
    borderRadius: 5,
    marginBottom: 0,
  },
});

export default Task33;