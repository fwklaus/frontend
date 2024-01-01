import React, { useState, useContext } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet
} from 'react-native';
// import { ShoppingCart } from '../App'

export function CartScreen({route, navigation}) {
// currently reading cart from route prop (doesn't allow us to pass a callback)
//   console.log(route.params.cart)
//   let shoppingCart = route.params.cart

//   let [cart, setCart] = useState(shoppingCart);
//   setCart([...cart, 10]);

// provide shopping cart context
//   let cart = useState(ShoppingCart);

//   return(
//     <SafeAreaView style={styles.container}>
//       <ShoppingCart.provider cart={cart}>
//         <Text style={styles.text}>{cart}</Text>
//       </ShoppingCart.provider>
//     </SafeAreaView>
//   );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Hello World</Text>
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
  text: {
    color: 'black',
    fontSize: 16,
  },
});


