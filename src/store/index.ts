import {applyMiddleware, compose, createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';

import {namesReducer} from './names/reducer';
import {NamesState} from './names/types';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const composeEnhancers =
  // @ts-ignore
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedReducer = persistReducer<NamesState, any>(
  persistConfig,
  namesReducer,
);

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk)),
);
export const persistor = persistStore(store);
