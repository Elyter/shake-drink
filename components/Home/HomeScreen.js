import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const HomeScreen = ({ navigation }) => {
  const [selectedAlcool, setSelectedAlcool] = useState([]);
  const [alcools, setAlcools] = useState([]);


  useEffect(() => {
    fetchAlcools();
  }, []);

  const handleDrinkSelection = (drink) => {
    if (selectedAlcool.includes(drink)) {
      setSelectedAlcool(selectedAlcool.filter((d) => d !== drink));
    } else {
      setSelectedAlcool([...selectedAlcool, drink]);
    }
  };

  const handleSearch = () => {
    navigation.navigate('SelectSoft', {alcools: selectedAlcool });
  };

  const fetchAlcools = async () => {
    try {
      const response = await axios.get('http://localhost:3000/alcools');
      setAlcools(response.data);
    } catch (error) {
      if (error.response && error.response.status === 500) {
        alert(error.response.data.message);
      } else {
        console.error('Error fetching alcools:', error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>T'as quoi sur la table ?</Text>
      {alcools.map((alcool) => (
        <TouchableOpacity
          key={alcool.id}
          style={[
            styles.drinkButton,
            selectedAlcool.includes(alcool.id) && styles.selectedDrinkButton,
          ]}
          onPress={() => handleDrinkSelection(alcool.id)}
        >
          <Text style={styles.drinkButtonText}>{alcool.name}</Text>
        </TouchableOpacity>
      ))}
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