import { createStackNavigator } from '@react-navigation/stack';
import CommunityScreen from '../components/Community/CommunityScreen';
import PostScreen from '../components/PostScreen';

const Stack = createStackNavigator();

function CommunityStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Community" component={CommunityScreen} />
            <Stack.Screen name="Post" component={PostScreen} />
        </Stack.Navigator>
    );
}

export default CommunityStack;
