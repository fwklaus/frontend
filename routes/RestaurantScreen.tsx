import React, { useState } from 'react';
import {
  SafeAreaView,
  SectionList,
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  Modal,
  Alert
} from 'react-native'

// fetching menu data for a restaurant example
import menuData from '../data/menuData.js'
function getMenuData(id) {
  return menuData[id];
}

function RestaurantHeader({params}) {
  let url = '../images/order_weasel_small.jpg'
  let id = params.id;
  let title = params.title;
//   let category = params.category;
//   let distance = params.distance;
//   let rating = params.rating;
//   let phone = params.phone;
//   let hours = params.hours;
//
//   // example
//   hours = '8:00-8:00'
//   phone = '(456)567-7895'

  return (
    <View>
      <View style={[styles.topSection, {flexDirection: 'row', justifyContent: 'space-around', padding: 5, paddingLeft: 10}]}>
        <Image source={require(url)} style={{width: 50, height: 50}}></Image>
        <Text style={[styles.text, {width: 300, verticalAlign: 'middle'}]}>{title}</Text>
      </View>
    </View>
  );
}

function CartModal() {
  const [modalVisible, setModalVisible] = useState(false);

  return(
    <SafeAreaView style={styles.centeredView}>
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
       >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={styles.modalButtonClose}
              onPress={() => {setModalVisible(!modalVisible)}}
            >
              <Text style={styles.modalButtonText}>Close Modal</Text>
            </Pressable>
            <Pressable></Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

function AddToCart() {


}

function RestaurantFooter() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed');
          setModalVisible(!modalVisible)
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}> Hello World! </Text>
            <Pressable
              style={styles.modalButtonClose}
              onPress={() => {setModalVisible(!modalVisible)}}
            >
              <Text style={styles.modalButtonText}>Close Modal</Text>
            </Pressable>
            <Pressable
              style={styles.addToCartButton}
              onPress={() => {
                setModalVisible(!modalVisible)
                console.log('Add to Cart!')
              }}
            >
              <Text style={styles.modalButtonText}>Add to Cart</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={styles.bottom}>
          <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
            <View style={styles.buttonText}>
              <Text style={[styles.text, {width: 100, textAlign: 'center'}]}>View Cart</Text>
              <Text style={[styles.text, {right: -135, width: 100, textAlign: 'center'}]}>$0.00</Text>
            </View>
          </Pressable>
      </View>
    </View>
  );
}

function GetAddress({id}) {
   // use id to get address, or do we already have that information from the earlier request?
  //   let address = get address for id

  return (
    <Pressable onPress={() => (console.log('Interesting'))}>
      <Text style={{color: 'blue', textDecorationLine: 'underline'}}>5555 Main St, City, State, Zip, Country  </Text>
    </Pressable>
  );
}

function ListHeader({id, title, category, distance, rating, phone, hours}) {
//     let id = params.id;
//     let title = params.title;
//     let category = params.category;
//     let distance = params.distance;
//     let rating = params.rating;
//     let phone = params.phone;
//     let hours = params.hours;

    // example
    hours = '8:00-8:00';
    phone = '(456)567-7895'

// need address for restaurant

  return (
    <View>
      <View style={[styles.topSection, {height: 80, padding: 2, paddingLeft: 10}]}>
        <Text style={[styles.text, {width: '100%'}]}>{rating} | {category} | {distance}mi</Text>
        <Text style={styles.text}>{hours}</Text>
        <Text style={styles.text}>{phone}</Text>
      </View>
      <View style={[styles.topSection, {padding: 2, paddingLeft: 10}]}>
        <Text style={styles.text}>This is a pickup order</Text>
        <Text style={[styles.text, {}]}>
          You'll need to go to {title} to pick up this order at:
          <GetAddress id={id}/>
        </Text>
      </View>
    </View>
  );
}

function ListFooter() {
  return (
    <View style={{height: 70}}></View>
  );
}

export function RestaurantScreen({route, navigation}) {
  let params = route.params;
  const [expandedSections, setExpandedSections] = useState(new Set());

  let id = params.id;

  const handleToggle = (title) => {
     setExpandedSections((expandedSections) => {
        const next = new Set(expandedSections);
        if (next.has(title)) {
          next.delete(title);
        } else {
           next.add(title);
        }
           return next;
     });
  }

  // request menu data using params.id
  //  let Data = getMenuData for the given params.id
  // this will be an asynchronous call to the backend API
  const DATA = getMenuData(id);

  return (
    <SafeAreaView style={styles.container}>
      <RestaurantHeader params={params}/>
      <SectionList
         sections={DATA}
         extraData={expandedSections}
         keyExtractor={(item, index) => item + index}
         renderItem={({section: {title}, item}) => {
           const isExpanded = expandedSections.has(title);

           if (!isExpanded) return null;

           return (
             <View style={styles.itemContainer}>
               <Text style={styles.sectionItems}>{item}</Text>
             </View>
           );
         }}
         renderSectionHeader={({section: {title}}) => (
           <Pressable onPress={() => handleToggle(title)}>
             <View style={styles.headerContainer}>
               <Text style={styles.headerText}>{title}</Text>
             </View>
           </Pressable>
         )}
         ListHeaderComponent={ListHeader(params)}
         ListFooterComponent={ListFooter}
      />
      <RestaurantFooter />
    </ SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    backgroundColor: 'white',
  },
  sectionItems: {
    padding: 20,
    marginVertical: 8,
    color: 'black'
  },
  topSection: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderBottomWidth: 1,
  },
  headerText: {
    color: 'black',
    fontSize: 16,
    backgroundColor: '#fff',
    padding: 20,
    paddingLeft: 16
  },
  headerContainer: {
    borderColor: 'black',
    borderBottomWidth: 1,
    flex: 1,
  },
  itemContainer: {
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
  },
  text: {
    color: 'black',
    fontSize: 16
  },
  button: {
    width: '100%',
    height: 70,
    backgroundColor: 'white',
    borderColor: 'black',
    borderTopWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
   buttonText: {
     fontSize: 16,
     width: '90%',
     color: 'black',
     backgroundColor: '#FBF501',
     padding: 8,
     borderRadius: 8,
     borderColor: 'black',
     borderWidth: 1,
     flexDirection: 'row'
   },
   bottom: {
     flex: 1,
     justifyContent: 'flex-end',
   },
   centeredView: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
//      backgroundColor: 'rgba(52, 52, 52, 0.4)'
   },
   modalView: {
     margin: 20,
     backgroundColor: 'white',
     borderRadius: 16,
     padding: 35,
     alignItems: 'center',
     shadowColor: '#000',
     shadowOffset: {
       width: 0,
       height: 2,
     },
     shadowOpacity: 0.25,
     shadowRadius: 4,
     elevation: 5,
     width: '75%',
     height: '45%'
   },
   modalText: {
     marginBottom: 15,
     textAlign: 'center',
   },
   modalButtonClose: {
     backgroundColor: 'grey',
     borderRadius: 20,
     padding: 10,
     elevation: 2,
     bottom: -200,
     left: -75
   },
   addToCartButton: {
    backgroundColor: 'blue',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    bottom: -158,
    left: 70
   },
   modalButtonText: {
     color: 'white',
     fontWeight: 'bold',
     textAlign: 'center',
   },
});
