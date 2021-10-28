import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import CustomHeader from '../components/customHeader';
import styles from './styles/contactusStyles';

const contactus = props => {
  function renderheader() {
    return <CustomHeader navigation={props.navigation} title="Contact us" />;
  }
  function renderForm() {
    return (
      <View>
        <TextInput
          placeholder="Name"
          keyboardType="default"
          style={styles.inputStyle}
        />
        <TextInput
          placeholder="Email"
          keyboardType="email-address"
          style={styles.inputStyle}
        />
        <TextInput
          placeholder="Mobile"
          keyboardType="phone-pad"
          style={styles.inputStyle}
        />
        <TextInput
          placeholder="Comment"
          keyboardType="default"
          style={[styles.inputStyle, {textAlignVertical: 'top'}]}
          multiline={true}
          numberOfLines={3}
        />
        <TouchableOpacity
          style={styles.submitButtonContainer}
          onPress={() => Alert.alert('Thank you !')}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={{flex: 1}}>
      {renderheader()}
      {renderForm()}
    </View>
  );
};

export default contactus;
