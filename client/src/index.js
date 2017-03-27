

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, hashHistory} from 'react-router';

import store from './store';
import App from './components/app';
import HistoryHome from './components/historyhome';


document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(
        <Provider store={store}>
        	<Router history={hashHistory}>
        		<Route path="/" component={App} />
        		<Route path="/Vacations" component={HistoryHome} />
            </Router>
        </Provider>,
        document.getElementById('root')
    )
);
