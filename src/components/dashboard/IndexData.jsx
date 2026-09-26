import React from "react";
import { Link, Outlet } from "react-router-dom";


const IndexData = () => {
  return (
    <div className="main">
    <div>


      <div style={{display:"flex",gap:"30px"}}>
        {/* <Link to="/dashboard">Dashboard</Link>
        <Link to="/user">User List</Link>
        <Link to="/student">Student List</Link> */}
      </div>

      <hr />
     <div>
     <Outlet />
     </div>
      
    </div>
  </div>
  );
};

export default IndexData;