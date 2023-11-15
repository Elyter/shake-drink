import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const RegisterScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = () => {
        // handle registration logic here
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>
            <TextInput
                style={[styles.input, {backgroundColor: 'white'}]}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
            />
            <TextInput
                style={[styles.input, {backgroundColor: 'white'}]}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TextInput
                style={[styles.input, {backgroundColor: 'white'}]}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
            />
            <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>Register</Text>
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

export default RegisterScreen;
