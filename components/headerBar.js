import React from 'react'
import { View, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { searchIcon, menuIcon } from '../assets/icons';
import { DrawerActions } from '@react-navigation/native';

const headerBar = (props) => {
    const [searchValue, setSearchValue] = React.useState("");

    function renderSearchBox() {
        return (
            <View style={{ flexDirection: 'row', margin: 8, borderRadius: 20, borderWidth: 1, alignItems: 'center', borderColor: 'lightgray', marginBottom: 12 }}>
                {searchIcon}
                <TextInput
                    style={{ width: "100%", borderRadius: 20, padding: 8 }}
                    placeholder="Search"
                    onChangeText={(value) => setSearchValue(value)}
                />
            </View>
        )
    }
    return (
        <View style={{ backgroundColor: '#ffcc33', width: '100%' }}>
            <TouchableOpacity onPress={() => props.navigation.dispatch(DrawerActions.openDrawer())}>
                {menuIcon}
            </TouchableOpacity>
            {renderSearchBox()}
        </View>
    )
}

export default headerBar
