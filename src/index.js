import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import RoutersJs from './router/'
import './index.css';
import 'antd-mobile/dist/antd-mobile.css';
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <RoutersJs />
  </BrowserRouter>,
  document.getElementById('root')
);
