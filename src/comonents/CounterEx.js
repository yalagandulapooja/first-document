import React, { Component } from 'react'

export default class CounterEx extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         counter:0,
      }
    }
    inccounter =() => {
        this.setState({
            counter: this.state.counter+1,
        })
    }
    deccounter=() => {
        this.setState({
            counter:this.state.counter-1,
        })
    }
    resetcounter=()=> {
        this.setState({
            counter: 0,
        })
    }
  render() {
    return (
      <div>
        <h1>Counter: {this.state.counter}</h1>
        <button onClick={this.inccounter}>+</button>
        <button onClick={this.deccounter}>-</button>
        <button onClick={this.resetcounter}>Reset</button>
      </div>
    )
  }
}
