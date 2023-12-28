import { React } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  Button,
} from 'react-native'
import { HomeTab, ServicesTab, TermsTab } from './MainTabs'
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: 'yellow',
      },
      tabBarIconStyle: {
        display: 'none',
      },
      tabBarLabelStyle: {
        fontSize: 16,
        marginBottom: 10,
      }
    }}>
      <Tab.Screen name="Home" component={ HomeTab }/>
      <Tab.Screen name="Our Services" component={ ServicesTab }/>
      <Tab.Screen name="Terms" component={ TermsTab }/>
    </Tab.Navigator>
  );
}

export function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={[styles.container, {backgroundColor: "white"}]}>
        <MyTabs />
    </ SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    backgroundColor: '#FBF501',
  },
});
