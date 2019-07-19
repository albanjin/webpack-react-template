import React, { Component } from 'react'
import {Route,HashRouter} from 'react-router-dom'

import HomePage from '@/pages/homePage/HomePage.jsx'
// console.log('HomePage',HomePage)
import OtherPage from '@/pages/otherPage/index.jsx'
// const HomePage1 = r => require.ensure([], () => r(require('@/pages/homePage/index.jsx')), 'HomePage')
// console.log(HomePage1)
// const OtherPage1 = r => require.ensure([], () => r(require('@/pages/otherPage/index.jsx')), 'OtherPage')

const Loading =()=>{
    return (
        <div>loading</div>
    ) 
}

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
