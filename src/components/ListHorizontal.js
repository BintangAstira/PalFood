import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ItemSmall from './ItemSmall';

const ListHorizontal = ({ data, onPressItem }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ItemSmall resep={item} onPress={onPressItem} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
});

export default ListHorizontal;
