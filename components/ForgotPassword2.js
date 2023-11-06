import React from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';

const SplashScreen = ({ navigation }) => {
  const handleSendEmail = () => {
   navigation.navigate('ForgotPassword3');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchableContainer}>
        <View style={styles.boxContainer}>
          <Text style={styles.welcomeText}>Email Sent</Text>
          <Text style={styles.welcomeText2}>We sent an email to your email with a link to reset your password.</Text>
          <TouchableOpacity style={styles.loginButton} onPress={handleSendEmail}>
            <Text style={styles.buttonText2}>Ok</Text>
          </TouchableOpacity>
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
  loginButton: {
    width: 120,
    height: 60,
    backgroundColor: '#EAC4C4',
    padding: 10,
    marginVertical: 20,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 30,
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
  buttonText2: {
    fontSize: '30%',
    color: 'white',
    left: 23,
    fontWeight: 'bold',
    alignItems: 'center',
  },
});

export default SplashScreen;
