import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';






import App from './components/App';

import reducers from './reducer'
import { createStore } from 'redux';
const store =  createStore(reducers);


ReactDOM.render(<Provider store={store}> <App/> </Provider>, 
    document.querySelector('#root'));