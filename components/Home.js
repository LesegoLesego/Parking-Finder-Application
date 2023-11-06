import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import MapView from 'react-native-maps';

const HomePage = ({ navigation }) => {
  const handleSideTab = () => {
    navigation.navigate('SideTab');
  };
  const handleSearch = () => {
    navigation.navigate('SearchMall');
  };
  return (
    <View style={styles.container}>
      <MapView style={styles.map}/>
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          
          <TouchableOpacity style={styles.loginButton} onPress={handleSearch}>
            <Text style={styles.buttonText}>Search for mall...</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.myWords}>
        <View style={styles.first1}>
          <Text style={styles.prevSearch}>Mall Of Africa</Text>
          <Text style={styles.prevAdresss}>Magwa Cres, Midrand, 2066</Text>
        </View>
          <Image source={require('../images/Line.png')} style={styles.line1} />
        <View style={styles.first1}>
          <Text style={styles.prevSearch2}>Eastgate Shopping Centre</Text>
          <Text style={styles.prevAdresss2}>43 Bradford Rd, Bedfordview, 2008</Text>
        </View>
          <Image source={require('../images/Line.png')} style={styles.line2} />
        <Text style={styles.prevSearch3}>Westgate Shopping Centre</Text>
        <Text style={styles.prevAdresss3}>120 Ontdekkers Rd, Horizon View, Roodepoot, 1725</Text>
      </View>
      <View style={styles.theClock}>
        <Image source={require('../images/clock.png')} style={styles.iconClock} />
        <Image source={require('../images/clock.png')} style={styles.iconClock2} />
        <Image source={require('../images/clock.png')} style={styles.iconClock3} />
      </View>
      <View style={styles.sideTabBar}>
      <TouchableOpacity style={styles.tabItem} onPress={handleSideTab}>
          <Image source={require('../images/menuTab.png')} style={styles.tabIcon2} />
        </TouchableOpacity>
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
  searchContainer: {
    position: 'absolute',
    bottom: 0,
  },
  buttonText: {
    fontSize: 18,
    left: 10,
    top: 2,
    color: 'white'
  },
  searchBox: {
    backgroundColor: 'gray',
    borderRadius: 40,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    height: 300,
    width: 392
  },
  loginButton: {
    width: 300,
    height: 60,
    backgroundColor: '#transparent',
    padding: 10,
    marginVertical: 20,
    borderColor: 'white',
    borderWidth: 3,
    borderRadius: 30,
    bottom: 100,
    left: 35
  },
  myWords: {
    top: 140,
    left: 45
  },
  theClock: {
    top: 53
  },
  first1: {
    paddingBottom: 25
  },
  prevSearch: {
    fontSize: 20,
    color: 'white',
    left: 30,
    bottom: 95,
  },
  prevSearch2: {
    fontSize: 20,
    color: 'white',
    left: 30,
    bottom: 95
  },
  prevSearch3: {
    fontSize: 20,
    color: 'white',
    left: 30,
    bottom: 95
  },
  prevAdresss: {
    fontSize: 14,
    color: 'white',
    left: 30,
    bottom: 95
  },
  prevAdresss2: {
    fontSize: 14,
    color: 'white',
    left: 30,
    bottom: 95
  },
  prevAdresss3: {
    fontSize: 14,
    color: 'white',
    left: 30,
    bottom: 95
  },
  sideTabBar: {
    position: 'absolute',
    top: 35, 
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  line1: {
    bottom: 32
  },
  line2: {
    bottom: 176
  },
  tabItem: {
    alignItems: 'center',
    borderWidth: 10,
    borderColor: 'gray',
    backgroundColor: 'gray',
    borderRadius: 30,
  },
  tabIcon2: {
    width: 20,
    height: 20,
  },
  iconClock: {
    left: 40,
    bottom: 176
  },
  iconClock2: {
    left: 40,
    bottom: 135
  },
  iconClock3: {
    left: 40,
    bottom: 86
  },
});

export default HomePage;
