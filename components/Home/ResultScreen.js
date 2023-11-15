import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const results = [
    {
        id: 1,
        image: require('./images/result1.png'),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        id: 2,
        image: require('./images/result2.png'),
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id: 3,
        image: require('./images/result3.png'),
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
];

const ResultScreen = () => {
    return (
        <View style={styles.container}>
            {results.map(result => (
                <View key={result.id} style={styles.card}>
                    <Image source={result.image} style={styles.image} />
                    <Text style={styles.description}>{result.description}</Text>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16
    },
    image: {
        width: 80,
        height: 80,
        marginRight: 16
    },
    description: {
        flex: 1,
        fontSize: 16
    }
});

export default ResultScreen;
