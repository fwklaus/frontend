import React, {useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Modal,
  TextInput,
} from 'react-native';
import {textStyles} from '../../res/styles/text';
import {buttonStyles} from '../../res/styles/button';
import {modalStyles} from '../../res/styles/modal';

import useCart from '../../hooks/useCart';

function QuantityInput({quantity, setQuantity}) {
  return (
    <View style={{flex: 1}}>
      <Text style={[textStyles.text, {flex: 1}]}>Quantity:</Text>
      <View style={{flex: 2, flexDirection: 'row', alignItems: 'center'}}>
        <View style={{flex: 1}} />
        <View style={{flex: 0.75}}>
          <Pressable
            onPress={() => {
              if (quantity === '0') {
                return;
              } else {
                setQuantity(String(Number(quantity) - 1));
              }
            }}>
            <Text
              style={[
                textStyles.text,
                styles.quantityAugment,
                {color: 'white'},
              ]}>
              -
            </Text>
          </Pressable>
        </View>
        <View style={{flex: 1}}>
          <TextInput
            value={quantity}
            style={[styles.inputBox, textStyles.text]}
            textAlign="center"
          />
        </View>
        <View style={{flex: 0.75}}>
          <Pressable
            onPress={() => {
              setQuantity(String(Number(quantity) + 1));
            }}>
            <Text
              style={[
                textStyles.text,
                styles.quantityAugment,
                {color: 'white'},
              ]}>
              +
            </Text>
          </Pressable>
        </View>
        <View style={{flex: 1}} />
      </View>
    </View>
  );
}

function ModalHeader({modalVisible, setModalVisible, item}) {
  let name = item.name;
  let cost = item.cost;

  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerTextContainer}>
        <Text style={[modalStyles.modalText, {textAlign: 'left'}]}>{name}</Text>
        <Text style={[textStyles.text, {fontSize: 14}]}>${cost}</Text>
      </View>
      <View style={{flex: 1, padding: 10}}>
        <Pressable
          onPress={() => {
            setModalVisible(!modalVisible);
          }}>
          <Text style={[textStyles.text, {textAlign: 'right', fontSize: 20}]}>
            X
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

function ModalBody({quantity, setQuantity, item}) {
  let desc = item.desc;

  return (
    <View style={{flex: 3, width: '100%', padding: 10}}>
      <View style={{flex: 1}}>
        <Text style={[textStyles.text, {fontSize: 14}]}>{desc}</Text>
      </View>
      <View style={{flex: 2}}>
        <QuantityInput quantity={quantity} setQuantity={setQuantity} />
      </View>
    </View>
  );
}

function ModalFooter({modalVisible, setModalVisible, quantity, cart, item}) {
  const {addItem, editItem, deleteItem, findIndex} = useCart();
  const route = useRoute();
  let id = item.id;

  return (
    <View style={styles.footerContainer}>
      <View style={{flex: 1}}>
        <Pressable
          style={() => [
            buttonStyles.addToCartButton,
            {backgroundColor: 'red'},
            {
              display:
                route.name === 'Cart' && quantity === '0' ? 'flex' : 'none',
            },
          ]}
          onPress={() => {
            deleteItem(id);
          }}>
          <Text style={[modalStyles.modalButtonText]}>Delete Item</Text>
        </Pressable>
      </View>
      <View style={{flex: 0.25}}>{/*spacer*/}</View>
      <View style={{flex: 1}}>
        <Pressable
          style={buttonStyles.addToCartButton}
          onPress={() => {
            if (findIndex(cart, id) === -1) {
              addItem(id, quantity);
            } else {
              editItem(id, quantity);
            }

            setModalVisible(!modalVisible);
          }}>
          <Text style={modalStyles.modalButtonText}>
            {route.name === 'Menu' ? 'Add to Cart' : 'Update Cart'}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

function CartModal({modalVisible, setModalVisible, item, cart}) {
  const route = useRoute();
  let itemQuantity = route.name === 'Menu' ? '0' : item.quantity;
  const [quantity, setQuantity] = useState(itemQuantity);

//   const [smallScreen, _setSmallScreen] = useState(() => {
//     return windowWidth < 400;
//   });

  return (
    <Modal
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={[modalStyles.centeredView, {flexDirection: 'column'}]}>
        <View style={{flex: 1}}>{/*spacer*/}</View>
        <View
          style={[
            modalStyles.modalView,
            {flex: 1, flexDirection: 'column', width: '90%'}
          ]}
        >
          <ModalHeader
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            item={item}
          />
          <ModalBody
            quantity={quantity}
            setQuantity={setQuantity}
            item={item}
          />
          <ModalFooter
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            quantity={quantity}
            cart={cart}
            item={item}
          />
        </View>
        <View style={{flex: 1}}>{/*spacer*/}</View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1.5,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'black',
    borderBottomWidth: 1,
  },
  headerTextContainer: {
    flex: 4,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'black',
    borderTopWidth: 1,
    padding: 10,
  },
  inputBox: {
    borderColor: 'black',
    borderWidth: 1,
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 10,
  },
  quantityAugment: {
    fontSize: 24,
    fontWeight: 'bold',
    borderRadius: 32,
    textAlign: 'center',
    margin: 4,
    backgroundColor: 'blue',
  },
});

export {CartModal, QuantityInput, ModalHeader, ModalBody, ModalFooter};
