import React, { Component } from 'react'

export default class StateEx2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "Pooja Yalagandula"
      }
    }
    changedata=()=> {
        this.setState({
            address:"Hyderabad.",
        })
    }
  render() {
    return (
      <div>
        <h1>I'm {this.state.name}, From {this.state.address}</h1>
        <button onClick={this.changedata}>click here</button>
      </div>
    )
  }
}
