import React, { useState } from 'react';
import { View, Text, TextInput,Image , StyleSheet, TouchableOpacity } from 'react-native';
import { auth } from '../config/firebase';
import { signInWithEmailAndPassword } from "@firebase/auth";
const LoginPage = ( {navigation} ) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("");
  const [showrError, setShowError] = useState(false);
  const handleLogin = () => {
     if (username && password) {
       signInWithEmailAndPassword(auth, username, password)
         .then((userCredential) => {
           // Signed in
           const user = userCredential.user;
           console.log(user);
           navigation.navigate("Home");
           setUsername("");
           setPassword("");
          

           // ...
         })
         .catch((error) => {
           const errorCode = error.code;
           const errorMessage = error.message;
           console.log(errorMessage);
           console.log(errorCode);
           setError("Email or password is incorrect");
           setShowError(true);
           setUsername("");
           setPassword("");
         });
     } else {
       setShowError(true);
       setError("Please fill all the fields");
     }
     setUsername("");
     setPassword("");
    
  };

  const handleFPword = () => {
    navigation.navigate('ForgotPassword');
  };

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };


  return (
    <View style={styles.container}>
      <View style={styles.backgroundBox}>
        <View style={styles.textBox}>
          <Text style={styles.title}>Log-in</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          {showrError && (
            <Text
              style={{
                textAlign: "center",
                color: "red",
                fontSize: 12,
                borderWidth: 1,
                borderColor: "red",
                padding: 10,
                borderRadius: 5,
                marginBottom: 10,
              }}
            >
              {error}
            </Text>
          )}
          <TouchableOpacity
            style={styles.forgotPasswordButton}
            onPress={handleFPword}
          >
            <Text style={styles.buttonText}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.buttonText2}>Log-in</Text>
          </TouchableOpacity>
          <View style={styles.socialButtons}>
            <TouchableOpacity style={styles.socialButton}>
              <Image source={require("../images/Apple.png")} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Image source={require("../images/Facebook.png")} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Image source={require("../images/Google.png")} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
            <Text style={styles.newUser}>New user? Sign-Up</Text>
          </TouchableOpacity>
          <Text style={styles.or}>-------- or ---------</Text>
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
    top: 135,
    borderRadius: 50
  },
  textBox: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 80
  },
  newUser: {
    padding: 10,
    marginVertical: 20,
    color: '#0047FF',
    fontSize: 16,
    alignItems: 'center',
    bottom: 180
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
  forgotPasswordButton: {
    marginVertical: 10,
    color: 'white',
    bottom: 135,
    right: 60
  },
  buttonText: {
    fontSize: 16,
    color: '#0047FF',
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
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  socialButton: {
    padding: 10,
    borderRadius: 15,
  },
  or: {
    color: 'white',
    textAlign: 'center',
    padding: 10,
    marginVertical: 20,
    bottom: 220
  },
  
});

export default LoginPage;
