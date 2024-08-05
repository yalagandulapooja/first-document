import React, { Component } from 'react'

export default class Conditionalrend extends Component {
    constructor(props) {
        super(props);
      
        this.state = {
            choice: 10,
        }
      }
  render() {
    let msg;
    switch (this.state.choice) {
        case 1:
            msg= <h1>Welcome to PC-1...</h1>;
            break;
        case 2:
            msg= <h1>Welcome to PC-2...</h1>;
            break;
        case 3:
            msg= <h1>Welcome to PC-3...</h1>;
            break;
        default:
            msg= <h1>Invalid choice</h1>;
    }
    return msg;

  }
}
