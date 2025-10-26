import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Navbar1 from "./Components/Navbar1";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import Services from "./Components/Services";
import ContactUs from "./Components/ContactUs";
import Crousel from "./Components/Crousel";
import YourBrandMatters from "./Components/YourBrandMatters";
import Footer from "./Components/Footer";

// Layout component with navbars
function Layout() {
  const location = useLocation();

  useEffect(() => {
    // Check if there's a hash in the URL
    if (location.hash) {
      const sectionId = location.hash.substring(1); // Remove the #
      const element = document.getElementById(sectionId);
      if (element) {
        // Small delay to ensure page is fully loaded
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="scroll-smooth">
      <Navbar1 />
      <Navbar />
      <section id="Home">
        <Home />
      </section>
      <section id="AboutUs">
        <AboutUs />
      </section>
      <section id="Services">
        <Services />
      </section>
      <YourBrandMatters />
      <Crousel />
      <section id="ContactUs">
        <ContactUs />
      </section>
      <Footer/>
    </div>
  );
}

function App() {
  return <Layout />;
}

export default App;