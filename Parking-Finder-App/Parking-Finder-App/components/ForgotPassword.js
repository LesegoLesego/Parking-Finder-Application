import React from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';

const SplashScreen = ({ navigation }) => {
  const handleSendEmail = () => {
    navigation.navigate('ForgotPassword2');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchableContainer}>
        <View style={styles.boxContainer}>
          <Text style={styles.welcomeText}>Reset password</Text>
          <Image source={require('../images/Lock.png')}/>
          <TextInput
            style={styles.input}
            placeholder="Email"
          />
          <TextInput
            style={styles.input}
            placeholder="Phone number"
          />
          <TouchableOpacity style={styles.loginButton} onPress={handleSendEmail}>
            <Text style={styles.buttonText2}>Send Email</Text>
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
  input: {
    width: 280,
    height: 60,
    marginVertical: 10,
    padding: 10,
    borderColor: 'white',
    borderWidth: 4,
    borderRadius: 30,
    fontWeight: 'bold',
    backgroundColor: 'black'
  },
  boxContainer: {
    borderColor: 'white', 
    borderWidth: 5,
    padding: 20,
    borderRadius: 30, 
    alignItems: 'center',
    backgroundColor: 'transparent',
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
  buttonText2: {
    fontSize: '15%',
    color: 'white',
    left: 6,
    top: 6,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default SplashScreen;
