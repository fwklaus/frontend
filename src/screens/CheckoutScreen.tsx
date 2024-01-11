import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Pressable,
  Image,
  TextInput,
} from 'react-native'
import CheckBox from '@react-native-community/checkbox';

function Address({address}) {
  return(
    <Pressable onPress={() => console.log('Google API to get directions')}>
      <Text style={{color: 'blue', textDecorationLine: 'underline', fontWeight: 'bold'}}>{address}</Text>
    </Pressable>
  );
}

function ContactInfo() {
  return(
    <View style={{flex: 3}}>
     <View style={{marginLeft: 8, flex: 1, justifyContent: 'center'}}>
       <Text style={[styles.text, {fontSize: 20}]}>Contact Info</Text>
       <Text style={{color: 'red', fontSize: 12}}>All fields required</Text>
     </View>
     <View style={{flex: 4}}>
       <TextInput style={styles.input}
         placeholder="First Name"
       />
       <TextInput style={styles.input}
         placeholder="Last Name"
       />
       <TextInput style={styles.input}
         placeholder="Email"
       />
       <TextInput style={styles.input}
         placeholder="Phone"
       />
     </View>
    </View>
  );
}

function Notifications() {
  const [toggleCheckBox1, setToggleCheckBox1] = useState(false);
  const [toggleCheckBox2, setToggleCheckBox2] = useState(false);
  const [toggleCheckBox3, setToggleCheckBox3] = useState(false);
  const [toggleCheckBox4, setToggleCheckBox4] = useState(false);

  return(
    <View style={{flex: 2, paddingLeft: 10}}>
      <View style={{flex: 1}}>
        <Text style={[styles.text, {fontSize: 20}]}>Text & Email Notifications</Text>
      </View>
      <View style={{flex: 3}}>
        <View style={{flexDirection: 'column', flex: 1}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <CheckBox
             disabled={false}
             value={toggleCheckBox1}
             onValueChange={(newValue) => setToggleCheckBox1(newValue)}
             style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }], top: -4}}
            />
            <Text style={[styles.text, {flex: 12}]}>Yes, I'd like to receive text and email</Text>
          </View>
          <View style={{flex: 1,flexDirection: 'row'}}>
             <CheckBox
              disabled={false}
              value={toggleCheckBox2}
              onValueChange={(newValue) => setToggleCheckBox2(newValue)}
              style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }], top: -4 }}
            />
            <Text style={styles.text}>Yes, I'd like to receive text</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox3}
              onValueChange={(newValue) => setToggleCheckBox3(newValue)}
             style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }], top: -4 }}
            />
            <Text style={styles.text}>Yes, I'd like to receive email</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
              <CheckBox
                disabled={false}
                value={toggleCheckBox4}
                onValueChange={(newValue) => setToggleCheckBox4(newValue)}
                style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }], top: -4 }}
              />
            <Text style={styles.text}>No. Just notify me in the app</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export function CheckoutScreen({route, navigation}) {
  let params = route.params;

  let id = params.id;
  let address = params.address;
  let title = params.title;
  let logo = '../res/images/order_weasel_small.jpg';

  return(
      <SafeAreaView style={styles.container}>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', borderColor: 'black', borderBottomWidth: 1, paddingLeft: 10}}>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
            <Image style={{width: 50, height: 50,}} source={require(logo)}/>
          </View>
         <Text style={[styles.text, {flex: 3, fontSize: 20}]}>{title}</Text>
        </View>
        <View style={{backgroundColor: 'white', flex: 1.5,  borderBottomWidth: 1, paddingLet: 10}}>
          <View style={{flex: 1, marginLeft: 10, justifyContent: 'center'}}>
            <Text style={[styles.text, {fontSize: 20}]}>Checkout</Text>
          </View>
          <View style={{flex: 2, marginLeft: 10, justifyContent: 'center'}}>
            <Text style={styles.text}>Carryout Order</Text>
            <Text style={styles.text}>Pickup at: <Address address={address}/></Text>
          </View>
        </View>
        <View style={{flex: 6, borderColor: 'black', borderBottomWidth: 1}}>
          <ContactInfo />
          <Notifications />
        </View>
        <View style={{flex: 2, flexDirection: 'row'}}>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View>
              <Text style={[styles.text, {fontSize: 20}]}>Subtotal</Text>
              <Text style={[styles.text, {fontSize: 20}]}>Estimated Tax:</Text>
              <Text style={[styles.text, {fontSize: 20}]}>Total:</Text>
            </View>
          </View>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View>
              <Text style={[styles.text, {fontSize: 20}]}>$0.00</Text>
              <Text style={[styles.text, {fontSize: 20}]}>$0.00</Text>
              <Text style={[styles.text, {fontSize: 20}]}>$0.00</Text>
            </View>
          </View>
        </View>
        <View style={[styles.bottom,  {borderTopWidth: 1, borderColor: 'black'}]}>
          <Pressable style={styles.submitButton} onPress={()=> console.log('Implement checkout success/failure')}>
            <Text style={styles.cartButtonText}>Submit Order and Pay Later</Text>
          </Pressable>
        </View>
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
  input: {
    height: 30,
    paddingLeft: 8,
    margin: 8,
    borderWidth: 1,
    padding: 2,
    borderRadius: 8,
    backgroundColor: 'grey'
  },
   bottom: {
     paddingTop: 10,
     paddingBottom: 10,
     flexDirection: 'row',
     justifyContent: 'space-around',
   },
   cartButtonText: {
     color: 'white',
     fontSize: 16,
     textAlign: 'center'
   },
   text: {
     color: 'black',
     fontSize: 16,
     fontWeight: 'bold'
   },
    submitButton: {
      fontSize: 16,
      color: 'black',
      backgroundColor: 'blue',
      padding: 8,
      borderRadius: 8,
      borderColor: 'black',
      borderWidth: 1,
      width: "90%"
    },
});