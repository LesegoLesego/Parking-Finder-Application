import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { auth,db } from '../config/firebase';
import { addDoc, collection, doc, setDoc } from "@firebase/firestore";
import { createUserWithEmailAndPassword } from "@firebase/auth";
const LoginPage = ( {navigation} ) => {
  const [name, setName]  = useState("")
  const [email, setEmail]  = useState("")
  const [password, setPassword]  = useState("")
  const [confirmPassword, setConfirmPassword]  = useState("")
  const [error, setError] = useState("")

  const handleLogin = () => {
    if (email && name && password && confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;

          // Saving user data in Firestore
          setDoc(doc(db, "users", user.uid), {
            email: email,
            username: name,
            typeOfuser: "user",
            // Avoid saving the password in Firestore
          }).then(() => {
            // Navigate after successfully adding to Firestore

            navigation.navigate("Login");
            setEmail("");
            setName("");
            setPassword("");
            setConfirmPassword("");
          });
        })

        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          console.log(errorCode);
        });
    } else {
      
      setError("Please fill all the fields");
    }
    
  };

  return (
    <View style={styles.container}>
      <View style={styles.backgroundBox}>
        <View style={styles.textBox}>
          <Text style={styles.title}>SignUp</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry={true}
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
          />
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.buttonText2}>Sign-up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.forgotPasswordButton} onPress={handleLogin}>
            <Text style={styles.buttonText}>Already have an account? Login</Text>
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
    top: 135,
    borderRadius: 50
  },
  textBox: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 65
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
  },
  buttonText: {
    fontSize: 16,
    color: '#0047FF',
  },
  buttonText2: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
    left: 5
  },
  loginButton: {
    width: 120,
    height: 60,
    backgroundColor: '#B6B6B6',
    padding: 10,
    marginVertical: 20,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 30,
    bottom: 140
  },
  
});

export default LoginPage;
