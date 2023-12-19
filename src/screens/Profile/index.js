import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';


const ProfileScreen = ({ navigation }) => {
  const userData = {
    name: 'Bintang Astira',
    email: 'Bintang@example.com',
    address: 'Pondok Blimbing Indah, Kota Malang',
    phoneNumber: '08123456789',
  };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleEditProfile = () => {
    // Fungsi yang akan dijalankan ketika tombol "Edit Profil" ditekan
    // Anda dapat menavigasi pengguna ke layar pengeditan profil atau menampilkan formulir pengeditan di sini
    console.log('Tombol "Edit Profil" ditekan!');
  };

  const handleLogin = async () => {
    try {
      const userCredential = await auth().signInWithEmailAndPassword(email, password);
      const userToken = await userCredential.user.getIdToken();
      const expirationInMilliseconds = 30 * 24 * 60 * 60 * 1000; //hari * jam * menit * detik * milidetik
      const expirationTime = new Date().getTime() + expirationInMilliseconds;
      const dataToStore = {
        userToken,
        expirationTime,
      };
      await AsyncStorage.setItem('userData', JSON.stringify(dataToStore));
      navigation.navigate('MainApp');
    } catch (error) {
      console.error('Login Error:', error.message);
      let errorMessage = 'Terjadi kesalahan saat login.';
      if (error.code === 'auth/invalid-email') {
        errorMessage = 'Email tidak valid.';
      } else if (error.code === 'auth/wrong-password') {
        errorMessage = 'Password salah.';
      } else if (error.code === 'auth/user-not-found') {
        errorMessage = 'User tidak ditemukan.';
      }
      Alert.alert('Error', errorMessage);
    }
  };
  useEffect(() => {
    // Menggunakan useEffect untuk memantau perubahan pada email dan password
    updateLoginButtonStatus();
  }, [email, password]);

  const updateLoginButtonStatus = () => {
    // Memastikan tombol login hanya dapat diakses jika email dan password terisi
    if (email.trim() && password.trim()) {
      setLoginDisabled(false);
    } else {
      setLoginDisabled(true);
    }
  };

  const [isLoginDisabled, setLoginDisabled] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          style={styles.profileImage}
          source={{ uri: 'https://jagofoto.com/uploads/pose-foto-lelaki.jpg' }}
        />
        <Text style={styles.profileName}>{userData.name}</Text>
      </View>
      <View style={styles.profileInfo}>
        <Text>Email: {userData.email}</Text>
        <Text>Alamat: {userData.address}</Text>
        <Text>No. Telepon: {userData.phoneNumber}</Text>
      </View>
      <TouchableOpacity style={styles.editProfileButton} onPress={handleEditProfile}>
        <Text style={styles.editProfileButtonText}>Edit Profil</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#\FFCC29',
    padding: 20,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'black',
  },
  profileInfo: {
    fontSize: 16,
    marginBottom: 20,
    color: 'black',
  },
  editProfileButton: {
    backgroundColor: '#007bff', // Warna latar belakang tombol
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  editProfileButtonText: {
    color: 'white', // Warna teks tombol
    fontSize: 16,
    fontWeight: 'bold',
  },

  loginButton: {
    backgroundColor: '#28a745', // Warna latar belakang tombol login
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  loginButtonText: {
    color: 'white', // Warna teks tombol login
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
