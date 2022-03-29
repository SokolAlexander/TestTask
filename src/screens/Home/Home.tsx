import React from 'react';
import {Button, Text, View} from 'react-native';
import {HomeProps} from './Home.types';

export const Home = ({navigation}: HomeProps) => {
  const goToStats = () => {
    navigation.push('Statistics');
  };
  return (
    <View>
      <Text>Home screen</Text>
      <Button title="To Statistics" onPress={goToStats} />
    </View>
  );
};
