import React from 'react'
import { Alert, Image, Text, View, SafeAreaView } from 'react-native'
import {
    DrawerContentScrollView,
    DrawerItem,
} from '@react-navigation/drawer';
import { homeIcon, aboutIcon, locationIcon, contactIcon, privacyIcon } from '../assets/icons';
import headerIcon from '../assets/images/find.png'

const customDrawer = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <DrawerContentScrollView >
                <Image source={headerIcon} style={{ width: 100, height: 100, alignSelf: 'center', margin: 24 }} />
                <DrawerItem
                    label="Home"
                    labelStyle={{ color: 'black', fontFamily: 'serif', fontWeight: 'bold' }}
                    icon={() => homeIcon}
                    activeBackgroundColor="#ffcc33"
                    style={{ borderBottomWidth: 0.5, borderRadius: 10 }}
                    onPress={() => navigation.navigate('Home')}
                    pressColor="#ffcc33"
                />
                <DrawerItem
                    label="Suggest a place"
                    labelStyle={{ color: 'black', fontFamily: 'serif', fontWeight: 'bold' }}
                    activeBackgroundColor="#ffcc33"
                    icon={() => locationIcon}
                    onPress={() => Alert.alert('Suggest a place page')}
                    style={{ borderBottomWidth: 0.5, borderRadius: 10 }}
                    pressColor="#ffcc33"
                />
                <DrawerItem
                    label="Contact Us"
                    labelStyle={{ color: 'black', fontFamily: 'serif', fontWeight: 'bold' }}
                    activeBackgroundColor="#ffcc33"
                    icon={() => contactIcon}
                    style={{ borderBottomWidth: 0.5, borderRadius: 10 }}
                    onPress={() => navigation.navigate('ContactUs')}
                    pressColor="#ffcc33"
                />
                <DrawerItem
                    label="About Us"
                    labelStyle={{ color: 'black', fontFamily: 'serif', fontWeight: 'bold' }}
                    activeBackgroundColor="#ffcc33"
                    icon={() => aboutIcon}
                    style={{ borderBottomWidth: 0.5, borderRadius: 10 }}
                    onPress={() => navigation.navigate('AboutUs')}
                    pressColor="#ffcc33"
                />
                <DrawerItem
                    label="Privacy Policy"
                    labelStyle={{ color: 'black', fontFamily: 'serif', fontWeight: 'bold' }}
                    activeBackgroundColor="#ffcc33"
                    icon={() => privacyIcon}
                    style={{ borderBottomWidth: 0.5, borderRadius: 10 }}
                    onPress={() => Alert.alert('Privacy Policy page')}
                    pressColor="#ffcc33"
                />
            </DrawerContentScrollView>
            <View style={{ alignItems: 'center', margin: 8 }}>
                <Text style={{ fontSize: 10, color: 'black' }}>Copyright {'\u00A9'} 2020 Daleel App. All Rights Reserved</Text>
            </View>
        </SafeAreaView>
    )
}

export default customDrawer
