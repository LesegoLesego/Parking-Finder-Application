import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const AboutPage = () => {
  return (
    <ScrollView style={styles.container}>
    <View style={styles.about}>
        <Text style={styles.about}>About</Text>
        {/* Add content for "Rate the App" section */}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Rate the App</Text>
        {/* Add content for "Rate the App" section */}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Follow Us on Instagram</Text>
        {/* Add content for "Follow Us on Instagram" section */}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Careers Available</Text>
        {/* Add content for "Careers Available" section */}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Legal</Text>
        {/* Add content for "Legal" section */}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Credits</Text>
        {/* Add content for "Credits" section */}
        <Text style={styles.creditsText}>
          Created UJ students
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  about: {
    fontSize: 30,
    fontWeight: 'bolt',
    paddingBottom: 10,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  creditsText: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default AboutPage;
