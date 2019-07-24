

import { Button, WhiteSpace, WingBlank } from 'antd-mobile'

import { connect } from 'react-redux'

import {TESTDATE}  from '../../store/types'


export class HomePage extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div >
                homePage

                <WingBlank>
                    <Button onClick={this.btnHandel.bind(this)}>default</Button><WhiteSpace />
                    <Button disabled>default disabled</Button><WhiteSpace />
                </WingBlank>

                <div className="test">
                    {this.props.inputVal}
                    <Button onClick={()=>{ this.props.changeInputVal(this.props.inputVal)}}>增加1</Button>
                </div>

            </div>
        )
    }
    btnHandel(){
        // console.log(this.props)
        this.props.history.push('/about')
    }
}
const mapStateToProps = (state) => {
    return {
        inputVal : state.inputVal
    }
}

const dispathchToProps  =  (dispatch) => {
    return {
        changeInputVal(inputVal){

            const action = {
                type:TESTDATE,
                inputVal:Number(inputVal ) + 1
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps,dispathchToProps)(HomePage)

// module.exports = {HomePage}

