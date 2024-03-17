import React from "react";
import Router from "./Router";

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import { thunk } from 'redux-thunk';

import rootReducer from './reducers'

const store = createStore(rootReducer, applyMiddleware(thunk));

const SeriesApp = props => {
  return(
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default SeriesApp;
