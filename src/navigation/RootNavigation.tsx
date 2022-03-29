import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RootStackParamList} from './RootNavigation.types';
import {Home} from '../screens/Home/Home';
import {Statistics} from '../screens/Statistics/Statistics';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigation = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="Home" component={Home} />
      <RootStack.Screen name="Statistics" component={Statistics} />
    </RootStack.Navigator>
  );
};
