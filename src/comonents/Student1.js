import React, { Component } from 'react'

export default class Student1 extends Component {
    componentWillUnmount() {
        alert("this is from willunmount");
    }
  render() {
    return (
      <div><h1>welcome to student</h1></div>
    )
  }
}
