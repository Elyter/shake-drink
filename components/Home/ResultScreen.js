import { View, Text, FlatList, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../colors';

const ResultScreen = ({route}) => {
  const [cocktails, setData] = React.useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetchResult();
  }, []);

  const fetchResult = async () => {
    try {
      const response = await axios.post('http://localhost:3000/cocktails', route.params.drinks);
      response.data.sort((a, b) => a.missingDrinksCount - b.missingDrinksCount);
      setData(response.data);
    } catch (error) {
      if (error.response && error.response.status === 500) {
        alert(error.response.data.message);
      } else {
        console.error('Error fetching softs:', error);
      }
    }
  };

  const handleCocktailPress = (id) => {
    navigation.navigate('CocktailDetails', { id });
  };


  const renderCocktail = ({ item, index }) => (
    <TouchableOpacity onPress={() => handleCocktailPress(item.id)} style={styles.cocktailsTouchableOpacity}>
      <View style={styles.coktailsContainer}>
        <View style={{ alignItems: "center", flex: 1 }}>
          <View style={{ flexDirection: "row", alignItems: "center"}}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={{ width: 12, height: 12, borderRadius: 100, backgroundColor: item.community ? "#f47a60" : "#ccc", marginLeft: 10 }}></View>
          </View>
          <View style={styles.divider}></View>
          <View style={{flex: 1, flexDirection: "row"}}>
          {item.drinks.map((drink, index) => (
            <Text key={index} style={{ color: drink.requested ? "#000" : "#f00" }}>{drink.name}, </Text>
          ))}
          </View>
          
        </View>
        <View style={styles.scoreContainer}>
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

const windowWidth = Dimensions.get('window').width - 40;


const styles = StyleSheet.create({
  cocktailsTouchableOpacity: {
    flex: 1,
    alignContent: "center", 
    alignItems: "center" , 
    marginTop: 15,
    width: windowWidth,
    justifyContent: "center" 
  },
  coktailsContainer: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3, 
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.secondaire,
  },
  divider: {
    height: 2,
    width: "60%",
    backgroundColor: COLORS.orange,
    marginBottom: 10,
    marginTop: 5
  },
  scoreContainer: {
    width: 30,
    height: 30,
    borderRadius: 100,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center" 
  },
  searchButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default ResultScreen;
