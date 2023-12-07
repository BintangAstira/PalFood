import React, { useRef, useEffect, useState } from 'react';
import { Animated, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';


const PesananScreen = () => {
  const navigation = useNavigation();
  const route = useRoute(); // Tambahkan ini
  const [quantity, setQuantity] = React.useState(1);
  const [namaPemesan, setNamaPemesan] = React.useState('');
  const [alamatPengiriman, setAlamatPengiriman] = React.useState('');
  const hargaPerItem = 15000; // Harga per item, sesuaikan sesuai kebutuhan
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000, // Sesuaikan durasinya sesuai kebutuhan
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const handleLanjutPesanButtonPress = () => {
    // Hitung total berdasarkan jumlah dan hargaPerItem

    const total = quantity * hargaPerItem;
    navigation.navigate('Transaksi', { quantity, total, namaPemesan, alamatPengiriman });
  };
  const handleCariButtonPress = () => {
    console.log('Tombol Cari Makanan ditekan');
  };
  const handlePesanButtonPress = (selectedTransaction) => {
    // Implementasikan logika untuk menangani pesanan di sini
    // Contoh sederhana: Menampilkan informasi pesanan di console
    console.log(`Pesanan: ${quantity} item`);
    console.log(`Nama Pemesan: ${namaPemesan}`);
    console.log(`Alamat Pengiriman: ${alamatPengiriman}`);
    console.log(`Total Harga: ${quantity * hargaPerItem}`);
    // Lanjutkan dengan logika lainnya, seperti pengiriman pesanan ke server atau layar konfirmasi
  };

  return (
    <Animated.ScrollView style={{ ...styles.container, opacity: fadeAnim }}
      contentContainerStyle={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Cari Pesanan" />
        <TouchableOpacity style={styles.cariButton} onPress={handleCariButtonPress}>
          <Text style={styles.cariButtonText}>Cari</Text>
        </TouchableOpacity>
      </View>
      <Image
        style={styles.PesananImage}
        source={{ uri: 'https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/republika/member/7fo6bnylc7.jpg', }}
      />
      <View style={styles.PesananDetails}>
        <View style={styles.PesananContainer}>
          <Text style={styles.PesananTitle}>Jumlah Pesanan</Text>
          <TextInput
            style={styles.PesananInput}
            value={quantity.toString()}
            onChangeText={(text) => setQuantity(parseInt(text) || 1)}
            keyboardType="numeric"
          />
          {/* Tambahkan TextInput untuk Nama Pemesan */}
          <TextInput
            style={styles.PesananInput}
            placeholder="Nama Pemesan"
            value={namaPemesan}
            onChangeText={setNamaPemesan}
            // Tambahkan properti borderBottomColor dan borderBottomWidth
            // Untuk memberi efek frame pada TextInput
            borderBottomColor="black"
            borderBottomWidth={1}
          />
          <TextInput
            style={styles.PesananInput}
            placeholder="Alamat Pengiriman"
            value={alamatPengiriman}
            onChangeText={setAlamatPengiriman}
            // Tambahkan properti borderBottomColor dan borderBottomWidth
            // Untuk memberi efek frame pada TextInput
            borderBottomColor="black"
            borderBottomWidth={1}
          />
          <View style={styles.PesananItem}>
            <Text style={styles.PesananText}>Pempek Campur (x{quantity})</Text>
            <Text style={styles.PesananText}>Rp {hargaPerItem}</Text>
          </View>
          <View style={styles.PesananTotal}>
            <Text style={styles.PesananText}>Total:</Text>
            <Text style={styles.PesananText}>Rp {quantity * hargaPerItem}</Text>
          </View>
          {/* Ganti onPress dengan handlePesanButtonPress */}
          <TouchableOpacity style={styles.lanjutPesanButton} onPress={handlePesanButtonPress}>
            <Text style={styles.lanjutPesanButtonText}>Lanjutkan Pesanan</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFCC29',
    padding: 16,
  },
  PesananImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 20,
    marginTop: 10, // Menambahkan jarak di bagian atas kontainer pencarian
  },
  PesananDetails: {
    marginBottom: 20,
  },
  PesananTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
    fontFamily: 'Arial',
  },
  PesananSubtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
    fontFamily: 'Arial',
  },
  PesananText: {
    color: 'black',
    fontFamily: 'Arial',
  },
  pesanButton: {
    backgroundColor: 'green',
    padding: 10,
    alignItems: 'center',
    borderRadius: 8,
  },
  pesanButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Arial',
  },
  searchContainer: {
    flexDirection: 'row',
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    marginRight: 8,
    paddingLeft: 8,
  },
  cariButton: {
    backgroundColor: '#0077b6', // Ganti warna latar belakang tombol "Cari"
    padding: 10,
    alignItems: 'center',
    borderRadius: 6,
  },
  cariButtonText: {
    color: 'black', // Ganti warna teks tombol "Cari"
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Arial', // Ganti jenis huruf jika diperlukan
  },
  PesananContainer: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    marginTop: 20,
  },
  PesananTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
    fontFamily: 'Arial',
  },
  PesananItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  PesananText: {
    color: 'black',
    fontFamily: 'Arial',
  },
  PesananTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    marginTop: 10,
    paddingTop: 10,
  },
  lanjutPesanButton: {
    backgroundColor: 'green',
    padding: 10,
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 20,
  },
  lanjutPesanButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Arial',
  },
});

export default PesananScreen;
