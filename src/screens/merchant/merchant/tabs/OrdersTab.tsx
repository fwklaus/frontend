import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Pressable,
  StyleSheet,
  FlatList,
} from 'react-native';
import useOrders from '../../../../hooks/useOrders';

import {OrderItemModal} from '../../../../components/ui/OrderItemModal';

import {merchContCSS} from '../../../../res/styles/merchantContainer';
import {merchTextCSS} from '../../../../res/styles/merchantText';
import {modalStyles} from '../../../../res/styles/modal';

function OrderItem({item}) {
  const [modalVisible, setModalVisible] = useState(false);
  let id = item.id;
  let orderId = item.order_id;
  let fullName = item.full_name;
  let customerPhone = item.phone;
  let timestamp = item.timestamp;

  return (
    <Pressable
      style={{
        flex: 1,
        borderColor: 'black',
        borderWidth: 1,
        padding: 8,
        marginTop: 10,
        backgroundColor: 'silver',
      }}
      onPress={() => {
        setModalVisible(true);
      }}>
      <OrderItemModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        item={item}
      />
      <Text style={[merchTextCSS.text, {fontSize: 16}]}>
        OrderID: {orderId}
      </Text>
      <Text style={[merchTextCSS.text, {fontSize: 16}]}>Name: {fullName}</Text>
      <Text style={[merchTextCSS.text, {fontSize: 16}]}>
        Phone: {customerPhone}
      </Text>
      <Text style={[merchTextCSS.text, {fontSize: 16}]}>
        Timestamp: {timestamp}
      </Text>
    </Pressable>
  );
}

function NewOrdersPanel() {
  const {orders} = useOrders();

  return (
    <View style={[styles.panel, styles.rightBorder]}>
      <Text style={[merchTextCSS.text, styles.panelText]}>New Orders</Text>
      <FlatList
        style={{flex: 1}}
        data={orders.new}
        keyExtractor={item => item.id}
        renderItem={({item}) => <OrderItem item={item} />}
      />
    </View>
  );
}

function OpenOrdersPanel() {
  const {orders} = useOrders();

  return (
    <View style={[styles.panel, styles.rightBorder]}>
      <Text style={[merchTextCSS.text, styles.panelText]}>Open Orders</Text>
      <FlatList
        style={{flex: 1}}
        data={orders.open}
        keyExtractor={item => item.id}
        renderItem={({item}) => <OrderItem item={item} />}
      />
    </View>
  );
}

function CompleteOrdersPanel() {
  const {orders} = useOrders();

  return (
    <View style={styles.panel}>
      <Text style={[merchTextCSS.text, styles.panelText]}>Complete Orders</Text>
      <FlatList
        style={{flex: 1}}
        data={orders.complete}
        keyExtractor={item => item.id}
        renderItem={({item}) => <OrderItem item={item} />}
      />
    </View>
  );
}

function Status() {
  const {takingOrders} = useOrders();
  return (
    <View style={takingOrders ? styles.available : styles.unavailable}>
      {takingOrders ? (
        <Text style={styles.statusPanelText}>Taking Orders.</Text>
      ) : (
        <Text style={styles.statusPanelText}>
          Unavailable. Press Take Orders to start accepting new orders.
        </Text>
      )}
    </View>
  );
}

function OrdersTab() {
  const {getOrders, takingOrders} = useOrders();
  useEffect(() => {
    getOrders();
  }, []);

  return (
    <SafeAreaView style={[merchContCSS.main, {padding: 0, alignItems: 'left'}]}>
      <Status />
      <View
        style={
          takingOrders
            ? styles.mainPanels
            : [styles.mainPanels, {backgroundColor: 'grey'}]
        }>
        <NewOrdersPanel />
        <OpenOrdersPanel />
        <CompleteOrdersPanel />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  unavailable: {
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center',
  },
  available: {
    backgroundColor: '#1BC100',
    flex: 1,
    justifyContent: 'center',
  },
  statusPanelText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  panelText: {
    fontSize: 24,
  },
  panel: {
    flex: 1,
    borderColor: 'black',
    padding: 10,
  },
  rightBorder: {
    borderRightWidth: 1,
  },
  mainPanels: {
    flex: 10,
    flexDirection: 'row',
    alignItems: 'left',
  },
  order: {},
});

export {
  OrdersTab,
  NewOrdersPanel,
  OpenOrdersPanel,
  CompleteOrdersPanel,
  Status,
};
