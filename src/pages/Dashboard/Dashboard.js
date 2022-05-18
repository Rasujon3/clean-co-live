import React from "react";
import DashboardSidebar from "./DashboardSidebar";
import { Route, Routes } from "react-router-dom";
import AddAdmin from "./AddAdmin";
import AddService from "./AddService";

const Dashboard = () => {
  return (
    <DashboardSidebar>
      <Routes>
        <Route path="/dashboard/ad-admin" element={<AddAdmin />} />
        <Route path="/dashboard/ad-service" element={<AddService />} />
      </Routes>
    </DashboardSidebar>
  );
};

export default Dashboard;
