// @flow
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './MainNavigator';

const AppContainer = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default AppContainer;
