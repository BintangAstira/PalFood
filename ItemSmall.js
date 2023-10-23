import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ItemSmall = ({ foodItem }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.foodImage} source={require('./pempek.jpeg')} />
      <Text style={styles.foodName}>{foodItem.foodName}</Text>
      <Text style={styles.foodDescription}>{foodItem.foodDescription}</Text>
      <Text style={styles.price}>{foodItem.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    marginRight: 10,
    // Tambahkan gaya lain sesuai kebutuhan
  },
  foodImage: {
    width: 200,
    height: 200,
  },
  foodName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  foodDescription: {
    textAlign: 'center',
    margin: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
  },
});

export default ItemSmall;
