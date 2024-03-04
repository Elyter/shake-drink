import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, ScrollView } from 'react-native';

const AddCocktail = ({ navigation }) => {
  const [searchText1, setSearchText1] = useState('');
  const [searchText2, setSearchText2] = useState('');
  const [quantity1, setQuantity1] = useState('');
  const [quantity2, setQuantity2] = useState('');
  const [unit1, setUnit1] = useState('');
  const [unit2, setUnit2] = useState('');
  const [selectedItems1, setSelectedItems1] = useState([]);
  const [selectedItems2, setSelectedItems2] = useState([]);
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [ingredientsList, setIngredientsList] = useState([]);

  const data = [
    { id: 1, name: 'Jus d\'ananas' },
    { id: 2, name: 'Pomme' },
    { id: 3, name: 'Banane' },
    { id: 4, name: 'Mangue' },
    { id: 5, name: 'Orange' },
    { id: 6, name: 'Jus de pomme' },
    { id: 7, name: 'Jus de banane' },
    { id: 8, name: 'Jus de mangue' },
    { id: 9, name: 'Jus d\'orange' },
    { id: 10, name: 'Ananas' },
    // Ajoutez autant d'entrées que nécessaire
  ];

  const renderItem = (item, setSelectedItems, selectedItems, setQuantity, setUnit) => (
    <TouchableOpacity
      onPress={() => toggleSelection(item, setSelectedItems, selectedItems)}
      style={{ padding: 10, backgroundColor: selectedItems.includes(item.id) ? 'lightblue' : 'white' }}>
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );

  const toggleSelection = (item, setSelectedItems, selectedItems) => {
    const itemId = item.id;
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter(id => id !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  const handleDropdown1 = () => {
    setShowDropdown1(!showDropdown1);
  };

  const handleDropdown2 = () => {
    setShowDropdown2(!showDropdown2);
  };

  const handleSelectQuantity1 = (quantity) => {
    setQuantity1(quantity);
    setShowDropdown1(false);
  };

  const handleSelectQuantity2 = (quantity) => {
    setQuantity2(quantity);
    setShowDropdown2(false);
  };

  const handleAddIngredient = (selectedItems, quantity, unit) => {
    const selectedIngredients = selectedItems.map(itemId => {
      const item = data.find(i => i.id === itemId);
      return {
        id: itemId,
        name: item.name,
        quantity: quantity,
        unit: unit
      };
    });
    setIngredientsList([...ingredientsList, ...selectedIngredients]);
  };

  const handleSubmit = () => {
    console.log("Ingrédients :", ingredientsList);
    // Réinitialiser la sélection
    setSelectedItems1([]);
    setSelectedItems2([]);
    setQuantity1('');
    setQuantity2('');
    setUnit1('');
    setUnit2('');
    setIngredientsList([]);
  };

  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>
      <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, paddingHorizontal: 10 }} placeholder="Nom du cocktail" />
      <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, paddingHorizontal: 10 }} placeholder="Description" />
      <View style={{ marginBottom: 20 }}>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
          placeholder="Rechercher..."
          onChangeText={text => setSearchText1(text)}
          value={searchText1}
        />
        <FlatList
          style={{ maxHeight: 150 }}
          data={data.filter(item => item.name.toLowerCase().includes(searchText1.toLowerCase()))}
          renderItem={({ item }) => renderItem(item, setSelectedItems1, selectedItems1, setQuantity1, setUnit1)}
          keyExtractor={item => item.id.toString()}
          extraData={selectedItems1}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextInput
            style={{ flex: 1, height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10, marginRight: 50 }}
            placeholder="Quantité..."
            onChangeText={text => setQuantity1(text)}
            value={quantity1}
            keyboardType="numeric"
          />
          <TouchableOpacity onPress={handleDropdown1} style={{ flex: 1, height: 40, justifyContent: 'center', borderWidth: 1, borderColor: 'gray', marginBottom: 10 }}>
            <Text style={{ paddingHorizontal: 10 }}>{quantity1 !== '' ? quantity1 : 'Unité'}</Text>
          </TouchableOpacity>
        </View>
        {showDropdown1 &&
          <ScrollView style={{ maxHeight: 100, marginBottom: 10 }}>
            {[1, 2, 3, 4, 5].map((value, index) => (
              <TouchableOpacity key={index} onPress={() => handleSelectQuantity1(value)} style={{ padding: 10 }}>
                <Text>{value}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        }
      </View>
      <View style={{ marginBottom: 20 }}>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
          placeholder="Rechercher..."
          onChangeText={text => setSearchText2(text)}
          value={searchText2}
        />
        <FlatList
          style={{ maxHeight: 150 }}
          data={data.filter(item => item.name.toLowerCase().includes(searchText2.toLowerCase()))}
          renderItem={({ item }) => renderItem(item, setSelectedItems2, selectedItems2, setQuantity2, setUnit2)}
          keyExtractor={item => item.id.toString()}
          extraData={selectedItems2}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextInput
            style={{ flex: 1, height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10, marginRight: 50 }}
            placeholder="Quantité..."
            onChangeText={text => setQuantity2(text)}
            value={quantity2}
            keyboardType="numeric"
          />
          <TouchableOpacity onPress={handleDropdown2} style={{ flex: 1, height: 40, justifyContent: 'center', borderWidth: 1, borderColor: 'gray', marginBottom: 10 }}>
            <Text style={{ paddingHorizontal: 10 }}>{quantity2 !== '' ? quantity2 : 'Unité'}</Text>
          </TouchableOpacity>
        </View>
        {showDropdown2 &&
          <ScrollView style={{ maxHeight: 100, marginBottom: 10 }}>
            {[1, 2, 3, 4, 5].map((value, index) => (
              <TouchableOpacity key={index} onPress={() => handleSelectQuantity2(value)} style={{ padding: 10 }}>
                <Text>{value}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        }
      </View>
      <TouchableOpacity
        onPress={() => {
          handleAddIngredient(selectedItems1, quantity1, unit1);
          handleAddIngredient(selectedItems2, quantity2, unit2);
        }}
        style={{ backgroundColor: 'blue', padding: 10, alignItems: 'center', borderRadius: 5 }}>
        <Text style={{ color: 'white' }}>Ajouter Ingrédient</Text>
      </TouchableOpacity>
      <FlatList
        style={{ marginTop: 20 }}
        data={ingredientsList}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', marginBottom: 10 }}>
            <Text style={{ marginRight: 10 }}>{item.name} :</Text>
            <Text style={{ marginRight: 10 }}>{item.quantity}</Text>
            <Text>{item.unit}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <TouchableOpacity
        onPress={handleSubmit}
        style={{ backgroundColor: 'green', padding: 10, alignItems: 'center', borderRadius: 5, marginTop: 20 }}>
        <Text style={{ color: 'white' }}>Envoyer</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default AddCocktail;
