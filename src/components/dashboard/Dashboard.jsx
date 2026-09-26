import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dash">

      <h2 className="wel">welcome</h2>

      <Link to="/User" className="dash-button">
        userlist
      </Link>

      <Link to="/student" className="dash-button">
        student
      </Link>

    </div>
  );
};

export default Dashboard;