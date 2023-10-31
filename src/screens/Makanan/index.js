import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';

const TekwanScreen = () => {
  const handlePesanButtonPress = () => {
    // Fungsi yang akan dijalankan ketika tombol "Pesan" ditekan
    // Anda dapat menambahkan logika pesan atau navigasi ke layar pesanan di sini
    console.log('Tombol Pesan ditekan');
  };

  const handleCariButtonPress = () => {
    // Fungsi yang akan dijalankan ketika tombol "Cari Makanan" ditekan
    console.log('Tombol Cari Makanan ditekan');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Cari Pesanan" />
        <TouchableOpacity style={styles.cariButton} onPress={handleCariButtonPress}>
          <Text style={styles.cariButtonText}>Cari</Text>
        </TouchableOpacity>
      </View>
      <Image
        style={styles.MakananImage}
        source={{
          uri:
            'https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/republika/member/7fo6bnylc7.jpg',
        }}
      />
      <View style={styles.MakananDetails}>
        <Text style={styles.MakananTitle}>Pempek Campur</Text>
        <View style={styles.pesananContainer}>
        <Text style={styles.pesananTitle}>Pesanan Anda</Text>
        <View style={styles.pesananItem}>
          <Text style={styles.pesananText}>Pempek Campur (x1)</Text>
          <Text style={styles.pesananText}>Rp 15,000</Text>
        </View>
        {/* Tambahkan item pesanan lain di sini */}
        <View style={styles.pesananTotal}>
          <Text style={styles.pesananText}>Total:</Text>
          <Text style={styles.pesananText}>Rp 15,000</Text>
        </View>
        <TouchableOpacity style={styles.lanjutPesanButton} onPress={handlePesanButtonPress}>
          <Text style={styles.lanjutPesanButtonText}>Lanjutkan Pesanan</Text>
        </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFCC29',
    padding: 16,
  },
  MakananImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 20,
  },
  MakananDetails: {
    marginBottom: 20,
  },
  MakananTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
    fontFamily: 'Arial',
  },
  MakananSubtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
    fontFamily: 'Arial',
  },
  MakananText: {
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
  pesananContainer: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    marginTop: 20,
  },
  pesananTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
    fontFamily: 'Arial',
  },
  pesananItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  pesananText: {
    color: 'black',
    fontFamily: 'Arial',
  },
  pesananTotal: {
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

export default TekwanScreen;
