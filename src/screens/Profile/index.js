import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

const ProfileScreen = () => {
  const userData = {
    name: 'Bintang Astira',
    email: 'Bintang@example.com',
    address: 'Pondok Blimbing Indah, Kota Malang',
    phoneNumber: '08123456789',
  };

  const handleEditProfile = () => {
    // Fungsi yang akan dijalankan ketika tombol "Edit Profil" ditekan
    // Anda dapat menavigasi pengguna ke layar pengeditan profil atau menampilkan formulir pengeditan di sini
    console.log('Tombol "Edit Profil" ditekan!');
  };

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
  
});

export default ProfileScreen;
