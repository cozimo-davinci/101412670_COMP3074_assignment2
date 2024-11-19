import { createNativeStackNavigator } from '@react-navigation/native-stack';


import About from '../screens/About';

const Stack = createNativeStackNavigator();

const AboutStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="About"
            screenOptions={{
                headerStyle: { backgroundColor: 'pink' },
                headerTintColor: 'slate',
                headerTitleStyle: { fontWeight: 'bold' },
                headerShown: false
            }}
        >

            <Stack.Screen
                name="About"
                component={About}
                options={{ title: 'About Page' }}
            />
        </Stack.Navigator>
    );
};

export default AboutStack;
