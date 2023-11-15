import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../components/Home/HomeScreen';
import AccountScreen from '../components/AccountScreen';
import { Ionicons } from '@expo/vector-icons';
import RecipeScreen from '../components/RecipeScreen';
import HomeNav from './HomeNav';
import CommunityNav from './CommunityNav';

const Tab = createBottomTabNavigator();

import NewCocktailScreen from '../components/NewCocktailScreen';
import CommunityScreen from '../components/Community/CommunityScreen';

export default function LoginNav() {
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name="Home" 
                component={HomeNav} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen 
                name="Cocktail Community" 
                component={CommunityNav}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="business" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen 
                name="Recipe" 
                component={RecipeScreen} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="book" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen 
                name="Account" 
                component={AccountScreen} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person" size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
