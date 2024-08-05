import React, { Component } from 'react'

export default class ClassEx extends Component {
  render() {
    return (
      <div>
        <h2>mr./miss {this.props.name}, From {this.props.address} </h2>
      </div>
    )
  }
}
