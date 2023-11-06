import React from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';

const SplashScreen = ({ navigation }) => {
  const handleHomePage = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchableContainer} onPress={handleHomePage}>
        <View style={styles.boxContainer}>
          <Text style={styles.welcomeText}>Thanks</Text>
          <Text style={styles.welcomeText2}>Thanks booking for parking at Mall of Africa your parking number is #52.</Text>
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
  welcomeText2: {
    paddingTop: 5,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default SplashScreen;
