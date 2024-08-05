import React, { useEffect, useState } from 'react';
import './main.css';
import Axios from 'axios';

const DeleteStudentFun = () => {
    const [student, setStudent]= useState([]);
    const [id,setId] = useState("");
    const [name,setName] = useState("");
    const [age,setAge] = useState("");
    const [address,setAddress] = useState("");
    useEffect(()=> {
        Axios.get(`http://localhost:4000/student`)
        .then((res)=> {
            setStudent(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    })
    let deleteData=(id)=> {
        Axios.delete(`http://localhost:4000/student/${id}`)
        .then((res)=> {
            alert("Data Deleted Succussfully...")
        })
        .catch((err) => {
            console.log(err);
        })
    }
    let editData=(id)=> {
           Axios.get(`http://localhost:4000/student/${id}`)
        .then((res)=> {
            setId(res.data.id);
            setName(res.data.name);
            setAge(res.data.age);
            setAddress(res.data.address);
        })
        .catch((err) => {
            console.log(err);
        })
    }
    let submitHandler=(e)=>{
        e.preventDefault();
        Axios.put(`http://localhost:4000/student/${idbh}`, {id,name,age,address})
        .then((res)=> {setId(res.data.id);
            alert("Data Updated Successfully...")
                setId("");
                setName("");
                setAge("");
                setAddress("");
        })
        .catch((err) => {
            console.log(err);
        })
    }
  return (
    <div>
    <form onSubmit={submitHandler}>
            <div>
                <input type="text" name="id" placeholder="ID" value={id} onChange={(e)=>setId(e.target.value)} />
            </div>
            <div>
                <input type="text" name="name" placeholder="NAME" value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div>
                <input type="text" name="age" placeholder="AGE" value={age} onChange={(e)=>setAge(e.target.value)}/>
            </div>
            <div>
                <input type="text" name="address" placeholder="ADDRESS" value={address} onChange={(e)=>setAddress(e.target.value)}/>
            </div>
            <div>
                <input type="submit" value="Edit" />
            </div>
        </form>
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th></th>
                    <th>SNO</th>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>ADDRESS</th>
                    
                </tr>
            </thead>
            <tbody>
              {student.map((stu) => {
                return (
                    <tr key={stu.id}>
                        <td>
                            <button className="btn btn-danger" onClick={()=> {deleteData(stu.id)}}>
                            <i className="fa-solid fa-trash"></i>
                            </button>
                        </td>
                        <td>
                            <button className="btn btn-info" onClick={()=> {editData(stu.id)}}>
                            <i className="fa-solid fa-pen"></i>
                            </button>
                        </td>
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

export default DeleteStudentFun