import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const StudentDataFunEx = () => {
  const [student,setStudent]= useState([]);
  useEffect(()=> {
    Axios.get(`http://localhost:4000/student`)
    .then((res) => {
      setStudent(res.data);
    })
    .catch((err) => {
      console.log(err);
    })
  })
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

export default StudentDataFunEx