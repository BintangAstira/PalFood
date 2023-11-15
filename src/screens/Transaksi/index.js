// TransaksiScreen.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TransaksiScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Transaksi Selesai</Text>
      {/* Tambahkan elemen UI atau logika transaksi di sini */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFCC29',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default TransaksiScreen;
