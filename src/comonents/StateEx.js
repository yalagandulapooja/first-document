import React, { Component } from 'react'

export default class StateEx extends Component {
    constructor(){
        super();
        this.state = {
            name: "Elearn InfoTech."
        }
    }
    changedata=()=> {
        this.setState({
            name:"Pooja Yalagandula.",
        })
    }
  render() {
    return (
      <div><h1>Welcome to {this.state.name}</h1>
      <button onClick={this.changedata}>click here</button>
      </div>
    )
  }
}