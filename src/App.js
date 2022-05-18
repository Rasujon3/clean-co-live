import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { publicRoute } from "./routes/publicRoutes";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import PrivateRoute from "./authentication/PrivateRoute";
import { privateRoute } from "./routes/PrivateRoutes";
import AdminRoute from "./authentication/AdminRoute";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar>
        <Routes>
          {publicRoute.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}

          <Route element={<PrivateRoute />}>
            {privateRoute.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))}
          </Route>

          <Route element={<AdminRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </Navbar>
    </>
  );
}

export default App;
