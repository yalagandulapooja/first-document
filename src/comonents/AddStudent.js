import React, { Component } from 'react';
import './main.css';
import Axios from 'axios';

export default class AddStudent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         id:'',
         name:'',
         age:'',
         address:'',
      }
    }
    changeData=(e) => {
        this.setState({
            [e.target.name]:e.target.value,
        })
    }
    submitHandler=(e)=> {
        let {id,name,age,address}=this.state;
        e.preventDefault();
        Axios.post("http://localhost:4000/student", {id,name,age,address})
        .then(res=> {
            alert("Student Added Successfully...");
            this.setState({
                id:'',
                name:'',
                age:'',
                address:'',
            })
        }
        )
    }
  render() {
    let {id,name,age,address}=this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
            <div>
                <input type="text" name="id" placeholder="ID" value={id} onChange={this.changeData} />
            </div>
            <div>
                <input type="text" name="name" placeholder="NAME" value={name} onChange={this.changeData}/>
            </div>
            <div>
                <input type="text" name="age" placeholder="AGE" value={age} onChange={this.changeData}/>
            </div>
            <div>
                <input type="text" name="address" placeholder="ADDRESS" value={address} onChange={this.changeData}/>
            </div>
            <div>
                <input type="submit" value="Add Student" />
            </div>
        </form>
      </div>
    )
  }
}
