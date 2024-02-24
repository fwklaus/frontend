import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Pressable, Modal, FlatList} from 'react-native';
import {merchTextCSS} from '../../res/styles/merchantText';
import {buttonStyles} from '../../res/styles/button';
import {modalStyles} from '../../res/styles/modal';

import useOrders from '../../hooks/useOrders';

function ModalHeader({modalVisible, setModalVisible, item}) {
  let fullName = item.full_name;
  let phone = item.phone;

  return (
    <View style={[styles.headerContainer, styles.containerPadding]}>
      <View style={[styles.headerTextContainer, {flexDirection: 'column'}]}>
        <Text style={[modalStyles.modalText, {textAlign: 'left'}]}>
          Customer: {fullName}
        </Text>
        <Text style={[modalStyles.modalText, {textAlign: 'left'}]}>
          Phone: {phone}
        </Text>
      </View>
      <View style={{flex: 1, padding: 10}}>
        <Pressable
          onPress={() => {
            setModalVisible(!modalVisible);
          }}>
          <Text style={[merchTextCSS.text, {textAlign: 'right', fontSize: 25}]}>
            X
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

function ListItem({item}) {
  let name = item.name;
  let quantity = item.quantity;

  return (
    <View style={styles.listItemContainer}>
      <Text style={[merchTextCSS.text, {flex: 2, paddingLeft: 10}]}>
        {quantity}
      </Text>
      <Text style={[merchTextCSS.text, {flex: 2}]}>X</Text>
      <Text style={[merchTextCSS.text, {flex: 10}]}>{name}</Text>
    </View>
  );
}

function ModalBody({item}) {
  let items = item.items;

  return (
    <View style={[styles.containerPadding, styles.modalBodyContainer]}>
      <FlatList
        style={{flex: 1}}
        data={items}
        renderItem={({item}) => <ListItem item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

function OrderEnteredButton({modalVisible, setModalVisible, item}) {
  const {updateOrderStatus, getOrders} = useOrders();
  let id = item.id;

  return (
    <Pressable
      style={buttonStyles.addToCartButton}
      onPress={() => {
        console.log(`Update status of ${id} to open`);
        try {
          updateOrderStatus(id, 'open');
          // getOrders();
          setModalVisible(!modalVisible);
        } catch (e) {
          alert(e.message);
        }
      }}>
      <Text style={[modalStyles.modalButtonText, {fontSize: 20}]}>
        Order was entered
      </Text>
    </Pressable>
  );
}

function OrderCompleteButton({modalVisible, setModalVisible, item}) {
  const {updateOrderStatus, getOrders} = useOrders();
  let id = item.id;

  return (
    <>
      {item.status === 'complete' ? (
        <></>
      ) : (
        <Pressable
          style={buttonStyles.addToCartButton}
          onPress={() => {
            console.log(
              'Send push notification altering the customer that the order is done',
            );
            console.log(`Update status of ${id} to complete`);
            try {
              updateOrderStatus(id, 'complete');
              // getOrders()
              setModalVisible(!modalVisible);
            } catch (e) {
              alert(e.message);
            }
          }}>
          <Text style={[modalStyles.modalButtonText, {fontSize: 20}]}>
            Order is Complete
          </Text>
        </Pressable>
      )}
    </>
  );
}

function ModalFooter({modalVisible, setModalVisible, item}) {
  return (
    <View style={[styles.footerContainer, styles.containerPadding]}>
      <View style={{flex: 1}}>{/*spacer*/}</View>
      <View style={{flex: 1}}>
        {item.status === 'new' ? (
          <OrderEnteredButton
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            item={item}
          />
        ) : (
          <OrderCompleteButton
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            item={item}
          />
        )}
      </View>
    </View>
  );
}

function OrderItemModal({modalVisible, setModalVisible, item}) {
  return (
    <Modal
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={modalStyles.centeredView}>
        <View style={{flex: 1}}>{/*spacer*/}</View>
        <View
          style={[modalStyles.modalView, {flex: 3, flexDirection: 'column'}]}>
          <ModalHeader
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            item={item}
          />
          <ModalBody item={item} />
          <ModalFooter
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'left',
  },
  footerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'black',
    borderTopWidth: 1,
  },
  containerPadding: {
    paddingRight: 20,
    paddingLeft: 20,
  },
  listItemContainer: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderColor: 'black',
    padding: 10,
  },
  modalBodyContainer: {
    flex: 3,
    width: '100%',
    paddingRight: 0,
    paddingLeft: 0,
  },
});

export {OrderItemModal};
