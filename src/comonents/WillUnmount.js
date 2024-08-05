import React, { Component } from 'react'
import Student from './Student'
import Student1 from './Student1';

export default class WillUnmount extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        show: true,
      }
    }
    changeData=()=> {
        this.setState({
            show: false,
        });
    };
    render() {
        let msg;
        if (this.state.show) {
            msg = <Student1 />;
        } else {
            msg = "";
        }
    
    return (
        <>
        <h1>{msg}</h1>
        <button onClick={this.changeData}>Update</button>  
        </>
    )
  }
}


