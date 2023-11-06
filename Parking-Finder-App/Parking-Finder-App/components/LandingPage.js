import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const SplashScreen = ({ navigation }) => {
  const handleSplashPress = () => {
    navigation.navigate('Onboarding1');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchableContainer} onPress={handleSplashPress}>
        <View style={styles.boxContainer}>
          <Text style={styles.welcomeText}>Welcome</Text>
          <Image source={require('../images/ParkingFinderLogo.png')} style={styles.logo} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gold',
  },
  touchableContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 290, 
    height: 290,
  },
  boxContainer: {
    borderColor: 'white', 
    borderWidth: 5, 
    padding: 20,
    borderRadius: 30,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default SplashScreen;
