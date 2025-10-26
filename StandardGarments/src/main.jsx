import './index.css'

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import HealthCare from "./Components/HealthCare";
import CorporateGifts from "./Components/CorporateGifts";
import EducationUniforms from "./Components/EducationUniforms";
import PoloAndTShirts from "./Components/PoloAndTShirts";
import HospitalityUniforms from "./Components/HospitalityUniforms";
import PrintsAndFabrics from "./Components/PrintsAndFabrics";
import WinterWear from "./Components/WinterWear";
import Navbar from './Components/Navbar';
import NewArrivals from './Components/NewArrivals';
import CustomUniforms from './Components/CustomUniform';
import Footer from './Components/Footer';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/HealthCare",
    element:<><Navbar /><HealthCare /><Footer /></>
  },
  {
    path: "/WinterWear",
    element: <><Navbar /><WinterWear /><Footer /></>
  },
  {
    path: "/CustomUniform",
    element: <><Navbar /><CustomUniforms /><Footer /></>
  },
  {
    path: "/CorporateGifts",
    element: <><Navbar /><CorporateGifts /><Footer /></>
  },
  {
    path: "/EducationUniforms",
    element: <><Navbar /><EducationUniforms /><Footer /></>
  },
  {
    path: "/PoloAndTShirts",
    element: <><Navbar /><PoloAndTShirts /><Footer /></>
  },
  {
    path: "/HospitalityUniforms",
    element: <><Navbar /><HospitalityUniforms /><Footer /></>
  },
  {
    path: "/PrintsAndFabrics",
    element: <><Navbar /><PrintsAndFabrics /><Footer /></>
  },
  {
    path: "/NewArrivals",
    element: <><Navbar /><NewArrivals /><Footer /></>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
