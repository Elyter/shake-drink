import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Dimensions } from 'react-native';
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

  const windowWidth = Dimensions.get('window').width - 40;

  const renderCocktail = ({ item, index }) => (
    <TouchableOpacity onPress={() => handleCocktailPress(item.id)} style={{ flex: 1, alignContent: "center", alignItems: "center" , marginTop: 15, width: windowWidth, justifyContent: "center" }}>
      <View style={{ padding: 10, flexDirection: "row", alignItems: "center", backgroundColor: "#FFF", borderRadius: 10, shadowColor: 'black', shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.2, shadowRadius: 3, elevation: 3, }}>
        <View style={{ alignItems: "center", flex: 1 }}>
          <View style={{ flexDirection: "row", alignItems: "center"}}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: "#3E6777"}}>{item.title}</Text>
            <View style={{ width: 12, height: 12, borderRadius: 100, backgroundColor: item.community ? "#f47a60" : "#ccc", marginLeft: 10 }}></View>
          </View>
          <View style={{height: 2, width: "60%", backgroundColor: "#f47a60", marginBottom: 10, marginTop: 5}}></View>
          <Text>{item.ingredients.join(', ')}</Text>
        </View>
        <View style={{ width: 30, height: 30, borderRadius: 100, backgroundColor: "#ccc", justifyContent: "center", alignItems: "center" }}>
          <Text style={{ textAlign: "center" }}>145</Text>
        </View>
      </View>
    </TouchableOpacity> 
  );

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <FlatList
        data={cocktails}
        renderItem={renderCocktail}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default ResultScreen;
