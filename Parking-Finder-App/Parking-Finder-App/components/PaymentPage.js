import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PaymentPage = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const balance = 200.0; // Example balance, replace with actual user balance

  const handleCardSelect = (card) => {
    setSelectedCard(card);
  };

  const handleAddCard = () => {
    // Implement the logic to add a card
  };

  return (
    <View style={styles.container}>
      <Text style={styles.balance}>Balance: R {balance.toFixed(2)}</Text>

      <Text style={styles.paymentMethods}>Payment Methods</Text>
      <View style={styles.cardList}>
        <TouchableOpacity
          style={[
            styles.card,
            selectedCard === 'Card1' ? styles.selectedCard : null,
          ]}
          onPress={() => handleCardSelect('Card1')}
        >
          <Text style={styles.cardText}>Card ending in 1273</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.card,
            selectedCard === 'Card2' ? styles.selectedCard : null,
          ]}
          onPress={() => handleCardSelect('Card2')}
        >
          <Text style={styles.cardText}>Card ending in 3645</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.card,
            selectedCard === 'Card3' ? styles.selectedCard : null,
          ]}
          onPress={() => handleCardSelect('Card3')}
        >
          <Text style={styles.cardText}>Card ending in 2734</Text>
        </TouchableOpacity>
        {/* Add more cards as needed */}
      </View>

      <TouchableOpacity style={styles.addCardButton} onPress={handleAddCard}>
        <Text style={styles.addCardText}>Add a Card</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  balance: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  paymentMethods: {
    fontSize: 18,
    marginTop: 20,
  },
  cardList: {
    marginTop: 10,
  },
  card: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginVertical: 5,
  },
  selectedCard: {
    backgroundColor: 'blue', // Color to indicate the selected card
  },
  cardText: {
    fontSize: 16,
  },
  addCardButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  addCardText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default PaymentPage;
