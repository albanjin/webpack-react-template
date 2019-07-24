// import React, { Component } from 'react'

import {Button,WhiteSpace}  from 'antd-mobile'
import {connect}  from 'react-redux'
import {TESTDATE} from '../../store/types'

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
                <WhiteSpace/>
                <Button type="primary" 
                    onClick={()=>{ this.props.changeInputVal(this.props.inputVal) }}>减一</Button>
                <WhiteSpace/>    
                <Button type="" 
                    onClick={()=>{ this.props.changeInputVal(this.props.inputVal / 1 + 2) }}>+一</Button>
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
        changeInputVal(inputVal){
            const action = {
                type :TESTDATE,
                inputVal :  inputVal - 1
            }
            dispatch(action)

        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OtherPage)

// export default OtherPage
// module.exports = {OtherPage}