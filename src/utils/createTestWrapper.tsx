import React from 'react';
import thunk from 'redux-thunk';
import createMockStore from 'redux-mock-store';

import {NamesState, REQUEST_STATUS} from '../store/names/types';
import {Provider} from 'react-redux';

export const defaultMockState: NamesState = {
  name: '',
  gender: 'female',
  request: {
    status: REQUEST_STATUS.IDLE,
    error: null,
  },
  stats: {
    history: {},
    countFemale: 0,
  },
};

export const makeStore = createMockStore([thunk]);
export const defaultMockStore = makeStore(defaultMockState);

export const createTestWrapper = (mockStore = defaultMockStore) => {
  return ({children}: {children: React.ReactElement}) => (
    <Provider store={mockStore}>{children}</Provider>
  );
};
