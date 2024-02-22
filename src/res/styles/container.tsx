import {StyleSheet} from 'react-native';

const containerStyles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  mainTabs: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#FBF501',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
    flex: 1,
  },
  restaurantItem: {
    backgroundColor: 'white',
    padding: 20,
    borderColor: 'black',
    borderBottomWidth: 1,
  },
  headerItem: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderBottomWidth: 1,
    flex: 1,
    justifyContent: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'black',
    borderBottomWidth: 1,
    paddingLeft: 10,
  },
  headerLogoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  logoSize: {
    height: 50,
    width: 50,
  },
  bottomNav: {
    width: '100%',
    height: 70,
    backgroundColor: 'white',
    borderColor: 'black',
    borderTopWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export {containerStyles};
