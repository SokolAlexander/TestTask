import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Form} from '../../components/Form/Form';
import {homeStyles} from './Home.styles';
import {HomeProps} from './Home.types';

export const Home = ({navigation}: HomeProps) => {
  const goToStats = () => {
    navigation.push('Statistics');
  };

  return (
    <SafeAreaView style={homeStyles.safeArea} edges={['bottom']}>
      <View style={homeStyles.wrapper}>
        <Form />
        <TouchableOpacity
          accessibilityRole="button"
          style={homeStyles.button}
          onPress={goToStats}>
          <Text style={homeStyles.btnText}>To Statistics</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
