import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, Store } from 'redux';
import { defaultReducer } from '../../services/store';
import promise from 'redux-promise-middleware';
import { render } from '@testing-library/react-native';
import Home from '../../pages/home';

const store: Store = createStore(defaultReducer, applyMiddleware(promise));

describe('Home Page', () => {
  it('should be able', () => {
    const { debug } = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    debug();
  });
})
