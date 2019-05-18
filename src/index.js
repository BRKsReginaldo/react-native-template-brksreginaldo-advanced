import React from 'react';
import '~/config/ReactotronConfig';
import { Provider } from 'react-redux';
import getStore from './store';
import Routes from '~/routes';

const store = getStore();

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
