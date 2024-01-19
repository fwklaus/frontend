// import React from 'react';
// import { useNavigation } from '@react-navigation/native';
// import {
//   StyleSheet,
//   Pressable,
// //   View,
//   Image,
// //   Text,
// } from 'react-native';
// import { textStyles } from '../../res/styles/text'
// import { containerStyles } from '../../res/styles/container'

export function RestaurantItem ({id, title, category, distance, rating, phone, hours, address}) {
  // require does not work with dynamic values?
    // can't pass the image URL to require at runtime
  // find another way to load the image
  let url = '../res/images/order_weasel_small.jpg'
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate('RestaurantScreen', {id, title, category, distance, rating, phone, hours, address})}>
      <View style={[containerStyles.restaurantItem, {flexDirection: 'row'}]}>
        <Image source={require(url)} style={{width: 100, height: 100, borderColor: 'black', borderWidth: 1}}/>
        <View style={{marginLeft: 10, flex: 2}}>
          <Text style={textStyles.text}>{title}</Text>
          <Text style={textStyles.text}>Category: {category}</Text>
          <Text style={textStyles.text}>Distance(mi): {distance}</Text>
          <Text style={textStyles.text}>Rating: {rating}</Text>
        </View>
      </View>
    </Pressable>
  );
}
