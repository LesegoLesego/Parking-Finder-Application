import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db, auth } from '../config/firebase';
import { signOut } from "@firebase/auth";
const ProfilePage = ({ navigation }) => {
   const [userData, setUserData] = useState({});
   const user = auth.currentUser;
   useEffect(() => {
     if (user) {
       const unsubscribe = onSnapshot(
         doc(db, "users", user.uid),
         (document) => {
           if (document.exists()) {
             setUserData(document.data());
           }
         }
       );

       return () => unsubscribe();
     }
   }, []);
   function logout() {
     console.log("logout");
     auth
       .signOut()
       .then(() => {
         // Sign-out successful.
         console.log("logout successful");
         navigation.navigate("Login");
       })
       .catch((error) => {
         // An error happened.
         console.log("logout error");
       });
   }

  const handleDeleteAccount = () => {
    };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileInfo}>
          <View style={styles.profileTop}>
            <Image source={require('../images/Group.png')} style={styles.profileImage} />
          </View>
        <Text style={styles.profileName}>{userData.username}</Text>
        <Text style={styles.profileDetails}>Phone: 065 534 3638</Text>
        <Text style={styles.profileDetails}>Email: {userData.email}</Text>
          <TouchableOpacity style={styles.editProfileButton}>
            <Text style={styles.editProfileText}>Edit Profile</Text>
          </TouchableOpacity>
      </View>

      <View style={styles.addressSection}>
        <Text style={styles.sectionTitle}>Saved Addresses</Text>
        <Text style={styles.addressLabel1}>Add home address</Text>
            <Image source={require('../images/house.png')} style={styles.addressIcon1} />
        <Text style={styles.addressLabel2}>Favourite mall</Text>
            <Image source={require('../images/building.png')} style={styles.addressIcon1} />
        <Text style={styles.addressLabel3}>Add another address</Text>
            <Image source={require('../images/plus.png')} style={styles.addressIcon1} />
      </View>

      <View style={styles.optionsSection}>
        <TouchableOpacity style={styles.optionButton} onPress={logout}>
          <Text style={styles.optionButtonText}>Logout</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton} onPress={handleDeleteAccount}>
          <Text style={styles.optionButtonText}>Delete Account</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#D2CFC4'
  },
  profileTop: {
    marginTop: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  profileInfo: {
    alignItems: 'center',
    backgroundColor: 'white',
    height: 290,
    width: 390,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    bottom: 20
  },
  editProfileButton: {
    borderRadius: 15,
    borderWidth: 3,
    top: 10,
    padding: 5,
  },
  editProfileText: {
    color: 'orange',
    fontSize: 15,
    fontWeight: 'bold'
  },
  addressIcon1: {
    left: 30
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileDetails: {
    fontSize: 16,
    marginTop: 10,
  },
  addressSection: {
    marginTop: 20,
    backgroundColor: 'white',
    bottom: 35,
    width: 390,
    height: 270,
    borderRadius: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    left: 60,
    top: 20,
  },
  addressLabel1: {
    fontSize: 18,
    marginTop: 10,
    left: 80,
    top: 20,
    paddingTop: 15
  },
  addressLabel2: {
    fontSize: 18,
    marginTop: 10,
    left: 80,
    top: 20,
    paddingTop: 0
  },
  addressLabel3: {
    fontSize: 18,
    marginTop: 10,
    left: 80,
    top: 20,
    paddingTop: 0
  },
  optionsSection: {
    marginTop: 20,
    backgroundColor: 'white',
    bottom: 50,
    height: 200,
    width: 390,
  },
  optionButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    top: 20,
    width: 300,
    left: 48
  },
  optionButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default ProfilePage;
