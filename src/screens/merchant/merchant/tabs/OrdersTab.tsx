import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet
} from 'react-native';
import useOrders from '../../../../hooks/useOrders';

import { merchContCSS } from '../../../../res/styles/merchantContainer';
import { merchTextCSS } from '../../../../res/styles/merchantText';

function OpenOrdersPanel() {
  return (
    <View style={[styles.panel, styles.rightBorder]}>
      <Text style={merchTextCSS.text}>Open Orders</Text>
    </View>
  );
}

function ClosedOrdersPanel() {
  return (
    <View style={[styles.panel, styles.rightBorder]}>
      <Text style={merchTextCSS.text}>Closed Orders</Text>
    </View>
  );
}

function PickupPendingPanel() {

  return (
    <View style={styles.panel}>
      <Text style={merchTextCSS.text}>Pickup Pending</Text>
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
  return (
    <SafeAreaView style={[merchContCSS.main, { padding: 0, alignItems: 'left'}]}>
      <Status />
      <View style={styles.mainPanels}>
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
  }
});

export { OrdersTab, PickupPendingPanel, ClosedOrdersPanel, OpenOrdersPanel, Status };
