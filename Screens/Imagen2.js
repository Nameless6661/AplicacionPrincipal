import React from 'react';
import { View, Image } from 'react-native';const App = () => {
  return (
    <View>
      <Image
        source={require('./assets/image.jpg')}
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
};