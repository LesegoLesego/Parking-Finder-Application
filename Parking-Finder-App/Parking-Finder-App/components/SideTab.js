import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import MapView from 'react-native-maps';
import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db, auth } from "../config/firebase";
const HomePage = ({ navigation }) => {
  const [userData, setUserData] = useState({});
  const user = auth.currentUser;
  useEffect(() => {
    if (user) {
      const unsubscribe = onSnapshot(doc(db, "users", user.uid), (document) => {
        if (document.exists()) {
          setUserData(document.data());
        }
      });

      return () => unsubscribe();
    }
  }, []);
  const handleProfile = () => {
    navigation.navigate('ProfilePage');
  };
  const handleFavouriteMalls = () => {
    navigation.navigate('FavouriteMall');
  };
  const handleRegisteredMalls = () => {
    navigation.navigate('RegisteredMalls');
  };
  const handlePaymentPage = () => {
    navigation.navigate('PaymentPage');
  };
  const handleMallsVisited= () => {
    navigation.navigate('MallsVisited');
  };
  const handleAboutPage= () => {
    navigation.navigate('AboutPage');
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} />

      <View style={styles.sideTab}>
        <View style={styles.inSideTab1}>
          <TouchableOpacity onPress={handleProfile}>
            <Text style={styles.profileText}>{userData.username}</Text>
            <Text style={styles.viewProfileText}>View Profile</Text>
          </TouchableOpacity>
          <Image
            source={require("../images/Group.png")}
            style={styles.sideIcon1}
          />
        </View>

        <View style={styles.inSideTab2}>
          <TouchableOpacity onPress={handleMallsVisited}>
            <Text style={styles.profileText2}>Malls Visited</Text>
          </TouchableOpacity>
          <Image
            source={require("../images/building.png")}
            style={styles.sideIcon2}
          />
          <TouchableOpacity>
            <Text style={styles.profileText2}>Parking booking</Text>
          </TouchableOpacity>
          <Image
            source={require("../images/car.png")}
            style={styles.sideIcon2}
          />
          <TouchableOpacity onPress={handlePaymentPage}>
            <Text style={styles.profileText2}>Payment</Text>
          </TouchableOpacity>
          <Image
            source={require("../images/wallet.png")}
            style={styles.sideIcon2}
          />
          <TouchableOpacity onPress={handleFavouriteMalls}>
            <Text style={styles.profileText2}>Favourite mall</Text>
          </TouchableOpacity>
          <Image
            source={require("../images/Vector.png")}
            style={styles.sideIcon2}
          />
          <TouchableOpacity>
            <Text style={styles.profileText2}>Promotions</Text>
          </TouchableOpacity>
          <Image
            source={require("../images/tag.png")}
            style={styles.sideIcon2}
          />
          <TouchableOpacity onPress={handleRegisteredMalls}>
            <Text style={styles.profileText2}>Registed mall</Text>
          </TouchableOpacity>
          <Image
            source={require("../images/briefcase.png")}
            style={styles.sideIcon2}
          />
          <TouchableOpacity onPress={handleAboutPage}>
            <Text style={styles.profileText2}>About</Text>
          </TouchableOpacity>
          <Image
            source={require("../images/messageQuestion.png")}
            style={styles.sideIcon2}
          />
        </View>

        <View style={styles.inSideTab3}>
          <TouchableOpacity>
            <Text style={styles.profileText4}>Support</Text>
          </TouchableOpacity>
          <Image
            source={require("../images/support2.png")}
            style={styles.sideIcon3}
          />

          <TouchableOpacity>
            <Text style={styles.profileText3}>Register mall</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  sideTab: {
    flex: 1,
    position: 'absolute',
    backgroundColor: 'gray',
    width: 260,
    height: 755
  },
  inSideTab1: {
    backgroundColor: 'white',
    height: 120,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15
  },
  inSideTab2: {
    backgroundColor: 'white',
    height: 490,
    borderRadius: 15,
    top: 3,
  },
  inSideTab3: {
    backgroundColor: 'white',
    height: 160,
    borderRadius: 15,
    top: 6,
  },
  profileText: {
    fontSize: 15,
    fontWeight: 'bold',
    left: 80,
    top: 33,
  },
  profileText2: {
    fontSize: 18,
    fontWeight: 'bold',
    left: 80,
    top: 38,
  },
  profileText4: {
    fontSize: 18,
    fontWeight: 'bold',
    left: 80,
    top: 15,
  },
  profileText3: {
    fontSize: 18,
    fontWeight: 'bold',
    left: 80,
    bottom: 7,
    padding: 10,
    borderRadius: 30,
    width: 145,
    borderWidth: 5,
    borderColor: 'purple',
  },
  viewProfileText: {
    color: 'purple',
    left: 80,
    fontSize: 12,
    top: 38,
  },
  sideIcon1: {
    left: 18,
    height: 50,
    width: 50
  },
  sideIcon2: {
    left: 18,
    height: 45,
    width: 45
  },
  sideIcon3: {
    left: 18,
    height: 42,
    width: 38,
    bottom: 10
  }
});

export default HomePage;
