import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import reducers from './reducer';


import 'bootstrap/dist/css/bootstrap.css';

const stores =  createStore(reducers)


ReactDOM.render(
    <Provider store={stores}>
        <App/>
    </Provider>, 
    document.querySelector('#root'));