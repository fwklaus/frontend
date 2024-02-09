import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet
} from 'react-native';
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

function Unavailable() {
  return (
    <View style={styles.unavailable}>
      <Text style={styles.statusPanelText}>Unavailable. Press Take Orders to start accepting new orders.</Text>
    </View>
  );
}

function TakingOrders() {
  return (
    <View style={styles.takingOrders}>
      <Text style={styles.statusPanelText}>TakingOrders</Text>
    </View>
  )
}

function OrdersTab() {
  // need state to handle order status for status bar
  // switch between Unavailable and TakingOrders status bar

  return (
    <SafeAreaView style={[merchContCSS.main, { padding: 0, alignItems: 'left'}]}>
      <Unavailable />
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

export { OrdersTab, PickupPendingPanel, ClosedOrdersPanel, OpenOrdersPanel, Unavailable, TakingOrders };
