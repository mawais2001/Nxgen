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
import {ThemeProvider} from './src/themes/ThemeContext';

function App(props) {
  return (
    <ThemeProvider>
      <View style={styles.container}>
        <StatusBar
          backgroundColor={colors.black}
          barStyle={
            Platform.OS === 'android' ? 'light-content' : 'dark-content'
          }
        />
        <Routes />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default App;
