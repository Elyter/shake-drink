import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../components/Home/HomeScreen';
import AccountScreen from '../components/Account/AccountScreen';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import RecipeScreen from '../components/RecipeScreen';
import HomeNav from './HomeNav';
import CommunityNav from './CommunityNav';

const Tab = createBottomTabNavigator();

import NewCocktailScreen from '../components/NewCocktailScreen';
import CommunityScreen from '../components/Community/CommunityScreen';
import AccountNav from './AccountNav';

export default function LoginNav() {
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name="Recherche" 
                component={HomeNav} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="search" size={size} color={color} />
                    ),
                    tabBarStyle: {
                        backgroundColor: '#7DDBD9',
                    },
                    headerStyle: {
                        backgroundColor: '#7DDBD9',
                    },
                }}
            />
            <Tab.Screen 
                name="Classement" 
                component={CommunityNav}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="leaderboard" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen 
                name="Favoris" 
                component={RecipeScreen} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="book" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen 
                name="Compte" 
                component={AccountNav} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person" size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
