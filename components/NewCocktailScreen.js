import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const NewCocktailScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');

    const handleCreateCocktail = () => {
        // Here you can add your logic to create a new cocktail recipe
        // using the name, ingredients, and instructions state variables
        // and then navigate to the screen where you can publish it
        navigation.navigate('PublishCocktailScreen');
    };

    return (
        <View>
            <Text>Name:</Text>
            <TextInput value={name} onChangeText={setName} />

            <Text>Ingredients:</Text>
            <TextInput value={ingredients} onChangeText={setIngredients} />

            <Text>Instructions:</Text>
            <TextInput value={instructions} onChangeText={setInstructions} />

            <Button title="Create Cocktail" onPress={handleCreateCocktail} />
        </View>
    );
};

export default NewCocktailScreen;
