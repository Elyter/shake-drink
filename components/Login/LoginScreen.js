import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // perform login logic here
        navigation.reset({
            index: 0,
            routes: [{ name: 'App' }],
          });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={[styles.input, {backgroundColor: 'white'}]}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                autoFocus={true}
                inputMode="email"
                autoComplete="email"
                autoCapitalize="none"
            />
            <TextInput
                style={[styles.input, {backgroundColor: 'white'}]}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop: 20}} onPress={() => navigation.navigate('Register')}>
                <Text style={styles.buttonText}>Créer un compte ?</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3A0CA3',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 24,
        marginTop: -100,
        color: '#fff',
    },
    input: {
        borderWidth: 1,
        borderRadius: 5,
        padding: 12,
        marginBottom: 16,
        width: '80%',
        fontSize: 16,
    },
    button: {
        backgroundColor: '#4361EE',
        borderRadius: 5,
        padding: 12,
        alignItems: 'center',
        width: '80%',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default LoginScreen;
