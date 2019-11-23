import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import { App } from './app/components/app/App';
import { Provider } from 'react-redux';

import { configureAppStore } from 'app/store/app.store';

ReactDOM.render(
    <Provider store={configureAppStore()}>
        <App />
    </Provider>,
    document.getElementById('root')
);
