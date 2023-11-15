import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "../components/Login/LoginScreen";
import RegisterScreen from "../components/Login/RegisterScreen";
import CommunityScreen from '../components/Community/CommunityScreen';
import HomeScreen from '../components/Home/HomeScreen';
import SelectSoftScreen from '../components/Home/SelectSoftScreen';
import ResultScreen from '../components/Home/ResultScreen';

const Stack = createNativeStackNavigator();

export default function LoginNav() {
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
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
            headerShown: false
        }}/>
        <Stack.Screen name="SelectSoft" component={SelectSoftScreen}/>
        <Stack.Screen name="Results" component={ResultScreen}/>
      </Stack.Navigator>
  );
}