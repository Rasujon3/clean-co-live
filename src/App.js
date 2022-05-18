import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { publicRoute } from "./routes/publicRoutes";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Services from "./pages/Services";
import PrivateRoute from "./authentication/PrivateRoute";
import About from "./pages/About";

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
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </Navbar>
    </>
  );
}

export default App;
