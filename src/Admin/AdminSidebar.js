import React from 'react';
import { NavLink } from 'react-router-dom';
import innerStyles from '../comonents/Innerpages/innerpage.module.css';

const AdminSidebar = () => {
  return (
    <div>
        <ul className={innerStyles.navigation}>
            <li>
                <NavLink to="">Add Latest News</NavLink>
            </li>
            <li>
                <NavLink to="deletelnews">Delete&Edit Latest News</NavLink>
            </li>
            <li>
                <NavLink to="addnewbatch">Add NewBatch</NavLink>
            </li>
            <li>
                <NavLink to="deletenewbatch">Delete&Edit NewBatch</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default AdminSidebar