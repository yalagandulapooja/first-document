import React, { Component } from 'react';
import Axios from 'axios';
import { Button } from 'bootstrap/dist/js/bootstrap.bundle';

export default class BasicGet extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         student:[],
      }
    }
    componentDidMount() {
        Axios.get("http://localhost:4000/student")
        .then((res) => {
            this.setState({
                student: res.data,
            })
        })
        .catch((err) => {
            console.log(err);
        })
    }
  render() {
    let {student}=this.state;
    return (
      <div>
        <table>
            <thead>
                <tr>
                    <th>SNO</th>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>ADDRESS</th>
                    
                </tr>
            </thead>
            <tbody>
            {student.map((stu) => {
                return(
                    <tr key={stu.id}>
                        <td>{stu.id}</td>
                        <td>{stu.name}</td>
                        <td>{stu.age}</td>
                        <td>{stu.address}</td>
                    </tr>
                )
              })}
            </tbody>
        </table>
        
      </div>
    )
  }
}
