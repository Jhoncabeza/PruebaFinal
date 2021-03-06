import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { AppRoutes } from './routes/AppRoutes';
import { store } from './store/store';


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
        <AppRoutes />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

