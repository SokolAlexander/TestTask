import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import {Form} from '../Form';
import {
  createTestWrapper,
  defaultMockState,
  defaultMockStore,
  makeStore,
} from '../../../utils/createTestWrapper';
import {Gender, REQUEST_STATUS} from '../../../store/names/types';
import * as actions from '../../../store/names/actions';

const DefaultTestWrapper = createTestWrapper();
jest.spyOn(actions, 'getGender');

describe('Form', () => {
  it('matches snapshot with default state', () => {
    const component = render(
      <DefaultTestWrapper>
        <Form />
      </DefaultTestWrapper>,
    );

    expect(component).toMatchSnapshot();
  });

  it('matches snapshot with request pending state', () => {
    const mockStore = makeStore({
      ...defaultMockState,
      request: {status: REQUEST_STATUS.PENDING},
    });
    const TestWrapper = createTestWrapper(mockStore);
    const component = render(
      <TestWrapper>
        <Form />
      </TestWrapper>,
    );

    expect(component).toMatchSnapshot();
  });

  it('matches snapshot with request error state', () => {
    const mockStore = makeStore({
      ...defaultMockState,
      request: {status: REQUEST_STATUS.FAILURE, error: 'Test error'},
    });
    const TestWrapper = createTestWrapper(mockStore);
    const component = render(
      <TestWrapper>
        <Form />
      </TestWrapper>,
    );

    expect(component).toMatchSnapshot();
  });

  it('shows name and gender if they are present', () => {
    const name = 'Name';
    const gender: Gender = 'female';
    const mockStore = makeStore({
      ...defaultMockState,
      name,
      gender,
    });
    const TestWrapper = createTestWrapper(mockStore);
    const {queryByText} = render(
      <TestWrapper>
        <Form />
      </TestWrapper>,
    );

    const text = queryByText(`${name}: ${gender}`);
    expect(text).not.toBeNull();
  });

  it('disables button if there is no value in input', () => {
    const {getByRole} = render(
      <DefaultTestWrapper>
        <Form />
      </DefaultTestWrapper>,
    );

    const btn = getByRole('button');
    fireEvent(btn, 'press');

    const storeActions = defaultMockStore.getActions();

    expect(storeActions.length).toBe(0);
  });

  it('dispatches request action after text input and btn pressed', () => {
    const {getByRole, getByPlaceholderText} = render(
      <DefaultTestWrapper>
        <Form />
      </DefaultTestWrapper>,
    );

    const input = getByPlaceholderText('Enter a name');
    fireEvent(input, 'changeText', 'newname');

    const btn = getByRole('button');
    fireEvent(btn, 'press');

    const storeActions = defaultMockStore.getActions();
    const lastAction = storeActions[storeActions.length - 1];

    expect(actions.getGender).toHaveBeenLastCalledWith('newname');
    expect(lastAction).toEqual(actions.getGenderRequest());
  });
});
