import AppNavigation from './src/navigation/index';
import { Provider } from 'react-redux';
import React from 'react';
import store from './src/store/index';

const App = () => {
  console.log({store})
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
