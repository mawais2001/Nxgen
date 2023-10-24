import 'react-native-gesture-handler';
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Routes from './src/Navigation/Routes';
import TabRoutes from './src/Navigation/TabRoutes';
import * as Screens from './src/Screens/index';

function App(props) {
  return (
    <View style={styles.container}>
      <Routes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default App;
