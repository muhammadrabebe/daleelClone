import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  sliderContainer: {
    marginVertical: 10,
  },
  sliderImage: {
    borderRadius: 15,
    width: '97%',
    marginTop: 5,
  },
  categoryItemContainer: {
    width: '33.33%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'lightgray',
    padding: 5,
  },
  categoryItemImage: {
    width: 80,
    height: 80,
    tintColor: '#ffcc33',
  },
  categoryItemText: {
    textAlign: 'center',
    marginTop: 10,
    fontFamily: 'serif',
    color: 'black',
  },
  categoryListContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
});
