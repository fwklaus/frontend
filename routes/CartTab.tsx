import React, { useState } from 'react';
import {
  SafeAreaView,
  SectionList,
  View,
  Text,
  StyleSheet,
  Pressable,
  Image
} from 'react-native'

const DATA = [];

export function CartHeader({params}) {
  let url = '../images/order_weasel_small.jpg'
  let id = params.id;
  let title = params.title;

  return (
    <View>
      <View style={[styles.topSection, {flexDirection: 'row', justifyContent: 'space-around', padding: 5, paddingLeft: 10}]}>
        <Image source={require(url)} style={{width: 50, height: 50}}></Image>
        <Text style={{width: 300, verticalAlign: 'middle', color: 'black'}}>{title}</Text>
      </View>
    </View>
  );
}

function CartFooter({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={[styles.bottom,  {borderTopWidth: 1, borderColor: 'black'}]}>
      <Pressable style={styles.closeCart}onPress={()=> navigation.navigate('Menu')}>
        <Text style={styles.text}>Close Cart</Text>
      </Pressable>
      <Pressable style={styles.checkout} onPress={()=> navigation.navigate('CheckoutScreen')}>
        <Text style={styles.text}>Checkout</Text>
      </Pressable>
    </View>
  );
}

export function CartTab({route, navigation}) {
  let params = route.params

  return(
    <SafeAreaView style={styles.container}>
      <CartHeader params={params}/>
      <SectionList
        sections={DATA}
      />
      <CartFooter navigation={navigation}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    backgroundColor: 'white',
  },
  topSection: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderBottomWidth: 1,
  },
  text: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center'
  },
   closeCart: {
     fontSize: 16,
     color: 'white',
     backgroundColor: 'grey',
     padding: 8,
     borderRadius: 8,
     borderColor: 'black',
     borderWidth: 1,
     width: '25%',
   },
   checkout: {
     fontSize: 16,
     color: 'black',
     backgroundColor: 'blue',
     padding: 8,
     borderRadius: 8,
     borderColor: 'black',
     borderWidth: 1,
     width: "65%"
   },
   bottom: {
     paddingTop: 10,
     paddingBottom: 10,
     flexDirection: 'row',
     justifyContent: 'space-around',
   },
});
