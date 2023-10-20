import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import * as Screens from '../Screens/index';
import navigationStrings from './navigationStrings';
import TabRoutes from './TabRoutes';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name={navigationStrings.SIGNUP}
          component={Screens.SignUp}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default DrawerNavigator;
