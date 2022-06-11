import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import StoreReducer from './Redux/index'

import supraPersistStore from './Store';
import { PersistGate } from 'redux-persist/integration/react'
const { store, persistor } = supraPersistStore();


ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App/>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

