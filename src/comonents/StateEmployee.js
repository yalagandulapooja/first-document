import React, { Component } from 'react'

export default class StateEmployee extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        Eid: 1001,
        Ename: "Pooja", 
        Ephno: 9391613058,
        Esallery: 50000,
        Eaddress: "Hyderbad.",
      }
    }
    changedata=()=> {
        this.setState({
            Ephno: 9490586016,
            Esallery: 65000,
            Eaddress: "Medchal."
        })
    }
  render() {
    return (
      <div>
        <h1>{this.state.Eid}, {this.state.Ename}, {this.state.Ephno}, {this.state.Esallery}, {this.state.Eaddress},</h1>
        <button onClick={this.changedata}>change Edata here</button>
      </div>
    )
  }
}
