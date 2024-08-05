import React, { Component } from 'react'

export default class LifeCycleEx extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Elearn",
      };
      console.log("this is from constructor");
    }
    static getDerivedStateFromProps() {
        console.log("this is from getDerivedStateFromProps");
        return null;
    }
  render() {
    console.log("this is from render")
    return (
      <div><h1>Welcome to {this.state.name}</h1></div>
    )
  }
}
