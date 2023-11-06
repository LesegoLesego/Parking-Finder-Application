import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MallDetailsPage = ({ route }) => {
  const { mall } = route.params;

  const navigation = useNavigation();

  const handleThanksPage = () => {
    navigation.navigate('ThanksPage');
  };

  return (
    <View style={styles.container}>
      <Image source={mall.image} style={styles.mallImage} />

      <View style={styles.mallInfo}>
        <Text style={styles.mallName}>{mall.name}</Text>
        <Text style={styles.mallDescription}>{mall.info}</Text>
        <Text style={styles.mallDescription2}>{mall.info2}</Text>
        <Text style={styles.mallDescription2}>{mall.info3}</Text>
        <Text style={styles.mallDescription2}>{mall.info4}</Text>
      </View>

      <View>
        <Text style={styles.stores}>Stores Available:</Text>
      </View>
      <ScrollView horizontal style={styles.storeLogos}>
        <Image source={require('../images/Nike.jpg')} style={styles.storeLogo} />
        <Image source={require('../images/Checkers.jpg')} style={styles.storeLogo} />
        <Image source={require('../images/Adidas.jpg')} style={styles.storeLogo} />
        <Image source={require('../images/ShopriteStore.jpg')} style={styles.storeLogo} />
        <Image source={require('../images/MrPrice.jpg')} style={styles.storeLogo} />
      </ScrollView>
      <ScrollView horizontal style={styles.storeLogos}>
        <Image source={require('../images/McD.jpg')} style={styles.storeLogo} />
        <Image source={require('../images/PepHome.jpg')} style={styles.storeLogo} />
        <Image source={require('../images/Pizza.jpg')} style={styles.storeLogo} />
        <Image source={require('../images/KFC.jpg')} style={styles.storeLogo} />
        <Image source={require('../images/Game.jpg')} style={styles.storeLogo} />
      </ScrollView>
      <View style={styles.bookingDetails}>
        <Text style={styles.bookingText}>Booking available</Text>
        <TouchableOpacity style={styles.bookButton} onPress={handleThanksPage}>
          <Text style={styles.bookButtonText}>Book Now</Text>
        </TouchableOpacity>
        <Text style={styles.costText}>Cost: R2.00 per hour</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mallImage: {
    width: '100%',
    height: 200,
  },
  stores: {
    fontSize: 18,
    fontWeight: 'bold',
    left: 20,
  },
  mallInfo: {
    padding: 20,
  },
  mallName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  mallDescription: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  mallDescription2: {
    fontSize: 16,
    color: 'gray'
  },
  storeLogos: {
    padding: 20,
    flexDirection: 'row',
  },
  storeLogo: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  bookingDetails: {
    padding: 20,
  },
  bookingText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  bookButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  bookButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  costText: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default MallDetailsPage;
