import React, {useEffect} from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  RefreshControl,
  Pressable,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import useLocation from '../../../../hooks/useLocation';
import useResData from '../../../../hooks/useResData';

// import {GetDirections} from '../../../../components/api/GetDirections';

// styles
import {containerStyles} from '../../../../res/styles/container';
import {textStyles} from '../../../../res/styles/text';

function ResListResults() {
  const {restaurantData} = useResData();
  let nResults = restaurantData.length;
  return (
    <View style={[containerStyles.restaurantItem, {padding: 10}]}>
      <Text style={[textStyles.headingText, {color: '#A1000E', fontSize: 16}]}>
        {nResults} Results
      </Text>
    </View>
  );
}

function ResListHeader() {
  const {currentAddress, location, setCurrentAddress, getAddress, useLocationServices} =
    useLocation();
  let locationMarker = '../../../../res/images/marker.png';

  return (
    <View style={{flex: 0.17}}>
      <View style={[containerStyles.headerItem, {flexDirection: 'row'}]}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Image
            style={{width: 20, height: 20}}
            source={require(locationMarker)}
          />
        </View>
        <View style={{flex: 10, alignSelf: 'left', justifyContent: 'center'}}>
          <Text
            style={{
              color: 'blue',
              textDecorationLine: 'underline',
              fontSize: 16,
            }}
            onPress={async () => {
              if (!useLocationServices) {
                console.log("Location Services unavailable at this time");
                return;
              }

              try {
                let address = await getAddress(location);
                setCurrentAddress(address);
              } catch (e) {
                console.log(e);
              }
            }}
            >
            {useLocationServices ?
               currentAddress ? currentAddress : 'Get Current Address' :
              "Location Services Unavailable at this time"
            }
          </Text>
        </View>
      </View>
      <View style={[containerStyles.headerItem, {paddingLeft: 10}]}>
        <Text style={[textStyles.headingText, {color: 'blue'}]}>
          Restaurants Near You (Carryout Only)
        </Text>
      </View>
    </View>
  );
}

function RestaurantItem({
  id,
  title,
  category,
  distance,
  rating,
  phone,
  hours,
  address,
}) {
  // require does not work with dynamic values?
  // can't pass the image URL to require at runtime
  // find another way to load the image
  let url = '../../../../res/images/order_weasel_small.jpg';
  const navigation = useNavigation();

  return (
    <Pressable
      unstable_pressDelay={50}
      onPress={() =>
        navigation.navigate('RestaurantScreen', {
          id,
          title,
          category,
          distance,
          rating,
          phone,
          hours,
          address,
        })
      }
      style={({pressed}) => [
        containerStyles.restaurantItem,
        {flexDirection: 'row'},
        {backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white'},
      ]}>
      <Image
        source={require(url)}
        style={{width: 100, height: 100, borderColor: 'black', borderWidth: 1}}
      />
      <View style={{marginLeft: 10, flex: 2}}>
        <Text style={textStyles.text}>{title}</Text>
        <Text style={textStyles.text}>Category: {category}</Text>
        <Text style={textStyles.text}>Distance(mi): {distance}</Text>
        <Text style={textStyles.text}>Rating: {rating}</Text>
      </View>
    </Pressable>
  );
}

function HomeTab() {
  const {location, setCurrentAddress, getAddress, useLocationServices} = useLocation();
  const {loadRestaurants, restaurantData, refreshing} = useResData();

  useEffect(() => {
    loadRestaurants();
  }, []);
  useEffect(() => {
    (async function () {
      if (!useLocationServices) {
        console.log('Location Services unavailable at this time (at HomeTab)');
        return;
      }

      try {
        let address = await getAddress(location);
        setCurrentAddress(address);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <ResListHeader />
      <FlatList
        style={{flex: 1, backgroundColor: 'red'}}
        data={restaurantData}
        renderItem={({item}) => (
          <RestaurantItem
            id={item.id}
            title={item.title}
            category={item.category}
            distance={item.distance}
            rating={item.rating}
            phone={item.phone}
            hours={item.hours}
            address={item.address}
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={loadRestaurants} />
        }
        keyExtractor={item => item.id}
        ListHeaderComponent={<ResListResults />}
      />
    </SafeAreaView>
  );
}

export {ResListResults, ResListHeader, RestaurantItem, HomeTab};
