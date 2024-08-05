import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './comonents/Innerpages/Home';
import Aboutus from './comonents/Innerpages/Aboutus';
import Courses from './comonents/Innerpages/Courses';
import Contactus from './comonents/Innerpages/Contactus';
import Gallery from './comonents/Innerpages/Gallery';
import Errorpage from './comonents/Innerpages/Errorpage';
import Admin from './Admin/Admin';
import AdminDashboard from './Admin/AdminDashboard';
import AddLnews from './Admin/AddLnews';
import DeleteLnews from './Admin/DeleteLnews';
import DeleteNewbatch from './Admin/DeleteNewbatch';
import AddNewBatch from './Admin/AddNewBatch';
import EditLnews from './Admin/EditLnews';
const Routing = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contactus" element={<Contactus />} />
        
        <Route path="/admin" element={<Admin />} />
        <Route path="/editlnews/:sno" element={<EditLnews />} />
        <Route path="/admindashboard" element={<AdminDashboard />}>
          <Route path="" element={<AddLnews />} />
          <Route path="deletelnews" element={<DeleteLnews />} />
          <Route path="addnewbatch" element={<AddNewBatch />} />
          <Route path="deletenewbatch" element={<DeleteNewbatch />} />
        </Route>
        <Route path="*" element={<Errorpage />} />
    </Routes>
    </>
  )
}

export default Routing