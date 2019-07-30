import './index.css';
// import 'antd-mobile/dist/antd-mobile.css';
import 'lib-flexible'

import React from 'react';
import ReactDOM from 'react-dom';
import RoutersJs from './router/'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import  store from './store'


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <RoutersJs />
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);
