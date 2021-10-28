import React from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  searchIcon,
  backIcon,
  locationIcon_Large,
  locationIcon,
} from '../assets/icons';

const categoryItemList = props => {
  const item = props.route.params.item;
  const [searchValue, setSearchValue] = React.useState('');
  const [itemLocations, setItemLocations] = React.useState(item.locations);
  const [originalItemLocation, setOriginalItemLocation] = React.useState(
    item.locations,
  );

  function renderheader() {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            {backIcon}
          </TouchableOpacity>
          <Text style={{fontSize: 18, color: '#ffcc33', width: '75%'}}>
            {item.name}
          </Text>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          {locationIcon_Large}
        </View>
      </View>
    );
  }

  function renderSearchBox() {
    function search(val) {
      setSearchValue(val);
      const newItemList = originalItemLocation.filter(item => {
        return item.name.toLowerCase().includes(val.toLowerCase());
      });
      setItemLocations(newItemList);
    }
    return (
      <View
        style={{
          flexDirection: 'row',
          margin: 8,
          borderRadius: 5,
          borderWidth: 1,
          alignItems: 'center',
          borderColor: 'white',
          backgroundColor: 'white',
        }}>
        {searchIcon}
        <TextInput
          style={{width: '100%', padding: 8, fontSize: 16}}
          placeholder="Search"
          onChangeText={value => {
            search(value);
          }}
          value={searchValue}
        />
      </View>
    );
  }
  function renderItemLocations() {
    const renderItem = ({item}) => {
      return (
        <TouchableOpacity
          style={{flexDirection: 'row'}}
          onPress={() => props.navigation.navigate('CategoryDetails', {item})}>
          <View style={{alignItems: 'center'}}>
            <Image
              source={item.locationImage}
              style={{width: 100, height: 100}}
              resizeMode="contain"
            />
          </View>
          <View style={{justifyContent: 'center', alignItems: 'flex-start'}}>
            <Text style={{color: '#ffcc33', fontSize: 20, margin: 10}}>
              {item.name}
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              {locationIcon}
              <Text style={{fontSize: 16, width: '75%'}}>
                {item.locationDetails}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    };
    return (
      <FlatList
        style={{
          marginTop: 15,
          backgroundColor: 'white',
          margin: 8,
          borderRadius: 15,
        }}
        renderItem={renderItem}
        data={itemLocations}
        keyExtractor={item => item.key}
        ItemSeparatorComponent={() => (
          <View
            style={{
              borderWidth: 0.5,
              borderColor: 'lightgray',
              margin: 10,
            }}></View>
        )}
      />
    );
  }
  return (
    <View style={{flex: 1}}>
      {renderheader()}
      {renderSearchBox()}
      {renderItemLocations()}
    </View>
  );
};
export default categoryItemList;
