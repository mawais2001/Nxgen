import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerForMainSocial from './DrawerForMainSocial';
import Notification from '../Notification/Notification';
import navigationStrings from '../../../Navigation/navigationStrings';
import Message from '../Chat/Message';
import SocialProfile from '../SocialProfile/SocialProfile';
import DetailPost from '../Post/DetailPost';
const Stack = createNativeStackNavigator();

export default function SocialNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DrawerForMainSocial"
        component={DrawerForMainSocial}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.Notification}
        component={Notification}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.Message}
        component={Message}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.SocialProfile}
        component={SocialProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.DetailPost}
        component={DetailPost}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
