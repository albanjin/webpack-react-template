// import React, { Component } from 'react'
// import Loadable from 'react-loadable'
const loadingComponent =()=>{
    return (
        <div>loading</div>
    ) 
}

const LoadableComponent = Loadable({
    loader:import('./HomePage.jsx'),
    loading:loadingComponent
});

export default class HomePage extends React.Component {
    render() {
      return <LoadableComponent/>;
    }
}
// module.exports = {HomePage}

