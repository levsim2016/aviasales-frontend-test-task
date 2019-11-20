import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import { App } from './app/components/app/App';
import { Provider } from 'react-redux';

import { configureAppStore } from 'app/store/appStore';

ReactDOM.render(
  <Provider store={configureAppStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
);
