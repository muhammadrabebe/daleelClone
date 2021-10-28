import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {backIcon, locationIcon_Large} from '../assets/icons';

const customHeader = ({navigation, title}) => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          {backIcon}
        </TouchableOpacity>
        <Text style={{fontSize: 18, color: '#ffcc33', width: '75%'}}>
          {title}
        </Text>
      </View>
      {title.toLowerCase() !== 'about us' &&
      title.toLowerCase() !== 'contact us' ? (
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          {locationIcon_Large}
        </View>
      ) : null}
    </View>
  );
};

export default customHeader;
