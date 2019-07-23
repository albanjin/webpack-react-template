import React, { Component } from 'react'
import {Route,HashRouter} from 'react-router-dom'
import Loadable from 'react-loadable';
// import { Spin } from 'antd';


import Spin from 'antd/es/spin';
import 'antd/es/spin/style/index.css';
import './loading.scss'

const Loading =()=>{
    return (
        <div className="Loading" >
            <Spin tip="Loading..."></Spin>
        </div>
        
    ) 
}
const HomePage = Loadable({
    loader: () => import('../pages/homePage/HomePage.jsx'),
    loading: Loading
});

const OtherPage = Loadable({
    loader: () => import('@/pages/otherPage/index.jsx'),
    loading: Loading
});  

// const  HomePage = Loadable({  loader: () => import('@/pages/homePage/HomePage.jsx'), loading: Loading})

export class RoutersJs extends Component {
    render() {
        return (
            <HashRouter>
                <Route path="/" exact component={HomePage} />
                <Route path="/about" component={OtherPage} />
            </HashRouter>
        )
    }
}

export default RoutersJs
