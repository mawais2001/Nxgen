import React from 'react';
import * as Screens from '../Screens/index';
import navigationStrings from './navigationStrings';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function AuthStack(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={navigationStrings.LOGIN}
        component={Screens.Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.SIGNUP}
        component={Screens.SignUp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default AuthStack;
