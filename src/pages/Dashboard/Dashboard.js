import React from "react";
import DashboardSidebar from "./DashboardSidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <DashboardSidebar>
      <Outlet />
    </DashboardSidebar>
  );
};

export default Dashboard;
