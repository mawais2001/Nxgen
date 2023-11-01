import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SocialMain from './SocialMain';
import CustomDrawerSocail from './CustomDrawerSocail';

const Drawer = createDrawerNavigator();

function DrawerForMainSocial() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {width: '100%'},
        headerShown: false,
      }}
      drawerContent={props => <CustomDrawerSocail {...props} />}>
      <Drawer.Screen
        name={'SocialMain'}
        component={SocialMain}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
}

export default DrawerForMainSocial;
