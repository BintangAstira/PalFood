import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import ItemSmall from './ItemSmall';

const ListHorizontal = ({ foodItems }) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {foodItems.map((item) => (
        <ItemSmall key={item.id} foodItem={item} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  // Style as needed
});

export default ListHorizontal;
