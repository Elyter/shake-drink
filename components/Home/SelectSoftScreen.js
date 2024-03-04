import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const SelectSoft = ({ navigation, route }) => {
  const [selectedSoft, setSelectedSoft] = useState([]);
  const [softs, setSofts] = useState([]);

  useEffect(() => {
    fetchSofts();
  }, []);

  const handleSoftelection = (drink) => {
    if (selectedSoft.includes(drink)) {
      setSelectedSoft(selectedSoft.filter((d) => d !== drink));
    } else {
      setSelectedSoft([...selectedSoft, drink]);
    }
  };

  const handleSearch = () => {
    var selection = selectedSoft.concat(route.params.alcools)
    navigation.navigate('Results', { drinks: selection,});
  };

  const fetchSofts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/softs');
      setSofts(response.data);
    } catch (error) {
      if (error.response && error.response.status === 500) {
        alert(error.response.data.message);
      } else {
        console.error('Error fetching softs:', error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quel soft sont sur la table ?</Text>
      {softs.map((soft) => (
        <TouchableOpacity
          key={soft.id}
          style={[
            styles.drinkButton,
            selectedSoft.includes(soft.id) && styles.selectedDrinkButton,
          ]}
          onPress={() => handleSoftelection(soft.id)}
        >
          <Text style={styles.drinkButtonText}>{soft.name}</Text>
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

export default SelectSoft;