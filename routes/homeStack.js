import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import About from '../screens/About';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: { backgroundColor: 'pink' },
                headerTintColor: 'slate',
                headerTitleStyle: { fontWeight: 'bold' },
                headerShown: false
            }}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen
                name="About"
                component={About}
                options={{ title: 'About Page' }}
            />
        </Stack.Navigator>
    );
};

export default HomeStack;
