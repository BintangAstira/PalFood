import React, { useRef, useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, TouchableWithoutFeedback, Modal, Alert, ImageBackground, TextInput, Button, Dimensions, FlatList } from 'react-native';
import { Notification, SearchNormal, Receipt21, Clock, Message, ArrowRight2, Setting2, Like1, Icon, } from 'iconsax-react-native';
import { fontType, colors } from './src/assets/theme';
// import React from 'react';
// import { View, Text, Image, StyleSheet, Button } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
     
      <Text style={styles.title}>Palembang Pall Food</Text>
      <Image
        style={styles.foodImage}
        source={require('./pempek.jpeg')}
      />
      <Text style={styles.foodName}>Pempek Palembang</Text>
      <Text style={styles.foodDescription}>
        Pempek adalah makanan khas Palembang yang lezat.
      </Text>
      <Text style={styles.price}>Rp 20,000</Text>
      <Button title="Pesan Sekarang" onPress={() => alert('Pesan Makanan')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
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

export default App;