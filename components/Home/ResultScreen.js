import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const cocktails = [
  { id: 1, title: 'Mojito', ingredients: ['Rhum', 'Menthe', 'Citron vert', 'Sucre', 'Eau gazeuse'], community: false },
  { id: 2, title: 'Piña Colada', ingredients: ['Rhum blanc', 'Lait de coco', 'Jus d\'ananas'], community: false},
  { id: 3, title: 'Cosmopolitan', ingredients: ['Vodka', 'Triple sec', 'Jus de cranberry', 'Jus de citron'], community: true },
  { id: 1, title: 'Mojito', ingredients: ['Rhum', 'Menthe', 'Citron vert', 'Sucre', 'Eau gazeuse'], community: false },
  { id: 2, title: 'Piña Colada', ingredients: ['Rhum blanc', 'Lait de coco', 'Jus d\'ananas'], community: false},
  { id: 3, title: 'Cosmopolitan', ingredients: ['Vodka', 'Triple sec', 'Jus de cranberry', 'Jus de citron'], community: true },
  { id: 1, title: 'Mojito', ingredients: ['Rhum', 'Menthe', 'Citron vert', 'Sucre', 'Eau gazeuse'], community: false },
  { id: 2, title: 'Piña Colada', ingredients: ['Rhum blanc', 'Lait de coco', 'Jus d\'ananas'], community: false},
  { id: 3, title: 'Cosmopolitan', ingredients: ['Vodka', 'Triple sec', 'Jus de cranberry', 'Jus de citron'], community: true },
  { id: 1, title: 'Mojito', ingredients: ['Rhum', 'Menthe', 'Citron vert', 'Sucre', 'Eau gazeuse'], community: false },
  { id: 2, title: 'Piña Colada', ingredients: ['Rhum blanc', 'Lait de coco', 'Jus d\'ananas'], community: false},
  { id: 3, title: 'Cosmopolitan', ingredients: ['Vodka', 'Triple sec', 'Jus de cranberry', 'Jus de citron'], community: true },
  { id: 1, title: 'Mojito', ingredients: ['Rhum', 'Menthe', 'Citron vert', 'Sucre', 'Eau gazeuse'], community: false },
  { id: 2, title: 'Piña Colada', ingredients: ['Rhum blanc', 'Lait de coco', 'Jus d\'ananas'], community: false},
  { id: 3, title: 'Cosmopolitan', ingredients: ['Vodka', 'Triple sec', 'Jus de cranberry', 'Jus de citron'], community: true },
  
  // Ajoutez d'autres cocktails avec leurs ingrédients ici
];

const ResultScreen = () => {
  const navigation = useNavigation();

  const handleCocktailPress = (id) => {
    navigation.navigate('CocktailDetails', { id });
  };

  const renderCocktail = ({ item, index }) => (
    <TouchableOpacity onPress={() => handleCocktailPress(item.id)} style={{flex: 1, alignContent: "center", alignItems: "center"}}>
      <View style={{ padding: 10, flexDirection: "row", alignItems: "center"}}>
        <View style={{alignItems: "center", flex:1}}>
        {item.community && <Text>Communauté</Text>}
            <View style={{flexDirection: "row", alignItems: "center", marginBottom: 20}}>
                <Text style={{fontSize: 40}}>🍸</Text>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: "#3E6777" }}>{item.title}</Text>
            </View>
            <Text>{item.ingredients.join(', ')}</Text>
        </View>
        <View style={{width: 30, height: 30, borderRadius: 100, backgroundColor: "#ccc", justifyContent: "center", alignItems: "center"}}>
          <Text style={{textAlign: "center"}}>145</Text>
        </View>
      </View>
      <View style={{ backgroundColor: "#DC7F66", height: 3, width: "80%", borderRadius: 10}}></View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={cocktails}
        renderItem={renderCocktail}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default ResultScreen;
