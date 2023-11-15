import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Easing } from 'react-native';

const RecipeScreen = () => {
  const [showSoftIngredients, setShowSoftIngredients] = useState(false);
  const [showAlcoholIngredients, setShowAlcoholIngredients] = useState(false);
  const [selectedSoftIngredients, setSelectedSoftIngredients] = useState([]);
  const [selectedAlcoholIngredients, setSelectedAlcoholIngredients] = useState([]);
  const [softIngredientHeight, setSoftIngredientHeight] = useState(new Animated.Value(0));
  const [alcoholIngredientHeight, setAlcoholIngredientHeight] = useState(new Animated.Value(0));

  const toggleSoftIngredients = () => {
    setShowSoftIngredients(!showSoftIngredients);
    Animated.timing(softIngredientHeight, {
      toValue: showSoftIngredients ? 0 : 100,
      duration: 350,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  };

  const toggleAlcoholIngredients = () => {
    setShowAlcoholIngredients(!showAlcoholIngredients);
    Animated.timing(alcoholIngredientHeight, {
      toValue: showAlcoholIngredients ? 0 : 100,
      duration: 350,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  };

  const toggleSoftIngredient = (ingredient) => {
    const isSelected = selectedSoftIngredients.includes(ingredient);
    setSelectedSoftIngredients(
      isSelected
        ? selectedSoftIngredients.filter((item) => item !== ingredient)
        : [...selectedSoftIngredients, ingredient]
    );
  };

  const toggleAlcoholIngredient = (ingredient) => {
    const isSelected = selectedAlcoholIngredients.includes(ingredient);
    setSelectedAlcoholIngredients(
      isSelected
        ? selectedAlcoholIngredients.filter((item) => item !== ingredient)
        : [...selectedAlcoholIngredients, ingredient]
    );
  };

  const renderIngredientBox = (ingredient, isSelected, onPress) => (
    <TouchableOpacity
      key={ingredient}
      style={[styles.ingredientBox, isSelected && styles.selectedBox]}
      onPress={onPress}
    >
      <Text>{ingredient}</Text>
    </TouchableOpacity>
  );

  const renderIngredientRow = (ingredients, selectedIngredients, toggleIngredient) => (
    <View style={styles.ingredientRow}>
      {ingredients.map((ingredient) =>
        renderIngredientBox(ingredient, selectedIngredients.includes(ingredient), () =>
          toggleIngredient(ingredient)
        )
      )}
    </View>
  );
  
  const renderSoftIngredientRows = () => {
    const rows = [];
    for (let i = 0; i < softIngredients.length; i += 3) {
      const rowIngredients = softIngredients.slice(i, i + 3);
      rows.push(
        renderIngredientRow(
          rowIngredients,
          selectedSoftIngredients,
          toggleSoftIngredient
        )
      );
    }
    return rows;
  };
  
  const renderAlcoholIngredientRows = () => {
    const rows = [];
    for (let i = 0; i < alcoholIngredients.length; i += 3) {
      const rowIngredients = alcoholIngredients.slice(i, i + 3);
      rows.push(
        renderIngredientRow(
          rowIngredients,
          selectedAlcoholIngredients,
          toggleAlcoholIngredient
        )
      );
    }
    return rows;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Création de la recette</Text>

      {/* Bouton Ingrédients Soft */}
      <TouchableOpacity style={[styles.toggleButton, styles.softButton]} onPress={toggleSoftIngredients}>
        <Text style={styles.toggleButtonText}>Soft</Text>
      </TouchableOpacity>

      {/* Affichage des Ingrédients Soft s'ils sont visibles */}
      <Animated.View style={{ height: softIngredientHeight, overflow: 'hidden' }}>
      {renderSoftIngredientRows()}
    </Animated.View>

      {/* Bouton Ingrédients Alcool */}
      <TouchableOpacity style={[styles.toggleButton, styles.alcoholButton]} onPress={toggleAlcoholIngredients}>
        <Text style={styles.toggleButtonText}>Alcool</Text>
      </TouchableOpacity>

      {/* Affichage des Ingrédients Alcool s'ils sont visibles */}
      {/* Affichage des Ingrédients Alcool s'ils sont visibles */}
    <Animated.View style={{ height: alcoholIngredientHeight, overflow: 'hidden' }}>
      {renderAlcoholIngredientRows()}
    </Animated.View>

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
  toggleButton: {
    backgroundColor: '#e0e0e0',
    padding: 15, // Ajustez la taille du bouton
    borderRadius: 10,
    marginBottom: 8,
    alignItems: 'center',
  },
  toggleButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8,
    textAlign: 'center'
  },
  ingredientRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  ingredientBox: {
    flex: 1,
    height: 40,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '1%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  selectedBox: {
    backgroundColor: '#a0a0a0',
  },
  softButton: {
    backgroundColor: '#b3e0ff', // Couleur spécifique pour les Soft
  },
  alcoholButton: {
    backgroundColor: '#ffc0cb', // Couleur spécifique pour les Alcool
  },
});

// Exemple d'ingrédients (à remplacer par vos données réelles)
const softIngredients = ['Soft 1', 'Soft 2', 'Soft 3', 'Soft 4', 'Soft 5', 'Soft 6', 'Soft 7', 'Soft 8'];
const alcoholIngredients = ['Alcool 1', 'Alcool 2', 'Alcool 3'];

export default RecipeScreen;