import React, { Component } from 'react'
import Axios from 'axios';
import './main.css';

export default class DeleteStudent extends Component {
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
            });
        })
        .catch((err) => {
            console.log(err);
        })
    }
    deleteData(id) {
        Axios.delete(`http://localhost:4000/student/${id}`)
        .then(res=> {
            alert("Student Deleted Successfully...")
        })
        .catch((err) => {
            console.log(err);
        })
    }
    editData(id) {
      Axios.get(`http://localhost:4000/student/${id}`)
      .then(res=> {
        this.setState({
          id:res.data.id,
          name:res.data.name,
          age:res.data.age,
          address:res.data.address,
        })
      })
      .catch((err) => {
          console.log(err);
      })
  }
  changeData=(e) => {
    this.setState({
        [e.target.name]:e.target.value,
    })
}
submitHandler=(e)=> {
  let {id,name,age,address}=this.state;
  e.preventDefault();
  Axios.put(`http://localhost:4000/student/${id}`, {id,name,age,address})
  .then(res=> {
      alert("Student Added Successfully...");
      this.setState({
          id:'',
          name:'',
          age:'',
          address:'',
      })
  })
  .catch((err) => {
    console.log(err);
})
}
  render() {
    let {student,id,name,age,address} = this.state;
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
                <input type="submit" value="Edit" />
            </div>
        </form>
        <table>
            <thead>
                <tr>
                  <th>SNO</th>
                  <th>NAME</th>
                  <th>AGE</th>
                  <th>ADDRESS</th>
                  <th></th>
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
                        <td>
                          <button className="btn btn-danger" onClick={()=> this.deleteData(stu.id)}>Delete</button>
                          <button className="btn btn-info" onClick={()=> this.editData(stu.id)}>Edit</button>
                        </td>
                    </tr>
                );
              })}
            </tbody>
        </table>
        
      </div>
    )
  }
}
