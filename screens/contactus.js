import React from 'react'
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { backIcon } from '../assets/icons';

const contactus = (props) => {
    function renderheader() {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <TouchableOpacity onPress={() => props.navigation.goBack()} >
                        {backIcon}
                    </TouchableOpacity>
                    <Text style={{ fontSize: 18, color: '#ffcc33', width: "75%" }}>Contact us</Text>
                </View>
            </View>
        )
    }
    function renderForm() {
        return (
            <View>
                <TextInput
                    placeholder="Name"
                    keyboardType="default"
                    style={{
                        backgroundColor: 'white',
                        fontSize: 14,
                        padding: 8,
                        width: '95%',
                        alignSelf: 'center',
                        borderRadius: 6,
                        borderWidth: 1,
                        borderColor: 'lightgray',
                        marginVertical: 10,
                    }}
                />
                <TextInput
                    placeholder="Email"
                    keyboardType="email-address"
                    style={{
                        backgroundColor: 'white',
                        fontSize: 14,
                        padding: 8,
                        width: '95%',
                        alignSelf: 'center',
                        borderRadius: 6,
                        marginVertical: 10,
                        borderWidth: 1,
                        borderColor: 'lightgray',
                    }}
                />
                <TextInput
                    placeholder="Mobile"
                    keyboardType="phone-pad"
                    style={{
                        backgroundColor: 'white',
                        fontSize: 14,
                        padding: 8,
                        width: '95%',
                        alignSelf: 'center',
                        borderRadius: 6,
                        marginVertical: 10,
                        borderWidth: 1,
                        borderColor: 'lightgray',
                    }}
                />
                <TextInput
                    placeholder="Comment"
                    keyboardType="default"
                    style={{
                        backgroundColor: 'white',
                        fontSize: 14,
                        padding: 8,
                        width: '95%',
                        alignSelf: 'center',
                        borderRadius: 6,
                        marginVertical: 10,
                        borderWidth: 1,
                        borderColor: 'lightgray',
                    }}
                    multiline={true}
                    numberOfLines={3}
                />
                <TouchableOpacity style={{
                    backgroundColor: "#ffcc33",
                    alignItems: 'center',
                    padding: 10,
                    margin: 8,
                    alignSelf: 'center',
                    borderRadius: 6,
                    width: '95%'
                }}
                    onPress={() => Alert.alert('Thank you !')}
                >
                    <Text style={{ fontSize: 18, color: 'white', }}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={{ flex: 1 }}>
            {renderheader()}
            {renderForm()}
        </View>
    )
}

export default contactus
