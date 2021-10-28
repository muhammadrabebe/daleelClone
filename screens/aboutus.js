import React from 'react';
import {View, Text, Image} from 'react-native';
import {find} from '../assets/icons_png';
import CustomHeader from '../components/customHeader';
import styles from './styles/aboutusStyle';

const aboutus = props => {
  function renderheader() {
    return <CustomHeader navigation={props.navigation} title="About us" />;
  }
  function renderLogoHeader() {
    return (
      <View style={styles.logoHeaderContainer}>
        <Image source={find} style={styles.logoImage} />
      </View>
    );
  }
  function renderAbout() {
    return (
      <View style={styles.aboutContainer}>
        <Text style={styles.aboutText}>
          The name Daleel means "Yellow Pages". The Yellow pages were introduced
          in about 1883, when a printer in the United States ran out of white
          paper whilst working on a regular telephone directory and user yellow
          paper instead. Since then, the yellow pages brand and its walking
          Fingers tradmark have become synonymous with companies buyers and
          sellers worldwide. Daleel Lists near to thousands of companies and
          organizations. it will therefore become the go-to place if you need to
          find a directory of Kuwaiti businesses. Daleel is an application
          dedicated to serve the kuwaiti public in giving them directions and
          connecting them to their surroundings. Inspired by 'yellow pages',
          Daleel aims to compress everthing the user needs to accomplish his or
          her task of the day. Find your location , follow the steps and reach
          safely.
        </Text>
      </View>
    );
  }
  return (
    <View style={{flex: 1}}>
      {renderheader()}
      {renderLogoHeader()}
      {renderAbout()}
    </View>
  );
};

export default aboutus;
