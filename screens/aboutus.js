import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { find } from '../assets/icons_png'
import { backIcon } from '../assets/icons';

const aboutus = (props) => {
    function renderheader() {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <TouchableOpacity onPress={() => props.navigation.goBack()} >
                        {backIcon}
                    </TouchableOpacity>
                    <Text style={{ fontSize: 18, color: '#ffcc33', width: "75%" }}>About us</Text>
                </View>
            </View>
        )
    }
    function renderLogoHeader() {
        return (
            <View style={{ alignSelf: 'center', padding: 15, justifyContent: 'center', marginBottom: 10 }}>
                <Image
                    source={find}
                    style={{
                        width: 100,
                        height: 100,
                    }}
                />
            </View>
        )
    }
    function renderAbout() {
        return (
            <View style={{ width: '90%', alignSelf: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 15, fontFamily: 'serif', letterSpacing: 1, color: 'black' }}>
                    The name Daleel means "Yellow Pages". The Yellow pages were introduced in about 1883, when a printer in the United States ran out of white paper whilst working on a regular
                    telephone directory and user yellow paper instead. Since then, the yellow pages brand and its walking Fingers tradmark have become synonymous with companies buyers and sellers worldwide.
                    Daleel Lists near to thousands of companies and organizations. it will therefore become the go-to place if you need to find a directory of Kuwaiti businesses.
                    Daleel is an application dedicated to serve the kuwaiti public in giving them directions and connecting them to their surroundings. Inspired by 'yellow pages', Daleel aims to compress everthing the user needs to accomplish his or her task of the day.
                    Find your location , follow the steps and reach safely.
                </Text>
            </View>
        )
    }
    return (
        <View style={{ flex: 1 }}>
            {renderheader()}
            {renderLogoHeader()}
            {renderAbout()}
        </View>
    )
}

export default aboutus
