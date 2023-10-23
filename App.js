import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ListHorizontal from './ListHorizontal';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      foodItems: [
        {
          id: 1,
          foodName: 'Pempek Palembang',
          foodDescription: 'Pempek adalah makanan khas Palembang yang lezat.',
          price: 'Rp 20,000',
        },
        // Add more food items here
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Palembang Pall Food</Text>
        <ListHorizontal foodItems={this.state.foodItems} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default App;
