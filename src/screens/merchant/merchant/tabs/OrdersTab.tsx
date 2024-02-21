import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  FlatList
} from 'react-native';
import useOrders from '../../../../hooks/useOrders';

import { merchContCSS } from '../../../../res/styles/merchantContainer';
import { merchTextCSS } from '../../../../res/styles/merchantText';


function OrderItem({item}) {
  console.log(item, "at OrderItem");
  let id = item.id;
  let orderId = item.order_id;
  let customerName = item.customer_name;
  let customerPhone = item.phone;
  let timestamp = item.timestamp;

  return (
    <Pressable
      style={{flex: 1, borderColor: 'black', borderWidth: 1, padding: 8,  marginTop: 10, backgroundColor: 'silver'}}
      onPress={() => {
        console.log(`Bring Bring Up modal and order details for item ${id}`);
      }}
    >
      <Text style={[merchTextCSS.text, {fontSize: 16}]}>OrderID: {orderId}</Text>
      <Text style={[merchTextCSS.text, {fontSize: 16}]}>Name: {customerName}</Text>
      <Text style={[merchTextCSS.text, {fontSize: 16}]}>Phone: {customerPhone}</Text>
      <Text style={[merchTextCSS.text, {fontSize: 16}]}>Timestamp: {timestamp}</Text>
    </Pressable>
  );
}

function OpenOrdersPanel() {
  const { openOrders } = useOrders();

  return (
    <View style={[styles.panel, styles.rightBorder]}>
      <Text style={[merchTextCSS.text, styles.panelText]}>Open Orders</Text>
      <FlatList
        style={{flex: 1}}
        data={openOrders}
        keyExtractor={item => item.id}
        renderItem={({item})=> (
          <OrderItem item={item} />
        )}
      />
    </View>
  );
}

function ClosedOrdersPanel() {
  const { closedOrders } = useOrders();

  return (
    <View style={[styles.panel, styles.rightBorder]}>
      <Text style={[merchTextCSS.text, styles.panelText]}>Closed Orders</Text>
    </View>
  );
}

function PickupPendingPanel() {
  const {pickupPendingOrders} = useOrders();

  return (
    <View style={styles.panel}>
      <Text style={[merchTextCSS.text, styles.panelText]}>Pickup Pending</Text>
    </View>
  );
}

function Status() {
  const { takingOrders } = useOrders();
  return (
    <View style={ takingOrders ? styles.available : styles.unavailable}>
      { takingOrders ?
      <Text style={styles.statusPanelText}>Taking Orders.</Text> :
        <Text style={styles.statusPanelText}>Unavailable. Press Take Orders to start accepting new orders.</Text>
      }
    </View>
  );
}

function OrdersTab() {
  const { loadOrders, takingOrders } = useOrders();
  useEffect(() => {loadOrders()}, []);

  return (
    <SafeAreaView style={[merchContCSS.main, { padding: 0, alignItems: 'left'}]}>
      <Status />
      <View style={takingOrders ? styles.mainPanels : [styles.mainPanels, {backgroundColor: 'grey'}]}>
        <OpenOrdersPanel />
        <ClosedOrdersPanel />
        <PickupPendingPanel />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  unavailable: {
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center'
  },
  available : {
    backgroundColor: '#1BC100',
    flex: 1,
    justifyContent: 'center'
  },
  statusPanelText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold'
  },
  panelText: {
    fontSize: 24
  },
  panel: {
    flex: 1,
    borderColor: 'black',
    padding: 10
  },
  rightBorder: {
    borderRightWidth: 1,
  },
  mainPanels: {
    flex: 10,
    flexDirection: 'row',
    alignItems: 'left',
  },
  order: {}
});

export { OrdersTab, PickupPendingPanel, ClosedOrdersPanel, OpenOrdersPanel, Status };
