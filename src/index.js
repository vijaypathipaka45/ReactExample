import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './components/_Reducers/rootReducer';
import {Provider} from 'react-redux';
import { createLogger } from 'redux-logger';
import {BrowserRouter as Router,Route} from 'react-router-dom';

const loggerMiddleware = createLogger();

const store=createStore(rootReducer,applyMiddleware(thunkMiddleware,loggerMiddleware)); 

ReactDOM.render(<Provider store={store}>
    <Router>
        
    <Route component={App}/>
    </Router >
    </Provider> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
