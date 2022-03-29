import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigation} from './RootNavigation';

export const Navigator = () => (
  <NavigationContainer>
    <RootNavigation />
  </NavigationContainer>
);
