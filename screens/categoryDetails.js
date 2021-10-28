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
import Divider from '../components/divider';

const categoryDetails = props => {
  const item = props.route.params.item;

  function renderImage() {
    return (
      <View style={styles.itemImageDetailsContainer}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          {backIcon}
        </TouchableOpacity>
        <Image
          source={item.locationImage}
          style={styles.itemImageDetails}
          resizeMode="contain"
        />
      </View>
    );
  }
  function renderCategoryItemDetails() {
    return (
      <View style={styles.categoryItemDetailsContainer}>
        <View style={styles.categoryItemDetailsNameCotainer}>
          <Text style={styles.categoryItemDetailsName}>{item.name}</Text>
        </View>
        <View style={styles.categoryItemDetailsIconsContainer}>
          <View style={styles.categoryItemDetailsIcon}>
            {starIcon}
            {instagramIcon}
            {twitterIcon}
          </View>
          <View>{shareIcon}</View>
        </View>
        <TouchableOpacity style={styles.callContainer}>
          <Text style={styles.callText}>CALL</Text>
        </TouchableOpacity>
      </View>
    );
  }
  function renderAboutus() {
    const [isExpand, setIsExpand] = React.useState(false);

    return (
      <View style={styles.aboutusMainContainer}>
        <Divider title="ABOUT US" />
        <View style={styles.aboutusContainer}>
          <Text style={styles.aboutusText} numberOfLines={isExpand ? null : 2}>
            {item.about}
          </Text>
          <Pressable
            style={styles.expandTextContainer}
            onPress={() => setIsExpand(!isExpand)}>
            <Text style={styles.expandText}>
              {!isExpand ? 'More +' : 'Less'}
            </Text>
          </Pressable>
        </View>
      </View>
    );
  }
  function renderMaplocation() {
    return (
      <View style={styles.mapContainer}>
        <MapView
          initialRegion={{
            latitude: 29.2463,
            longitude: 47.9652,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={styles.map}
        />
      </View>
    );
  }
  function renderContactus() {
    return (
      <View style={styles.contactusContainer}>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.icon}>{suggestIcon}</TouchableOpacity>
          <Text style={styles.iconText}>Suggest an Edit</Text>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.icon}>{emailIcon}</TouchableOpacity>
          <Text style={styles.iconText}>Email</Text>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.icon}>{websiteIcon}</TouchableOpacity>
          <Text style={styles.iconText}>Website</Text>
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
