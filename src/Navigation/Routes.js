import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';
import MainStack from './MainStack';

export default function Routes() {
  return <NavigationContainer>{MainStack()}</NavigationContainer>;
}
