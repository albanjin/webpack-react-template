// import React, { Component } from 'react'

import {Button}  from 'antd-mobile'
import {connect}  from 'react-redux'

class OtherPage extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="about">
                <h1>about</h1>
                {this.props.inputVal}
                <Button type="success" onClick={
                    this.Buttonhandel.bind(this)
                }> 返回首页</Button>
            </div>
        )
    }
    Buttonhandel(){
        this.props.history.push('/')
    }
}

const mapStateToProps = state=>{
    return {
        inputVal:state.inputVal
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OtherPage)

// export default OtherPage
// module.exports = {OtherPage}