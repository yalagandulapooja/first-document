import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { NavLink } from 'react-router-dom';

const DeleteNewbatch = () => {
  const [Nbatch, setNbatch] = useState([]);
  useEffect(() => {
    Axios.get(`http://localhost:4000/Nbatch`)
    .then((res) => {
      setNbatch(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  });
  let deleteData=(id)=> {
    Axios.delete(`http://localhost:4000/Nbatch/${id}`)
    .then((res) => {
        alert("Nbatch Deleted Succussfully...")
    })
    .catch((err) => {
        console.log(err);
    });
};
  return (
    <div><table className="table table-bordered">
    <thead>
      <tr>
        <th>Edit Data</th>
        <th>S.NO.</th>
        <th>CourseName</th>
        <th>Trainer</th>
        <th>Date</th>
        <th>Time</th>
        <th>Duration</th>
      </tr>
    </thead>
    <tbody>
      {Nbatch.map((bat) => {
        return (
        <tr key={bat.id}>
          <td className="d-flex">
            <button className="btn btn-danger" onClick={()=> {deleteData(bat.id)}}>
              <i className="fa-solid fa-trash"></i>
            </button>
          &nbsp;
          <NavLink to={`/editNbatch/${bat.id}`}>
            <button className="btn btn-info">
              <i className="fa-solid fa-pen"></i>
            </button>
          </NavLink>
          </td>
          <td>{bat.id}</td>
          <td>{bat.cname}</td>
          <td>{bat.trainer}</td>
          <td>{bat.date}</td>
          <td>{bat.time}</td>
          <td>{bat.duration}</td>
          </tr>
          )
          })}
      </tbody>
  </table>
  </div>
  )
}

export default DeleteNewbatch