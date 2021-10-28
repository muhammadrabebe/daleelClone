import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {
  airline,
  bank,
  hospital,
  mall,
  school,
  taxi,
  appointment,
  Kuwait,
  France,
  Egypt,
  India,
  Biman,
  Emirates,
  SriLanka,
  British,
} from '../assets/icons_png';
import Divider from '../components/divider';
import styles from './styles/homeStyle';

const home = props => {
  const [images, setImages] = React.useState([
    appointment,
    appointment,
    appointment,
  ]);

  function renderSlider() {
    return (
      <View style={styles.sliderContainer}>
        <SliderBox
          images={images}
          ImageComponentStyle={styles.sliderImage}
          dotColor="#ffcc33"
          onCurrentImagePressed={index => Alert.alert(`image ${index} pressed`)}
        />
      </View>
    );
  }

  function renderDivider() {
    return <Divider title="Categories" />;
  }

  function renderCategories() {
    const [categoryItem, setCategoryItem] = React.useState([
      {
        key: '1',
        name: 'Airlines',
        imgUrl: airline,
        locations: [
          {
            key: 1,
            name: 'Kuwait Airways',
            locationDetails: 'Kuwait , Kuwait Airways',
            locationImage: Kuwait,
            about:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          },
          {
            key: 2,
            name: 'Air France',
            locationDetails: 'Panasonic Tower, Kuwait City, Kuwait',
            locationImage: France,
            about:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          },
          {
            key: 3,
            name: 'Air India',
            locationDetails: 'Air India, Kuwait City, Kuwait',
            locationImage: India,
            about:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          },
          {
            key: 4,
            name: 'SriLankan Airlines',
            locationDetails: 'SriLankan Airlines Kuwait, Sharq, Kuwait',
            locationImage: SriLanka,
            about: '',
          },
          {
            key: 5,
            name: 'Biman Bangladesh Airlines',
            locationDetails: 'Al-Soor Street, Kuwait City, Kuwait',
            locationImage: Biman,
            about: '',
          },
          {
            key: 6,
            name: 'British Airways',
            locationDetails: 'Dar Al Awadi Comlpex',
            locationImage: British,
            about: '',
          },
          {
            key: 7,
            name: 'Egypt Air',
            locationDetails:
              'Egypt Air Sales office , Soor Street, Kuwait City , Kuwait',
            locationImage: Egypt,
            about: '',
          },
          {
            key: 8,
            name: 'Fly Emirates',
            locationDetails: 'Emirates Airlines , Kuwait city, Kuwait',
            locationImage: Emirates,
            about: '',
          },
        ],
      },
      {key: '2', name: 'Banks', imgUrl: bank, locations: []},
      {key: '3', name: 'Taxi', imgUrl: taxi, locations: []},
      {key: '11', name: 'Taxi', imgUrl: taxi, locations: []},
      {key: '4', name: 'Hospitals', imgUrl: hospital, locations: []},
      {key: '42', name: 'Hospitals', imgUrl: hospital, locations: []},
      {key: '5', name: 'Schools', imgUrl: school, locations: []},
      {key: '6', name: 'Malls', imgUrl: mall, locations: []},
      {key: '7', name: 'Malls2', imgUrl: mall, locations: []},
      {key: '8', name: 'Malls3', imgUrl: mall, locations: []},
    ]);

    const renderItem = ({item}) => {
      return (
        <TouchableOpacity
          style={styles.categoryItemContainer}
          onPress={() => props.navigation.navigate('categoryItemList', {item})}>
          <Image source={item.imgUrl} style={styles.categoryItemImage} />
          <Text style={styles.categoryItemText}>{item.name}</Text>
        </TouchableOpacity>
      );
    };
    return (
      <View style={styles.categoryListContainer}>
        <FlatList
          renderItem={renderItem}
          data={categoryItem}
          keyExtractor={item => item.key}
          numColumns={3}
        />
      </View>
    );
  }

  function renderComponents() {
    return (
      <View style={{flex: 1}}>
        {renderSlider()}
        {renderDivider()}
        {renderCategories()}
      </View>
    );
  }
  return <View style={styles.homeContainer}>{renderComponents()}</View>;
};

export default home;
