import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const OnboardingPage = ({ navigation }) => {
  const handleNext = () => {

    navigation.navigate('Login');
  };

  const handleSkip = () => {
    navigation.navigate('Onboarding2');
  };

  return (
    <View style={styles.container}>
    <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
          <Text style={styles.skipButtonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.backgroundBox}>
        <View style={styles.textBox}>
          <Text style={styles.text}>
            With this app you are able to book for car parking online before going to the mall.
          </Text>
          <Text style={styles.text2}>
            3 of 3
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gold',
  },
  backgroundBox: {
    flex: 1,
    backgroundColor: 'gray', 
    alignItems: 'center',
    justifyContent: 'center',
    top: 350,
    borderRadius: 50
  },
  textBox: {
    width: '80%',
    height: 350,
    padding: 20, 
    backgroundColor: 'white', 
    borderRadius: 30,
    alignItems: 'center',
    bottom: 400
  },
  text: {
    fontSize: 20,
    color: 'black',
    padding: 10,
    alignItems: 'left',
    top: 100
  },
  text2: {
    fontSize: 15,
    color: 'gray',
    padding: 10,
    alignItems: 'left',
    top: 150
  },
  skipButton: {
    backgroundColor: 'transparent',
    padding: 10,
  },
  skipButtonText: {
    fontSize: 16,
    color: 'blue',
  },
  nextButton: {
    backgroundColor: 'transparent',
    padding: 10,
  },
  nextButtonText: {
    fontSize: 16,
    color: 'blue',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 70, 
    marginTop: 20,
    top: 120
  },
});

export default OnboardingPage;