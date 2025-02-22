import React, { useState} from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import store from '../Components/store_task39';
import ComponentOne from '../Components/ClassComponent_task40';

const Task40 = () =>  {

    const [isVisible, setIsVisible] = useState(true);

    return (
        <Provider store={store}>
          <View style={styles.container}>
            <Button  color='#80cbc4' title={isVisible ? 'Hide Component' : 'Show Component'} onPress={() => setIsVisible(!isVisible)} />
            {isVisible && <ComponentOne />}
          </View>
        </Provider>
      );
    };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default Task40;
