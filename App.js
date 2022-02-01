import AppNavigation from './src/navigation';
import {Provider} from 'react-redux';
import React from 'react';
import {StyleSheet} from 'react-native';
import store from './src/store/index';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
