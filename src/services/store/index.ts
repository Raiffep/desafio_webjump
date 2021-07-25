import {
  createStore,
  Reducer,
  Store,
  applyMiddleware
} from "redux";

import promise, { FluxStandardAction } from 'redux-promise-middleware';

export interface State {
  isPending: boolean;
  peoples?: object[];
}

const defaultState = {
  isPending: true,
  peoples: []
}

export const defaultReducer: Reducer = (
  state: State = defaultState, action: FluxStandardAction) => {

  switch (action.type) {
    case 'GET_PEOPLES':
      return {
        isPending: false,
        peoples: action.payload,
      };
    case 'GET_PEOPLES_FULFILLED':
      return {
        isPending: false,
        peoples: action.payload,
      };
    default: return state;
  }
};

const store: Store = createStore(defaultReducer, applyMiddleware(promise));

export default store;
