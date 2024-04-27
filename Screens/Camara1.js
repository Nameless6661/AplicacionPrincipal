import React, { useState, useRef } from 'react'; 
import { View, Button, StyleSheet } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { ViewPropTypes } from 'deprecated-react-native-prop-types';const App = () => {
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const cameraRef = useRef(null);   const takePicture = async () => {
    if (cameraRef.current) { 
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options); 
      console.log(data.uri);
    }
  };  return (
    <View style={styles.container}>
      {isCameraOpen ? (
        <RNCamera
          ref={cameraRef} 
          style={{ flex: 1 }}
          captureAudio={false}
        />
      ) : (
        <Button title="Abrir cámara" onPress={() => setIsCameraOpen(true)} />
      )}
    </View>
  );
};export default App;const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});