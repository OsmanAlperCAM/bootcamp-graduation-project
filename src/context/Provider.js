import React from 'react';
import {createStore} from 'redux';
import {Provider as ReduxProvider} from 'react-redux';

import reducer from './reducers';
import store from './store';

export default function Provider({children}) {
  const reduxStore = createStore(reducer, store);

  return <ReduxProvider store={reduxStore}>{children}</ReduxProvider>;
}