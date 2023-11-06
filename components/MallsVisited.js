import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const mallsVisitedData = [
  {
    month: 'October 2023',
    malls: [
      {
        name: 'Mall of Africa',
        hours: '10:00 AM - 8:00 PM',
        price: 'R10/hour',
      },
      {
        name: 'Eastgate shopping center',
        hours: '9:00 AM - 9:00 PM',
        price: 'R3/hour',
      },
    ],
  },
  {
    month: 'September 2023',
    malls: [
      {
        name: 'Northgate shopping center',
        hours: '10:00 AM - 8:00 PM',
        price: 'R2/hour',
      },
      {
        name: 'Mall of Africa',
        hours: '9:00 AM - 9:00 PM',
        price: 'R10/hour',
      },
    ],
  },
  {
    month: 'August 2023',
    malls: [
      {
        name: 'Mall of Africa',
        hours: '10:00 AM - 8:00 PM',
        price: 'R10/hour',
      },
      {
        name: 'Southgate shopping center',
        hours: '9:00 AM - 9:00 PM',
        price: 'R3/hour',
      },
    ],
  },
];

const MallsVisitedPage = () => {
  return (
    <ScrollView style={styles.container}>
      {mallsVisitedData.map((monthData, index) => (
        <View key={index} style={styles.monthContainer}>
          <Text style={styles.monthText}>{monthData.month}</Text>
          {monthData.malls.map((mall, mallIndex) => (
            <View key={mallIndex} style={styles.mallItem}>
              <Text style={styles.mallName}>{mall.name}</Text>
              <Text style={styles.mallHours}>Visiting Hours: {mall.hours}</Text>
              <Text style={styles.mallPrice}>Price: {mall.price}</Text>
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  monthContainer: {
    marginBottom: 20,
  },
  monthText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  mallItem: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  mallName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  mallHours: {
    fontSize: 16,
  },
  mallPrice: {
    fontSize: 16,
  },
});

export default MallsVisitedPage;
