import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';

const CocktailDetails = ({ route }) => {
  const { id } = route.params;
  const [cocktailDetails, setCocktailDetails] = useState({});
  const [isFavorite, setIsFavorite] = useState(false);
  const [votes, setVotes] = useState(0);

  useEffect(() => {
    getCocktailDetails();
  }, []);

  const getCocktailDetails = async () => {
    try {
      const response = await axios.get('http://localhost:3000/cocktails/' + id);
      console.log(response.data);
      setCocktailDetails(response.data);
    } catch (error) {
      if (error.response && error.response.status === 500) {
        alert(error.response.data.message);
      } else {
        console.error('Error fetching cocktail:', error);
      }
    }
  };

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
    <View>
      <Text>{cocktailDetails.title}</Text>
      <Text>{cocktailDetails.description}</Text>
      <Text>Drinks:</Text>
      {cocktailDetails.drinks && cocktailDetails.drinks.map(drink => (
        <Text key={drink.id}>{drink.name}</Text>
      ))}
      <Text>Votes: {votes}</Text>
      <TouchableOpacity onPress={handleUpvote}>
        <Text>Upvote</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleDownvote}>
        <Text>Downvote</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleFavoritePress}>
        <Text>{isFavorite ? 'Remove from favorites' : 'Add to favorites'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CocktailDetails;
