import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const ScreenComponent = ({ screenNumber }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen {screenNumber}</Text>
      <View style={styles.buttonContainer}>
        {screenNumber !== 1 && (
          <Button
            title="Go to Screen 1"
            onPress={() => navigation.navigate('Screen 1')}
            style={styles.button1} // why didn't apply ?!!
            color={'#80deea'}
          />
        )}
        {screenNumber !== 2 && (
          <Button
            title="Go to Screen 2"
            onPress={() => navigation.navigate('Screen 2')}
            style={styles.button1}
            color='#b2ebf2'
            marginBottom={20}
          />
        )}
        {screenNumber !== 3 && (
          <Button
            title="Go to Screen 3"
            onPress={() => navigation.navigate('Screen 3')}
            style={styles.button1}
            color={'#26c6da'}
          />
        )}
        {screenNumber !== 4 && (
          <Button
          marginTop='20'
            title="Go to Screen 4"
            onPress={() => navigation.navigate('Screen 4')}
            style={styles.button1}
            color={'#4dd0e1'}
          />
        )}
      </View>
    </View>
  );
};

const Screen1 = () => <ScreenComponent screenNumber={1} />;
const Screen2 = () => <ScreenComponent screenNumber={2} />;
const Screen3 = () => <ScreenComponent screenNumber={3} />;
const Screen4 = () => <ScreenComponent screenNumber={4} />;

const Task42 = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ }) => {
            let iconName;
            if (route.name === 'Screen 1') {
              iconName = 'home';
            } else if (route.name === 'Screen 2') {
              iconName = 'search';
            } else if (route.name === 'Screen 3') {
              iconName = 'settings';
            } else if (route.name === 'Screen 4') {
              iconName = 'information-circle';
            }
            return <Icon name={iconName} size={20} color={'#b2ebf2'} />;
          },
        })}
      >
        <Tab.Screen name="Screen 1" component={Screen1} />
        <Tab.Screen name="Screen 2" component={Screen2} />
        <Tab.Screen name="Screen 3" component={Screen3} />
        <Tab.Screen name="Screen 4" component={Screen4} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4dd0e1',
  },
  buttonContainer: {
    marginTop: 20,
    width: '50%',
  },
  button1: {
    marginBottom: 40,
    color: '#b2ebf2'
  },
});

export default Task42;
