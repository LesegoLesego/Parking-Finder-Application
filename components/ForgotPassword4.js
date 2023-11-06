import React from 'react';
import { View, Text, TextInput,Image , StyleSheet, TouchableOpacity } from 'react-native';

const LoginPage = ( {navigation} ) => {
  const handleLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.backgroundBox}>
        <View style={styles.textBox}>
          <Text style={styles.title}>Reset password</Text>
          <TextInput
            style={styles.input}
            placeholder="New Password"
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.buttonText2}>Reset</Text>
          </TouchableOpacity>
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
    top: 250,
    borderRadius: 50
  },
  textBox: {
    alignItems: 'center',
    justifyContent: 'center',

  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    bottom: 150
  },
  input: {
    width: 280,
    height: 60,
    marginVertical: 10,
    padding: 10,
    borderColor: 'white',
    borderWidth: 3,
    bottom: 130,
    borderRadius: 30
  },
  buttonText2: {
    fontSize: 24,
    color: 'black',
    left: 3,
    fontWeight: 'bold',
  },
  loginButton: {
    width: 100,
    height: 60,
    backgroundColor: '#B6B6B6',
    padding: 10,
    marginVertical: 20,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 30,
    bottom: 140
  }
});

export default LoginPage;
