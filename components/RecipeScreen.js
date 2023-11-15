import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const RecipeScreen = () => {
  const [selectedSoftIngredients, setSelectedSoftIngredients] = useState([]);
  const [selectedAlcoholIngredients, setSelectedAlcoholIngredients] = useState([]);

  const toggleSoftIngredient = (ingredient) => {
    if (selectedSoftIngredients.includes(ingredient)) {
      setSelectedSoftIngredients(selectedSoftIngredients.filter((item) => item !== ingredient));
    } else {
      setSelectedSoftIngredients([...selectedSoftIngredients, ingredient]);
    }
  };

  const toggleAlcoholIngredient = (ingredient) => {
    if (selectedAlcoholIngredients.includes(ingredient)) {
      setSelectedAlcoholIngredients(selectedAlcoholIngredients.filter((item) => item !== ingredient));
    } else {
      setSelectedAlcoholIngredients([...selectedAlcoholIngredients, ingredient]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nom de la recette</Text>

      {/* Ingrédients Soft */}
      <Text style={styles.subtitle}>Ingrédients Soft :</Text>
      <TouchableOpacity
        style={[styles.ingredientButton, selectedSoftIngredients.includes('Ingrédient Soft 1') && styles.selectedButton]}
        onPress={() => toggleSoftIngredient('Ingrédient Soft 1')}
      >
        <Text style={styles.buttonText}>Ingrédient Soft 1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.ingredientButton, selectedSoftIngredients.includes('Ingrédient Soft 2') && styles.selectedButton]}
        onPress={() => toggleSoftIngredient('Ingrédient Soft 2')}
      >
        <Text style={styles.buttonText}>Ingrédient Soft 2</Text>
      </TouchableOpacity>
      {/* Ajoutez d'autres ingrédients Soft si nécessaire */}

      {/* Ingrédients Alcool */}
      <Text style={styles.subtitle}>Ingrédients Alcool :</Text>
      <TouchableOpacity
        style={[styles.ingredientButton, selectedAlcoholIngredients.includes('Ingrédient Alcool 1') && styles.selectedButton]}
        onPress={() => toggleAlcoholIngredient('Ingrédient Alcool 1')}
      >
        <Text style={styles.buttonText}>Ingrédient Alcool 1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.ingredientButton, selectedAlcoholIngredients.includes('Ingrédient Alcool 2') && styles.selectedButton]}
        onPress={() => toggleAlcoholIngredient('Ingrédient Alcool 2')}
      >
        <Text style={styles.buttonText}>Ingrédient Alcool 2</Text>
      </TouchableOpacity>
      {/* Ajoutez d'autres ingrédients Alcool si nécessaire */}

      {/* Étapes de préparation */}
      <Text style={styles.subtitle}>Étapes de préparation :</Text>
      <Text>1. Étape 1</Text>
      <Text>2. Étape 2</Text>
      {/* Ajoutez d'autres étapes de préparation */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  ingredientButton: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 8,
    marginVertical: 4,
  },
  selectedButton: {
    backgroundColor: '#64b5f6', // Change the color for selected state
  },
  buttonText: {
    fontSize: 16,
  },
});

export default RecipeScreen;