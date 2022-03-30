import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import {RootStackParamList} from '../../../navigation/RootNavigation.types';
import {createTestWrapper} from '../../../utils/createTestWrapper';
import {Home} from '../Home';

const DefaultTestWrapper = createTestWrapper();
const mockNavigation = {
  push: jest.fn(),
} as any as NativeStackNavigationProp<RootStackParamList, 'Home'>;

describe('Home screen', () => {
  it('matches snapshot', () => {
    const component = render(
      <DefaultTestWrapper>
        <Home navigation={mockNavigation} />
      </DefaultTestWrapper>,
    );

    expect(component).toMatchSnapshot();
  });

  it('navigates to Statistics screen when btn pressed', () => {
    const {getByText} = render(
      <DefaultTestWrapper>
        <Home navigation={mockNavigation} />
      </DefaultTestWrapper>,
    );

    const btn = getByText('To Statistics');
    fireEvent(btn, 'press');
    expect(mockNavigation.push).toHaveBeenCalledTimes(1);
    expect(mockNavigation.push).toHaveBeenCalledWith('Statistics');
  });
});
