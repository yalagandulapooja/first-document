import React, { useState } from 'react';
import innerStyles from '../comonents/Innerpages/innerpage.module.css';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
    const [uname, setUname] = useState("");
    const [pwd, setPwd] = useState("");
    const navigate = useNavigate();
    const  submitHandler = (e) => {
        e.preventDefault();
        if(uname==="Admin" && pwd==="123456") {
            navigate("/admindashboard")
            alert("valid")
        } else {
            alert("Invalid Uname & Password")
            setUname("");
            setPwd("");
        }
        }
  return (
    <div>
        <div className={innerStyles.contactus}>
      <div className={innerStyles.breadcrumb}>
        <h3>Admin</h3>
      </div>
      </div>
      <div className="container my-4">
            <div className="row">
            <div className="col-lg-3 "></div>
                <div className="col-lg-6 ">
                  <form className={`${innerStyles.box_shadow} p-3`} onSubmit={submitHandler}>
                    <div className="row">
                      <div className="col-md-12">
                        <input type="text" name="uname" placeholder="UserName" className="form-control" value={uname} onChange={(e)=>setUname(e.target.value)} />
                        <div id="usernameNote" className={innerStyles.errmsg}></div>
                      </div>
                      <div className="col-md-12">
                        <input type="password" name="password" placeholder="password" className="form-control" value={pwd} onChange={(e)=>setPwd(e.target.value)} />
                        <div id="passwordNote" className={innerStyles.errmsg}></div>
                      </div>
                      <div>
                      <input type="submit" value="Log In" className="btn btn-warning my-3" />
                      </div>
                    </div>
                  </form>
                </div>
                </div>
          </div>
    </div>
  )
}

export default Admin