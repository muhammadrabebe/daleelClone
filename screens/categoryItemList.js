import React from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {searchIcon, locationIcon} from '../assets/icons';
import CustomHeader from '../components/customHeader';
import styles from './styles/categoryItemListStyle';

const categoryItemList = props => {
  const item = props.route.params.item;
  const [searchValue, setSearchValue] = React.useState('');
  const [itemLocations, setItemLocations] = React.useState(item.locations);
  const [originalItemLocation, setOriginalItemLocation] = React.useState(
    item.locations,
  );

  function renderheader() {
    return <CustomHeader navigation={props.navigation} title={item.name} />;
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
      <View style={styles.searchBoxContainer}>
        {searchIcon}
        <TextInput
          style={styles.searchBoxTextInput}
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
          style={styles.itemLocationContainer}
          onPress={() => props.navigation.navigate('CategoryDetails', {item})}>
          <View style={styles.imageContainer}>
            <Image
              source={item.locationImage}
              style={styles.imageStyle}
              resizeMode="contain"
            />
          </View>
          <View style={styles.item}>
            <Text style={styles.itemLocationName}>{item.name}</Text>
            <View style={styles.itemLocationIconContainer}>
              {locationIcon}
              <Text style={styles.itemLocationDetails}>
                {item.locationDetails}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    };
    return (
      <FlatList
        style={styles.flatlistStyle}
        renderItem={renderItem}
        data={itemLocations}
        keyExtractor={item => item.key}
        ItemSeparatorComponent={() => (
          <View style={styles.flatlistDivider}></View>
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
