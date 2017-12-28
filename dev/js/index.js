import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger'
import allReducers from './reducers'
import App from './components/app'


// const myLogger = (store) => (next) => (action) => {
//   console.log("Logger Action ",action);
//   next(action);
// }

const store = createStore(allReducers,{},applyMiddleware(logger()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
    document.getElementById('root')
);


// store.subscribe(()=>{
//   console.log ("store updated!",store.getState());
// })
