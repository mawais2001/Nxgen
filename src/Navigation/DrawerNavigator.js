import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import * as Screens from '../Screens/index';
import navigationStrings from './navigationStrings';
import TabRoutes from './TabRoutes';
import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name={navigationStrings.TabRoutes}
        component={TabRoutes}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
