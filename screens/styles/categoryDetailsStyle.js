import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';

export default StyleSheet.create({
  itemImageDetailsContainer: {
    backgroundColor: colors.white,
  },
  itemImageDetails: {
    width: '100%',
    height: 200,
  },
  categoryItemDetailsContainer: {
    flex: 1,
  },
  categoryItemDetailsNameCotainer: {
    marginHorizontal: 15,
    marginVertical: 8,
  },
  categoryItemDetailsName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.black,
  },
  categoryItemDetailsIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 5,
  },
  categoryItemDetailsIcon: {
    flexDirection: 'row',
  },
  callContainer: {
    backgroundColor: '#ffcc33',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 12,
  },
  callText: {
    fontSize: 18,
    color: colors.white,
    fontWeight: 'bold',
  },
  aboutusMainContainer: {
    flex: 1,
    marginVertical: 10,
  },
  aboutusContainer: {
    width: '95%',
    alignSelf: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 25,
  },
  aboutusText: {
    textAlign: 'center',
    fontFamily: 'serif',
  },
  expandTextContainer: {
    alignSelf: 'center',
    marginVertical: 5,
  },
  expandText: {
    fontWeight: 'bold',
    color: colors.gold,
  },
  mapContainer: {
    flex: 1,
    padding: 12,
    backgroundColor: colors.white,
    borderRadius: 8,
    margin: 12,
  },
  map: {
    width: '100%',
    height: 200,
  },
  contactusContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  iconContainer: {
    alignItems: 'center',
  },
  icon: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 20,
    alignSelf: 'center',
  },
  iconText: {
    width: '60%',
    textAlign: 'center',
    marginVertical: 10,
  },
});
