import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';

import AppNavigation from './src/navigation';
import React from 'react';

const App = () => {
  
  return (
    <SafeAreaView style={backgroundStyle}>
      
        <View style = {styles.container}>
          <Text>Hello world!</Text>
        </View>
    
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});


export default App;
