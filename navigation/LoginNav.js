import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "../components/Login/LoginScreen";
import RegisterScreen from "../components/Login/RegisterScreen";
import AppNav from '../components/HomeScreen';

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
        <Stack.Screen name="Login" component={LoginScreen} options={{
            headerShown: false
        }}/>
        <Stack.Screen name="Register" component={RegisterScreen}/>
      </Stack.Navigator>
  );
}