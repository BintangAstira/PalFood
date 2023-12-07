// TransaksiScreen.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TransaksiScreen = ({ route }) => {
  const { quantity, total, namaPemesan, alamatPengiriman } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Transaksi Selesai</Text>
      <View style={styles.detailContainer}>
        <Text style={styles.detailText}>Jumlah Pesanan: {quantity}</Text>
        <Text style={styles.detailText}>Total Pembayaran: Rp {total}</Text>
        <Text style={styles.detailText}>Nama Pemesan: {namaPemesan}</Text>
        <Text style={styles.detailText}>Alamat Pengiriman: {alamatPengiriman}</Text>
      </View>
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
  detailContainer: {
    marginTop: 20,
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
  },
  detailText: {
    fontSize: 16,
    color: 'black',
    fontFamily: 'Arial',
    marginBottom: 8,
  },
});

export default TransaksiScreen;
