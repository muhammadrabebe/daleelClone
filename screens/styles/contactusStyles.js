import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';

export default StyleSheet.create({
  inputStyle: {
    backgroundColor: colors.white,
    fontSize: 14,
    padding: 8,
    width: '95%',
    alignSelf: 'center',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'lightgray',
    marginVertical: 10,
    justifyContent: 'flex-start',
  },
  submitButtonContainer: {
    backgroundColor: colors.gold,
    alignItems: 'center',
    padding: 10,
    margin: 8,
    alignSelf: 'center',
    borderRadius: 6,
    width: '95%',
  },
  submitButtonText: {
    fontSize: 18,
    color: colors.white,
  },
});
