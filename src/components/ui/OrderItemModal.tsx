import React from 'react';
import {View, Text, StyleSheet, Pressable, Modal} from 'react-native';
import {merchTextCSS} from '../../res/styles/merchantText';
import {buttonStyles} from '../../res/styles/button';
import {modalStyles} from '../../res/styles/modal';

// import useResData from '../../hooks/useResData';
// import useCart from '../../hooks/useCart';

function ModalHeader({modalVisible, setModalVisible, item}) {
  let id = item.id;
  let name = item.name;

  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerTextContainer}>
        <Text style={[modalStyles.modalText, {textAlign: 'left'}]}>{name}</Text>
        <Text style={[merchTextCSS.text, {fontSize: 14}]}>{id}</Text>
      </View>
      <View style={{flex: 1, padding: 10}}>
        <Pressable
          onPress={() => {
            setModalVisible(!modalVisible);
          }}>
          <Text style={[merchTextCSS.text, {textAlign: 'right', fontSize: 20}]}>
            X
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

function ModalBody({item}) {
  let desc = item.desc;

  return (
    <View style={{flex: 3, width: '100%', padding: 10}}>
      <View style={{flex: 1}}>
        <Text style={[merchTextCSS.text, {fontSize: 14}]}>{desc}</Text>
      </View>
      <View style={{flex: 2}}>
        <Text style={[merchTextCSS.text, {fontSize: 14}]}>Hello World</Text>
      </View>
    </View>
  );
}

function ModalFooter({modalVisible, setModalVisible, item}) {
  return (
    <View style={styles.footerContainer}>
      <View style={{flex: 0.25}}>{/*spacer*/}</View>
      <View style={{flex: 1}}>
        <Pressable style={buttonStyles.addToCartButton} onPress={() => {}}>
          <Text style={modalStyles.modalButtonText}>Mark Complete</Text>
        </Pressable>
      </View>
    </View>
  );
}

function OrderItemModal({modalVisible, setModalVisible, item}) {
  let id = item.id;
  let name = item.name;

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
          style={[modalStyles.modalView, {flex: 3, flexDirection: 'colm=umn'}]}>
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
});

export {OrderItemModal};
