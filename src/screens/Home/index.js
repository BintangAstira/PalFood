import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selamat Datang di Kuliner Palembang</Text>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Cari Makanan..." />
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.buttonText}>Cari</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.recipeContainer}>
        {BlogList.map((recipe) => (
          <View key={recipe.id} style={styles.recipeItem}>
            <Image source={{ uri: recipe.image }} style={styles.recipeImage} />
            <Text style={styles.recipeTitle}>{recipe.title}</Text>
            <Text style={styles.recipeCategory}>{recipe.category}</Text>
            <Text style={styles.recipeLevel}>{recipe.level}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Pesan</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.taskbar}>
        <TouchableOpacity style={styles.taskbarItem}>
          <Text style={styles.taskbarText}>Beranda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskbarItem}>
          <Text style={styles.taskbarText}>Favorit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskbarItem}>
          <Text style={styles.taskbarText}>Profil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFCC29',
    padding: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#00B4D8',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 40,
  },
  title: {
    fontSize: 28,
    fontFamily: 'Pjs-Bold',
    color: 'black',
    marginBottom: 16,
  },
  recipeContainer: {
    flex: 1,
  },
  recipeItem: {
    marginBottom: 20,
    backgroundColor: '#FF5733',
    borderRadius: 8,
    padding: 16,
  },
  recipeImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  recipeTitle: {
    fontSize: 24,
    fontFamily: 'Pjs-Bold',
    color: 'white',
    marginBottom: 8,
  },
  recipeCategory: {
    fontSize: 18,
    fontFamily: 'Pjs-Regular',
    color: 'white',
  },
  recipeLevel: {
    fontSize: 16,
    fontFamily: 'Pjs-Regular',
    color: 'white',
    marginBottom: 8,
  },
  searchContainer: {
    flexDirection: 'row',
    marginTop: 16,
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
  searchButton: {
    backgroundColor: '#7D3C98',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 40,
    marginBottom: 16,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
  taskbar: {
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-around',
    padding: 10,
  },
  taskbarItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  taskbarText: {
    color: 'black',
  },
} );

const BlogList = [
  {
    id: 1,
    title: 'Pempek',
    category: 'Makanan',
    image: 'https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/republika/member/7fo6bnylc7.jpg',
    level: 'Pilih Tingkat Kepedasan Anda : Pedas , Sedang , Tidak Pedas',
  },
  {
    id: 2,
    title: 'Tekwan',
    category: 'Makanan',
    image: 'https://tribratanews.polri.go.id/web/image/blog.post/61442/image',
    level: 'Pilih Tingkat Kepedasan Anda : Pedas , Sedang , Tidak Pedas',
  },
  {
    id: 3,
    title: 'Mie Celor',
    category: 'Makanan',
    image: 'https://resepkoki.id/wp-content/uploads/2017/05/Resep-Mie-celor.jpg',
    level: 'Pilih Tingkat Kepedasan Anda : Pedas , Sedang , Tidak Pedas',
  },
  {
    id: 4,
    title: 'Kemplang',
    category: 'Cemilan',
    image: 'https://cdn0-production-images-kly.akamaized.net/DtpnXRrgxJwVAKJyonfV1IudkbU=/0x2311:4160x4656/680x383/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3619165/original/072578700_1635741694-shutterstock_1959119815.jpg',
    level: 'Pilih Tingkat Kepedasan Anda : Pedas , Sedang , Tidak Pedas',
  },
];

export default App;
