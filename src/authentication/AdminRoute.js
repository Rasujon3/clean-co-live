import React from "react";
import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import useAdmin from "./../hooks/useAdmin";

const AdminRoute = () => {
  //   const [user, loading] = useAuthState(auth);
  const [admin] = useAdmin();
  let location = useLocation();

  //   if (loading) {
  //     return <Loading />;
  //   }

  if (!admin) {
    return <Navigate to="/" replace></Navigate>;
  }
  return <Outlet />;
};

export default AdminRoute;
