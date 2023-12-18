import React, { useRef, useEffect, useState } from 'react';
import { Animated, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const EditForm = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [quantity, setQuantity] = useState(route.params.quantity.toString());
  const [namaPemesan, setNamaPemesan] = useState(route.params.namaPemesan);
  const [alamatPengiriman, setAlamatPengiriman] = useState(route.params.alamatPengiriman);
  const hargaPerItem = 15000;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const handleEditButtonPress = () => {
    const total = quantity * hargaPerItem;
    navigation.navigate('Transaksi', { quantity, total, namaPemesan, alamatPengiriman, total });
  };

  return (
    <Animated.ScrollView style={{ ...styles.container, opacity: fadeAnim }} contentContainerStyle={styles.container}>
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

        <TouchableOpacity style={styles.button} onPress={handleEditButtonPress}>
          <Text style={styles.buttonLabel}>Simpan Perubahan</Text>
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
    marginTop: 10,
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
  button: {
    backgroundColor: 'green',
    padding: 10,
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 20,
  },
  buttonLabel: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Arial',
  },
});

export default EditForm;
