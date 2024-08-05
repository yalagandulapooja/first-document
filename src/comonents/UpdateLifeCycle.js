import React, { Component } from 'react'

export default class UpdateLifeCycle extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"elearn",
      }
    }
    static getDerivedStateFromProps() {
        console.log("this is from getDerivedStateFromProps");
        return null;
    }
    shouldComponentUpdate() {
        console.log("this is from shouldComponentUpdate");
        return true;
    }
    getSnapshotBeforeUpdate(preProps,preState) {
        console.log("State value before update"+preState.name);
        return null;
    }
    componentDidUpdate() {
        console.log("State value after update"+this.state.name);
    }
    changeData=()=> {
        this.setState({
            name:"Pooja."
        })
    }
  render() {
    return (
        <div><h1>Welcome to {this.state.name}</h1>
        <button onClick={this.changeData}>Update</button></div>
    )
  }
}
