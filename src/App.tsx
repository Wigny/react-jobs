import React, { FC } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Jobs from './components/Jobs';

const App: FC = () => (
  <Provider store={store}>
    <Jobs />
  </Provider>
);

export default App;
