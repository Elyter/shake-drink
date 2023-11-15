import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResultScreen = ({ cocktailName, ingredients, instructions }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{cocktailName}</Text>
            <Text style={styles.subtitle}>Ingredients:</Text>
            <Text style={styles.ingredients}>{ingredients}</Text>
            <Text style={styles.subtitle}>Instructions:</Text>
            <Text style={styles.instructions}>{instructions}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
    ingredients: {
        fontSize: 16,
        marginBottom: 10,
    },
    instructions: {
        fontSize: 16,
    },
});

export default ResultScreen;
