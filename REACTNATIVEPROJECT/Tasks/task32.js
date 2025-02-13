import React from 'react';
import { View, StyleSheet ,Image} from 'react-native';
import Video from 'react-native-video';

const Task32 = () => {
  return (
    <View style={styles.container}>
      <Video
        source={require('../Resource/video1.mp4')} 
        style={styles.video}
        controls
        resizeMode="contain"
        repeat
        poster={Image.resolveAssetSource(require('../Resource/masha.jpg')).uri}
        posterResizeMode="cover"
      />
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
});

export default Task32;
