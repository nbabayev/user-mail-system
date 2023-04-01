import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link to="/create-post">Create Post</Link>
    </div>
  );
};

export default Dashboard;
