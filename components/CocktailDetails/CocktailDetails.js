import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const CocktailDetails = ({ route }) => {
  const { id } = route.params;

  // Supposons que vous ayez une méthode pour récupérer les détails du cocktail en fonction de son ID
  const getCocktailDetails = (id) => {
    // Implémentation fictive de récupération des détails du cocktail par son ID
    return { title: 'Mojito', ingredients: ['Rhum', 'Menthe', 'Citron vert', 'Sucre', 'Eau gazeuse'], quantity: ['60ml', '8 feuilles', '1/2', '2 cuillères à café', '100ml'] };
  };

  const [cocktailDetails, setCocktailDetails] = useState(getCocktailDetails(id));
  const [isFavorite, setIsFavorite] = useState(false);
  const [votes, setVotes] = useState(0);

  const handleFavoritePress = () => {
    setIsFavorite(!isFavorite);
  };

  const handleUpvote = () => {
    setVotes(votes + 1);
  };

  const handleDownvote = () => {
    setVotes(votes - 1);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 25 }}>{cocktailDetails.title}</Text>
      <Text style={{ fontSize: 18, marginTop: 10 }}>Ingrédients:</Text>
      <View style={{ marginTop: 5 }}>
        {cocktailDetails.ingredients.map((ingredient, index) => (
          <Text key={index}>{ingredient} - {cocktailDetails.quantity[index]}</Text>
        ))}
      </View>
      <TouchableOpacity onPress={handleFavoritePress} style={{ marginTop: 20 }}>
        <Text>{isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <TouchableOpacity onPress={handleUpvote} style={{ marginRight: 10 }}>
          <Text>👍</Text>
        </TouchableOpacity>
        <Text>{votes}</Text>
        <TouchableOpacity onPress={handleDownvote} style={{ marginLeft: 10 }}>
          <Text>👎</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CocktailDetails;
