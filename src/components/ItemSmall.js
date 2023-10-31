import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { fontType, colors } from '../theme';

const ItemSmall = ({ resep, onPress }) => {
  return (
    <TouchableOpacity style={styles.resepItem} onPress={() => onPress(resep)}>
      <Image source={resep.image} style={styles.resepImage} />
      <Text style={styles.resepJudul}>{resep.judul}</Text>
      <Text style={styles.resepDeskripsi}>{resep.deskripsi}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  resepItem: {
    marginBottom: 20,
    backgroundColor: colors.grey(0.1),
    borderRadius: 8,
    padding: 16,
  },
  resepImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  resepJudul: {
    fontSize: 20,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
    marginBottom: 8,
  },
  resepDeskripsi: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Regular'],
    color: colors.grey(),
  },
});

export default ItemSmall;
