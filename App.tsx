import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {Navigator} from './src/navigation';
import {persistor, store} from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaProvider>
          <Navigator />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
