import React from 'react';
import { View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CameraScreen from './Screens/Camara';
import CommunicationsScreen from './Screens/Comunicaciones';
import HomeScreen from './HomeScreen';
import GeolocationScreen from './Screens/Geolocalizacion';
import StorageScreen from './Screens/Localstorage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Aplicación Principal' }}
        />
        <Stack.Screen
          name="Camera"
          component={CameraScreen}
          options={{ title: 'Cámara' }}
        />
        <Stack.Screen
          name="Communications"
          component={CommunicationsScreen}
          options={{ title: 'Comunicaciones' }}
        /> 
        <Stack.Screen
          name="Geolocation"
          component={GeolocationScreen}
          options={{ title: 'Geolocalización' }}
        />
        <Stack.Screen
          name="Storage"
          component={StorageScreen}
          options={{ title: 'Almacenamiento' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
