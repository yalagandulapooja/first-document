import Axios from 'axios';
import React, { useState } from 'react';
import innerStyles from '../comonents/Innerpages/innerpage.module.css';


const AddNewBatch = () => {
  const [id, setId] = useState("");
    const [cname, setcname] = useState("");
    const [trainer, settrainer] = useState("");
    const [date, setdate] = useState("");
    const [time, settime] = useState("");
    const [duration, setduration] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
        Axios.post(`http://localhost:4000/Nbatch`, {id, cname, trainer, date, time, duration})
        .then((res)=> {
            alert("New Batch Added Successfully...")
            setId("");
            setcname("");
            settrainer("");
            setdate("");
            settime("");
            setduration("");
        })
        .catch((err) => {
            console.log(err);
        })
    }
  return (
    <div>
      <div>
        <div className="container">
        <div className="row">
            <div className="col-lg-9">
                <form className={`${innerStyles.box_shadow} p-3`} onSubmit={submitHandler}>
                  <div className="row">
                  <div>
                      <input type="text" name="id" placeholder="ID" value={id} className="form-control my-4" onChange={(e)=>setId(e.target.value)} />
                    </div>
                    <div>
                      <input type="text" name="coursename" placeholder="CourseName" value={cname} className="form-control my-4" onChange={(e)=>setcname(e.target.value)} />
                    </div>
                    <div>
                      <input type="text" name="trainer" placeholder="Trainer" value={trainer} className="form-control my-4" onChange={(e)=>settrainer(e.target.value)} />
                    </div>
                    <div>
                      <input type="date" name="date" placeholder="Date" value={date} className="form-control my-4" onChange={(e)=>setdate(e.target.value)} />
                    </div>
                    <div>
                      <input type="time" name="time" placeholder="Time" value={time} className="form-control my-4" onChange={(e)=>settime(e.target.value)} />
                    </div>
                    <div>
                      <input type="text" name="duration" placeholder="Duration" value={duration} className="form-control my-4" onChange={(e)=>setduration(e.target.value)} />
                    </div>
                    <div>
                    <input type="submit" value="Register" className="btn btn-warning my-3" />
                    </div>
                  </div>
                </form>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default AddNewBatch