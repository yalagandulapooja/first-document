import React, { useState } from 'react';
import './main.css';
import Axios from 'axios';

const AddStudentFun = () => {
    const [id,setId] = useState("");
    const [name,setName] = useState("");
    const [age,setAge] = useState("");
    const [address,setAddress] = useState("");

    let saveData=(e)=> {
        e.preventDefault();
        Axios.post(`http://localhost:4000/student`, {id,name,age,address})
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
        <form>
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
                <button onClick={saveData}>Add Student</button>
            </div>
        </form>
    </div>
  )
}

export default AddStudentFun