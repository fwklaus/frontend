// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Pressable,
// } from 'react-native'
// import { textStyles } from '../../res/styles/text'

// export function CartFooter({params, navigation}) {
//   const [modalVisible, setModalVisible] = useState(false);
//
//   // Send Total values calculated from the Context to CheckoutScreen along with params
//
//   return (
//     <View style={{flex: 0.5, borderTopWidth: 1, borderColor: 'black'}}>
//       <View style={{flex: 1}}>
//         <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
//            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//               <View>
//                 <Text style={textStyles.text}>Subtotal:</Text>
//                 <Text style={textStyles.text}>Estimated Tax:</Text>
//                 <Text style={textStyles.text}>Total:</Text>
//               </View>
//            </View>
//             <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//                <View>
//                  <Text style={textStyles.text}>$0.00</Text>
//                  <Text style={textStyles.text}>$0.00</Text>
//                  <Text style={textStyles.text}>$0.00</Text>
//                </View>
//             </View>
//         </View>
//       </View>
//       <View style={[styles.bottom,  {borderTopWidth: 1, borderColor: 'black'}]}>
//         <Pressable style={styles.closeCart}onPress={()=> navigation.navigate('Menu')}>
//           <Text style={textStyles.cartButtonText}>Close Cart</Text>
//         </Pressable>
//         <Pressable style={styles.checkout} onPress={()=> navigation.navigate('CheckoutScreen', params)}>
//           <Text style={textStyles.cartButtonText}>Checkout</Text>
//         </Pressable>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   closeCart: {
//    fontSize: 16,
//    color: 'white',
//    backgroundColor: 'grey',
//    padding: 8,
//    borderRadius: 8,
//    borderColor: 'black',
//    borderWidth: 1,
//    width: '30%',
//   },
//   checkout: {
//    fontSize: 16,
//    color: 'black',
//    backgroundColor: 'blue',
//    padding: 8,
//    borderRadius: 8,
//    borderColor: 'black',
//    borderWidth: 1,
//    width: "65%"
//   },
//   bottom: {
//     paddingTop: 10,
//     paddingBottom: 10,
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//   },
// });
