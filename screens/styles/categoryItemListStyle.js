import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';

export default StyleSheet.create({
  searchBoxContainer: {
    flexDirection: 'row',
    margin: 8,
    borderRadius: 5,
    borderWidth: 1,
    alignItems: 'center',
    borderColor: colors.white,
    backgroundColor: colors.white,
  },
  searchBoxTextInput: {
    width: '100%',
    padding: 8,
    fontSize: 16,
  },
  itemLocationContainer: {
    flexDirection: 'row',
  },
  imageContainer: {
    alignItems: 'center',
  },
  imageStyle: {
    width: 100,
    height: 100,
  },
  itemLocationContainer: {
    flexDirection: 'row',
  },
  itemLocationName: {
    color: colors.gold,
    fontSize: 20,
    margin: 10,
  },
  itemLocationIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  itemLocationDetails: {
    fontSize: 16,
    width: '75%',
  },
  flatlistStyle: {
    marginTop: 15,
    backgroundColor: colors.white,
    margin: 8,
    borderRadius: 15,
  },
  flatlistDivider: {
    borderWidth: 0.5,
    borderColor: 'lightgray',
    margin: 10,
  },
});
