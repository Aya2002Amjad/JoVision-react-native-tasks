import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const ScreenComponent = ({ screenNumber }) => (
  <View style={styles.container}>
    <Text style={styles.text}>Screen {screenNumber}</Text>
  </View>
);

const Screen1 = () => <ScreenComponent screenNumber={1} />;
const Screen2 = () => <ScreenComponent screenNumber={2} />;
const Screen3 = () => <ScreenComponent screenNumber={3} />;
const Screen4 = () => <ScreenComponent screenNumber={4} />;

export default function App() {
  return (
    <NavigationContainer>
       <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
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
            return <Icon name={iconName} size={size} color={color} />;
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
}

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
       color: '#4dd0e1' 
    },
});