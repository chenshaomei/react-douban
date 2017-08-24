import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './stores';

// 引入store
const store = configureStore();

// 引入路由
import { routes } from './router';

// 引入全局css
import './css/base.css';

render(
    <Provider store = { store }>
    <Router history={browserHistory}>
        {
            routes
        }
    </Router>
    </Provider>
    , document.getElementById('app'));
