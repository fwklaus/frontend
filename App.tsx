import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
// import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

const Stack = createNativeStackNavigator();

function LoadingScreen({ navigation }) {
  return (
    <SafeAreaView
      onPress={() => navigation.navigate('HomeScreen')}
      style={styles.loading}
    >
      <Image style={styles.image} source={require('./images/order_weasel_small.jpg')} />
      <Text  style={styles.loadingText}>SEARCHING FOR RESTAURANTS...</Text>
    </SafeAreaView>
  );
}

function HomeScreen({ navigation }) {

  debugger;
  return (
    <SafeAreaView style={styles.main}>
      <Text style={styles.mainText}>Main screen</Text>
    </ SafeAreaView>
  );
}

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Loading Screen"
          component={LoadingScreen}
        />
        <Stack.Screen
          name="Home Screen"
          component={HomeScreen}
        />
      </Stack.Navigator>
    </ NavigationContainer>
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#FBF501',
  },
  main: {
    flex: 1,
    backgroundColor: "white",
  },
  mainText: {
    textAlign: "center",
    color: "black",
  },
  image: {
    top: -30,
    width: 100,
  },
  loadingText: {
    width: 275,
    top: 20,
    left: 15,
    color: 'black',
  }
});


export default App;
