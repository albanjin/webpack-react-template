// import React, { Component } from 'react'

// import { DatePicker } from 'antd-mobile';
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';


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

            </div>
        )
    }
    btnHandel(){
        // console.log(this.props)
        this.props.history.push('/about')
    }
}

export default HomePage

// module.exports = {HomePage}

