import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import { createBrowserHistory as createHistory } from 'history';
import createStore from './configs/stores';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import RouteConfig from "./configs/route";

const history = createHistory();
const store = createStore({}, history);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
           <RouteConfig/>
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
