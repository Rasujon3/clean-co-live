import React from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRoute = () => {
  //   const [user, loading] = useAuthState(auth);
  const user = false;
  let location = useLocation();

  //   if (loading) {
  //     return <Loading />;
  //   }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }}></Navigate>;
  }
  return <Outlet />;
};

export default PrivateRoute;
