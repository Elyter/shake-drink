import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Recipe')}>
        <Text>Voir la recette</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen;
