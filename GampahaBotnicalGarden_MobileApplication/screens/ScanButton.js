import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import bgImage from '../assets/images/bg3.png';

const ScanButton = () => {
  const navigation = useNavigation();

  const handleScanPress = () => {
    navigation.navigate('ScanQR'); // Navigate to the 'ScanQR' screen
  };

  return (
    <ImageBackground source={bgImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={handleScanPress}>
          <Text style={styles.buttonText}>Scan QR Code</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,

    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 200,
    borderWidth: 1,
    borderColor: "#fff",
    backgroundColor: "rgba(235, 235, 235, 0.01)",
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default ScanButton;
