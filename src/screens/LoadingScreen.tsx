import {React} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  Button,
} from 'react-native';
import {textStyles} from '../res/styles/text';
import {containerStyles} from '../res/styles/container';

export function LoadingScreen({navigation}) {
  return (
    <SafeAreaView style={containerStyles.mainTabs}>
      <View style={containerStyles.logoContainer}>
        <Image source={require('../res/images/order_weasel_small.jpg')} />
        <Text style={[textStyles.loadingText, {color: 'blue'}]}>
          SEARCHING FOR RESTAURANTS...
        </Text>
      </View>

      <View>
        <Button
          title="Temporary: go to Welcome Screen"
          onPress={() => navigation.navigate('WelcomeScreen')}
        />
      </View>
    </SafeAreaView>
  );
}
