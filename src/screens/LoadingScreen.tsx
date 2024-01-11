import { React } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  Button,
} from 'react-native'

export function LoadingScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Image source={require('../res/images/order_weasel_small.jpg')} />
        <Text  style={[styles.loadingText, {color: 'blue'}]}>SEARCHING FOR RESTAURANTS...</Text>
      </View>

      <View>
        <Button title="Temporary: go to home page" onPress={()=> navigation.navigate('HomeScreen')}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    backgroundColor: '#FBF501',
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    width: 275,
    color: 'black',
    marginTop: 20,
    textAlign: "center"
  },
});
