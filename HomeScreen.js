import React from 'react';
import { View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title="Cámara"
        onPress={() => navigation.navigate('Camera')}
      />
      <Button
        title="Comunicaciones"
        onPress={() => navigation.navigate('Communications')}
      />
      <Button
        title="Geolocalización"
        onPress={() => navigation.navigate('Geolocation')}
      />
      <Button
        title="Almacenamiento"
        onPress={() => navigation.navigate('Storage')}
      />
    </View>
  );
};

export default HomeScreen;
