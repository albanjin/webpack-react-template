import React, { Component } from 'react'
import {Route,HashRouter} from 'react-router-dom'
import Loadable from 'react-loadable';


// import Spin from 'antd/es/spin';
// import 'antd/es/spin/style/index.css';
import './loading.scss'
import {Icon} from 'antd-mobile'

const Loading = ()=>{
    return (
        <div className="Loading-box">
            <div className="Loading" >
                {/* <Spin tip="Loading..."></Spin> */}
                <Icon type="loading" size="lg"/>
            </div>
            <div className="loading-desc">Loading...</div>
        </div> 
    ) 
}
const HomePage = Loadable({
    loader: () => import(/* webpackChunkName: "homePage" */ '../pages/homePage/HomePage'),
    loading: Loading
});

const OtherPage = Loadable({
    loader: () => import('@/pages/otherPage/index.jsx'),
    loading: Loading
});  

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
