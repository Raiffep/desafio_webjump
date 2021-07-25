import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Provider } from 'react-redux';
import store from './src/services/store';
import Home from './src/pages/home';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle='dark-content' backgroundColor='white' />
        <Home />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
