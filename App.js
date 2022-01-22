import AppNavigation from './src/navigation';
import React from 'react';
import {StyleSheet} from 'react-native';

const App = () => {
  return <AppNavigation />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
