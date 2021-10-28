import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';

export default StyleSheet.create({
  logoHeaderContainer: {
    alignSelf: 'center',
    padding: 15,
    justifyContent: 'center',
    marginBottom: 10,
  },
  logoImage: {
    width: 100,
    height: 100,
  },
  aboutContainer: {
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  aboutText: {
    fontSize: 15,
    fontFamily: 'serif',
    letterSpacing: 1,
    color: colors.black,
  },
});
