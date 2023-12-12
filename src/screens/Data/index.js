import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DataScreen = ({ route }) => {
  const { quantity, namaPemesan, alamatPengiriman, totalHarga } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Jumlah Pesanan: {quantity}</Text>
      <Text style={styles.text}>Nama Pemesan: {namaPemesan}</Text>
      <Text style={styles.text}>Alamat Pengiriman: {alamatPengiriman}</Text>
      <Text style={styles.text}>Total Harga: {totalHarga}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFCC29',
    padding: 16,
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 12,
    fontFamily: 'Arial',
  },
});

export default DataScreen;
