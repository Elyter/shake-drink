import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "../components/Login/LoginScreen";
import RegisterScreen from "../components/Login/RegisterScreen";
import CommunityScreen from '../components/Community/CommunityScreen';
import HomeScreen from '../components/Home/HomeScreen';
import SelectSoftScreen from '../components/Home/SelectSoftScreen';
import ResultScreen from '../components/Home/ResultScreen';
import CocktailDetails from '../components/CocktailDetails/CocktailDetails';
import AccountScreen from '../components/Account/AccountScreen';
import AddCocktail from '../components/Account/AddCocktail';

const Stack = createNativeStackNavigator();

export default function AccountNav() {
  return (
      <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#3A0CA3',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
      }}>
        <Stack.Screen name="AccountScreen" component={AccountScreen} options={{
            headerShown: false
        }}/>
        <Stack.Screen name="AddCocktail" component={AddCocktail} options={{
            headerShown: false
        }}/>
      </Stack.Navigator>
  );
}