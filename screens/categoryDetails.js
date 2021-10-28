import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from 'react-native';
import {
  shareIcon,
  backIcon,
  emailIcon,
  suggestIcon,
  instagramIcon,
  twitterIcon,
  websiteIcon,
  starIcon,
} from '../assets/icons';
import MapView from 'react-native-maps';
import styles from './styles/categoryDetailsStyle';

const categoryDetails = props => {
  const item = props.route.params.item;

  function renderImage() {
    return (
      <View style={{backgroundColor: 'white'}}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          {backIcon}
        </TouchableOpacity>
        <Image
          source={item.locationImage}
          style={{width: '100%', height: 200}}
          resizeMode="contain"
        />
      </View>
    );
  }
  function renderCategoryItemDetails() {
    return (
      <View style={{flex: 1}}>
        <View style={{marginHorizontal: 15, marginVertical: 8}}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
            {item.name}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 5,
          }}>
          <View style={{flexDirection: 'row'}}>
            {starIcon}
            {instagramIcon}
            {twitterIcon}
          </View>
          <View>{shareIcon}</View>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#ffcc33',
            alignItems: 'center',
            padding: 10,
            borderRadius: 10,
            marginHorizontal: 12,
          }}>
          <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold'}}>
            CALL
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  function renderAboutus() {
    const [isExpand, setIsExpand] = React.useState(false);

    return (
      <View style={{flex: 1, marginVertical: 10}}>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 10,
            width: '90%',
            alignSelf: 'center',
          }}>
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
              color: 'black',
              fontFamily: 'serif',
            }}>
            ABOUT US
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
        <View
          style={{
            width: '95%',
            alignSelf: 'center',
            backgroundColor: 'white',
            padding: 10,
            borderRadius: 25,
          }}>
          <Text
            style={{textAlign: 'center'}}
            numberOfLines={isExpand ? null : 2}>
            {item.about}
          </Text>
          <Pressable
            style={{alignSelf: 'center', marginVertical: 5}}
            onPress={() => setIsExpand(!isExpand)}>
            <Text style={{fontWeight: 'bold', color: '#ffcc33'}}>
              {!isExpand ? 'More +' : 'Less'}
            </Text>
          </Pressable>
        </View>
      </View>
    );
  }
  function renderMaplocation() {
    return (
      <View
        style={{
          flex: 1,
          padding: 12,
          backgroundColor: 'white',
          borderRadius: 8,
          margin: 12,
        }}>
        <MapView
          initialRegion={{
            latitude: 29.2463,
            longitude: 47.9652,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={{width: '100%', height: 200}}
        />
      </View>
    );
  }
  function renderContactus() {
    return (
      <View
        style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              borderRadius: 10,
              padding: 20,
              alignSelf: 'center',
            }}>
            {suggestIcon}
          </TouchableOpacity>
          <Text style={{width: '60%', textAlign: 'center', marginVertical: 10}}>
            Suggest an Edit
          </Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              borderRadius: 10,
              padding: 20,
              alignSelf: 'center',
            }}>
            {emailIcon}
          </TouchableOpacity>
          <Text style={{width: '60%', textAlign: 'center', marginVertical: 10}}>
            Email
          </Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              borderRadius: 10,
              padding: 20,
              alignSelf: 'center',
            }}>
            {websiteIcon}
          </TouchableOpacity>
          <Text style={{width: '60%', textAlign: 'center', marginVertical: 10}}>
            Website
          </Text>
        </View>
      </View>
    );
  }
  return (
    <ScrollView style={{flex: 1}}>
      {renderImage()}
      {renderCategoryItemDetails()}
      {renderAboutus()}
      {renderMaplocation()}
      {renderContactus()}
    </ScrollView>
  );
};

export default categoryDetails;
