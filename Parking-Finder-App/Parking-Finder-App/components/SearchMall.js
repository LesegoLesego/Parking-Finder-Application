import React from 'react';
import { View, Text, TextInput, Image, ScrollView, FlatList, StyleSheet, TouchableOpacity  } from 'react-native';

const mallsData = [
  {
    id: '1',
    name: 'Eastgate Shopping Centre',
    image: require('../images/EastgateMall.jpg'),
    info: '43 Bradford Road, Bedfordview, 2008',
    info2: 'Parking spaces: 786',
    info3: 'Currently available parking: 534',
    info4: 'Price per hour: R2.00',
  },
  {
    id: '2',
    name: 'Mall of Africa',
    image: require('../images/MallOfAfrica.jpg'),
    info: 'Magwa Cres, Midrand, 2066',
    info2: 'Parking spaces: 800',
    info3: 'Currently available parking: 384',
    info4: 'Price per hour: R10.00',
  },
  {
    id: '3',
    name: 'Westgate Shopping Centre',
    image: require('../images/WestgateMall.jpg'),
    info: '120 Ontdekkers Rd, Horizon View, Roodepoot, 1725',
    info2: 'Parking spaces: 687',
    info3: 'Currently available parking: 526',
    info4: 'Price per hour: R3.00',
  },
];

const SearchPage = ({ navigation }) => {

  const handleMallPress = (mall) => {
    if (mall.id === '1') {
      navigation.navigate('Mall1Page', { mall });
    } else if (mall.id === '2') {
      navigation.navigate('Mall2Page', { mall });
    } else if (mall.id === '3') {
      navigation.navigate('Mall3Page', { mall });
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search for mall..."
      />

      <ScrollView style={styles.mallList}>
        <FlatList
          data={mallsData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleMallPress(item)}>
              <View style={styles.mallItem}>
                <Image source={item.image} style={styles.mallImage} />
                <Text style={styles.mallName}>{item.name}</Text>
                <Text style={styles.mallInfo1}>{item.info}</Text>
                <Text style={styles.mallInfo}>{item.info2}</Text>
                <Text style={styles.mallInfo}>{item.info3}</Text>
                <Text style={styles.mallInfo}>{item.info4}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  searchInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
  },
  mallList: {
    marginTop: 20,
  },
  mallItem: {
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
  },
  mallImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  mallName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  mallInfo: {
    fontSize: 15,
    color: 'gray',
  },
  mallInfo1: {
    fontSize: 15,
    fontWeight: 'bold'
  },
});

export default SearchPage;
