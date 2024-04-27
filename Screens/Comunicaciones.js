import React from 'react';
import { View, Button } from 'react-native';
import { SMS, MailComposer, PhoneNumber } from 'expo';
import { Communications } from 'react-native-communications';
import { Linking } from 'react-native';

export default function CommunicationScreen() {
  const sendSMS = async () => {
    await Linking.openURL("sms:+523511674852?body=Mensaje de texto predefinido")
  };

  const sendEmail = async () => {
    await Linking.openURL("mailto:gus.33.guerrero@gmail.com")
  };

  const makeCall = async () => {
    await Linking.openURL("tel:+523511674852")
  };
  

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="SMS" onPress={sendSMS} />
      <Button title="Email" onPress={sendEmail} />
      <Button title="Llamar" onPress={makeCall} />
    </View>
  );
}