import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeStack from './homeStack';
import AboutStack from './aboutStack';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="HomeStack"
                screenOptions={{
                    headerStyle: { backgroundColor: 'pink' },
                    headerTintColor: 'slate',
                    headerTitleStyle: { fontWeight: 'bold' },
                }}>
                <Drawer.Screen name="HomeStack" component={HomeStack} options={{
                    title: 'Home Page',
                }} />
                <Drawer.Screen name="AboutStack" component={AboutStack} options={{
                    title: 'About Page',
                }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default DrawerNavigator;
