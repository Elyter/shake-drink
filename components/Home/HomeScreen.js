import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [selectedDrinks, setSelectedDrinks] = useState([]);

  const handleDrinkSelection = (drink) => {
    if (selectedDrinks.includes(drink)) {
      setSelectedDrinks(selectedDrinks.filter((d) => d !== drink));
    } else {
      setSelectedDrinks([...selectedDrinks, drink]);
    }
  };

  const handleSearch = () => {
    navigation.navigate('SelectSoft', { selectedDrinks });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>T'as quoi sur la table ?</Text>
      <TouchableOpacity
        style={[
          styles.drinkButton,
          selectedDrinks.includes('vodka') && styles.selectedDrinkButton,
        ]}
        onPress={() => handleDrinkSelection('vodka')}
      >
        <Text style={styles.drinkButtonText}>Vodka</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.drinkButton,
          selectedDrinks.includes('gin') && styles.selectedDrinkButton,
        ]}
        onPress={() => handleDrinkSelection('gin')}
      >
        <Text style={styles.drinkButtonText}>Gin</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.drinkButton,
          selectedDrinks.includes('rum') && styles.selectedDrinkButton,
        ]}
        onPress={() => handleDrinkSelection('rum')}
      >
        <Text style={styles.drinkButtonText}>Rum</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.drinkButton,
          selectedDrinks.includes('tequila') && styles.selectedDrinkButton,
        ]}
        onPress={() => handleDrinkSelection('tequila')}
      >
        <Text style={styles.drinkButtonText}>Tequila</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.drinkButton,
          selectedDrinks.includes('whiskey') && styles.selectedDrinkButton,
        ]}
        onPress={() => handleDrinkSelection('whiskey')}
      >
        <Text style={styles.drinkButtonText}>Whiskey</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
        <Text style={styles.searchButtonText}>Suivant</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  drinkButton: {
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  selectedDrinkButton: {
    backgroundColor: '#007bff',
  },
  drinkButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;