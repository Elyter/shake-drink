import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const AccountScreen = ({ navigation }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = ({ navigation }) => {
        navigation.navigate('Login')
    };

    return (
        <View style={{        flex: 1,
            alignItems: 'center',
            justifyContent: 'center',}}>
            {isLoggedIn ? (
                <View>
                    <Text>Account Info</Text>
                    {/* display account info here */}
                </View>
            ) : (
                <View>
                    <Button title="Connexion ?" onPress={handleLogin} />
                </View>
            )}
            <Button title="Créer un cocktail" onPress={() => navigation.navigate("AddCocktail")} />
        </View>
    );
};

export default AccountScreen;
