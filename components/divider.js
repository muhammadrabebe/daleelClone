import React from 'react';
import {View, Text} from 'react-native';

const divider = ({title}) => {
  return (
    <View style={{marginVertical: 20}}>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            backgroundColor: 'lightgray',
            height: 2,
            flex: 1,
            alignSelf: 'center',
          }}
        />
        <Text
          style={{
            alignSelf: 'center',
            paddingHorizontal: 5,
            fontSize: 20,
            fontWeight: 'bold',
            color: 'black',
            letterSpacing: 4,
          }}>
          {title}
        </Text>
        <View
          style={{
            backgroundColor: 'lightgray',
            height: 2,
            flex: 1,
            alignSelf: 'center',
          }}
        />
      </View>
    </View>
  );
};

export default divider;
