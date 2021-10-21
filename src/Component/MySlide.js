import React, { Component } from 'react'

export default class MySlide extends Component {
    render() {
        return (
            <div style={{display:"inline-block", width:"100px",height:"200px",border:"1px solid red",backgroundColor:"lightgreen"}}>
                {this.props.index}
            </div>
        )
    }
}
