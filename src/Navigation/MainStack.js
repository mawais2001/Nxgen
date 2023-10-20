import React from 'react';
import * as Screens from '../Screens/index';
import navigationStrings from './navigationStrings';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabRoutes from './TabRoutes';
const Stack = createNativeStackNavigator();

function MainStack(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={navigationStrings.TabRoutes}
        component={TabRoutes}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.Setting}
        component={Screens.Setting}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.DetailArticle}
        component={Screens.DetailArticle}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.AllArticles}
        component={Screens.AllArticles}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.ContactUs}
        component={Screens.ContactUs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.ChangePassword}
        component={Screens.ChangePassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.PrivacyPolicy}
        component={Screens.PrivacyPolicy}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.TermsOfUse}
        component={Screens.TermsOfUse}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default MainStack;
