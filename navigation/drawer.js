import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/home'
import ContactUs from '../screens/contactus'
import AboutUs from '../screens/aboutus'
import HeaderBar from '../components/headerBar';
import CustomDrawer from '../components/customDrawer';

const Drawer = createDrawerNavigator();

const drawer = (props) => {
    return (
        <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />} screenOptions={{
            drawerType: 'slide',
            drawerStyle: {
                backgroundColor: 'white',
            },
        }} >
            <Drawer.Screen name="Home" component={Home}
                options={{
                    headerShown: true,
                    animationEnabled: true,
                    animationTypeForReplace: 'pop',
                    gestureEnabled: true,
                    header: () => <HeaderBar navigation={props.navigation} />
                }} />
            <Drawer.Screen name="ContactUs" component={ContactUs} options={{ headerShown: false }} />
            <Drawer.Screen name="AboutUs" component={AboutUs} options={{ headerShown: false }} />
        </Drawer.Navigator >
    )
}
export default drawer