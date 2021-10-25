// @flow

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import DetailsScreen from '../Containers/DetailsScreen';
import HomeScreen from '../Containers/Home';
import {ScreenNames} from '../Utilities/constants';
import {Strings} from '../Utilities/strings';
import {navigationConfig} from './config';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{...navigationConfig}}>
      <Stack.Screen
        name={ScreenNames.homeScreen}
        component={HomeScreen}
        options={{headerTitle: false}}
      />
      <Stack.Screen
        name={ScreenNames.detailsScreen}
        component={DetailsScreen}
        options={{
          headerTransparent: true,
          headerTitle: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
