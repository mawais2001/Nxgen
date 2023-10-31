import 'react-native-gesture-handler';
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native';
import Routes from './src/Navigation/Routes';
import TabRoutes from './src/Navigation/TabRoutes';
import * as Screens from './src/Screens/index';
import colors from './src/styles/colors';

function App(props) {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={colors.black}
        barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'}
      />
      <Routes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default App;
