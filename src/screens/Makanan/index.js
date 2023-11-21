import React, { useRef, useEffect } from 'react';
import { Animated, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const PesananScreen = () => {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000, // Sesuaikan durasinya sesuai kebutuhan
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const handleLanjutPesanButtonPress = () => {
    navigation.navigate('Transaksi'); // Navigasi ke layar TransaksiScreen
  };
  const handleCariButtonPress = () => {
    console.log('Tombol Cari Makanan ditekan');
  };
  const handlePesanButtonPress = (selectedTransaction) => {
    navigation.navigate('Pesanan', { selectedTransaction });
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
        <Text style={styles.PesananTitle}>Pempek Campur</Text>
        <View style={styles.PesananContainer}>
          <Text style={styles.PesananTitle}>Pesanan Anda</Text>
          <View style={styles.PesananItem}>
            <Text style={styles.PesananText}>Pempek Campur (x1)</Text>
            <Text style={styles.PesananText}>Rp 15,000</Text>
          </View>
          {/* Tambahkan item pesanan lain di sini */}
          <View style={styles.PesananTotal}>
            <Text style={styles.PesananText}>Total:</Text>
            <Text style={styles.PesananText}>Rp 15,000</Text>
          </View>
          <TouchableOpacity style={styles.lanjutPesanButton} onPress={handleLanjutPesanButtonPress}>
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
