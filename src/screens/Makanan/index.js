import React, { useRef, useEffect, useState } from 'react';
import { Animated, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

const PesananScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [quantity, setQuantity] = React.useState('');
  const [namaPemesan, setNamaPemesan] = React.useState('');
  const [alamatPengiriman, setAlamatPengiriman] = React.useState('');
  const [totalHarga, setTotalHarga] = React.useState('');
  const hargaPerItem = 15000;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    try {
      setLoading(true);
      await firestore().collection('pesanan').add({ // Ganti 'pesanan' sesuai dengan koleksi Firebase Anda
        quantity: Number(quantity),
        namaPemesan,
        alamatPengiriman,
        totalHarga: Number(totalHarga),
      });
      setLoading(false);
      console.log('Upload berhasil');
      Alert.alert('Sukses', 'Pesanan berhasil diupload ke server.');
    } catch (error) {
      console.error('Error uploading pesanan:', error);
      Alert.alert('Error', 'Terjadi kesalahan saat mengirim pesanan.');
      setLoading(false);
    }
  };

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const handleLanjutPesanButtonPress = async () => {
    try {
      // Hitung total berdasarkan jumlah dan hargaPerItem
      const total = quantity * hargaPerItem;

      // Navigasi ke layar Data dengan membawa data pesanan
      navigation.navigate('DataScreen', { quantity, namaPemesan, alamatPengiriman, totalHarga });

      // Upload data pesanan ke API
      await handleUpload();
    } catch (error) {
      // Handle error
      console.error('Error during navigation:', error);
    }
  };

  const handleCariButtonPress = () => {
    console.log('Tombol Cari Makanan ditekan');
  };

  const handlePesanButtonPress = async () => {
    try {
      const recipeData ={
        quantity,
        namaPemesan,
        alamatPengiriman,
        totalHarga: quantity * hargaPerItem,
      };
      await firestore().collection('pesanan').add(recipeData);
      console.log(response.data);
      Alert.alert('Sukses', 'Pesanan berhasil dikirim ke server.');

      setQuantity('');
      setNamaPemesan('');
      setAlamatPengiriman('');
      setTotalHarga('');
    } catch (error) {
      console.error('Error uploading pesanan:', error);
      Alert.alert('Error', 'Terjadi kesalahan saat mengirim pesanan.');
    }
    handleUpload();
  };

  return (
    <Animated.ScrollView style={{ ...styles.container, opacity: fadeAnim }} contentContainerStyle={styles.container}>
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
      <View>
        <TextInput
          value={quantity}
          onChangeText={(text) => setQuantity(text)}
          keyboardType="numeric"
          placeholder="Jumlah Pesanan"
          style={styles.input}
        />
        <TextInput
          value={namaPemesan}
          onChangeText={(text) => setNamaPemesan(text)}
          placeholder="Nama Pemesan"
          style={styles.input}
        />
        <TextInput
          value={alamatPengiriman}
          onChangeText={(text) => setAlamatPengiriman(text)}
          placeholder="Alamat Pengiriman"
          style={styles.input}
        />
        <TextInput
          value={totalHarga}
          onChangeText={(text) => setTotalHarga(text)}
          placeholder="Total Harga" 
          style={styles.input}
          editable={false}
        />

        <TouchableOpacity style={styles.lanjutPesanButton} onPress={handleLanjutPesanButtonPress}>
          <Text style={styles.lanjutPesanButtonText}>Lanjutkan Pesanan</Text>
        </TouchableOpacity>
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
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 12,
    paddingLeft: 8,
    fontFamily: 'Arial',
  },
});

export default PesananScreen;
