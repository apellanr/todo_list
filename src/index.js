import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';

import App from './components/app';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
