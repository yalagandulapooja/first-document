import React from 'react'
//import { useNavigate } from 'react-router-dom';
import innerStyles from '../comonents/Innerpages/innerpage.module.css';
import AdminSidebar from './AdminSidebar';
import { Outlet } from 'react-router-dom';

const AdminDashboard = () => {
  
    
  return (
    <div>
        <div className={innerStyles.contactus}>
      <div className={innerStyles.breadcrumb}>
        <h3>Admin Dashboard</h3>
      </div>
      </div>
      <div className="container my-4">
            <div className="row">
            <div className="col-lg-3 ">
                <AdminSidebar />
            </div>
                <div className="col-lg-6 ">
                    <Outlet />
                </div>
                </div>
          </div>
    </div>
  )
}

export default AdminDashboard