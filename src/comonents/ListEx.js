import React, { Component } from 'react'

export default class ListEx extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         names: ["Narendar","Pooja","Charan"]
      }
    }
  render() {
    return (
      <div>
        <h1>{this.state.names[2]}</h1>
      </div>
    )
  }
}
