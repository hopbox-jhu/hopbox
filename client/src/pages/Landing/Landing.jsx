import { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import Navbar from "../../components/LandingComponents/Navbar";
import Sidebar from '../../components/LandingComponents/Sidebar';
import CoverSection from '../../components/LandingComponents/CoverSection';
import InfoSection from "../../components/LandingComponents/InfoSection";
import FaqSection from "../../components/LandingComponents/FaqSection";
import { aboutObj } from '../../components/LandingComponents/InfoSection/Data';
import { FaqObj } from '../../components/LandingComponents/FaqSection/Data';
import Footer from '../../components/Footer'; 
import Services from "../../components/LandingComponents/Services"
import icon from "/src/assets/images/Icon.png";



function Landing() {
  const [isOpen, setIsOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseMove = (event) => {
    const screenWidthThreshold = 768; // Adjust this threshold to your preferred value
    if (window.innerWidth >= screenWidthThreshold) {
      setMousePosition({ x: event.clientX, y: event.clientY });
    }
  };


  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const isMobileScreen = window.innerWidth < 768; 

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <div style={{ overflowX: 'hidden' }}>
        <CoverSection />
        <Services />
        <InfoSection {...aboutObj} />
        {/* <FaqSection {...FaqObj} /> */}
        <Footer/>    
        {!isMobileScreen && (
        <div
          className="container"
          style={{
            position: "fixed",
            left: mousePosition.x - 10,
            top: mousePosition.y - 10,
            pointerEvents: "none",
          }}
        >
          <img src={icon} alt="Icon" style={{ width: "30px", height: "55px" }} />
        </div>
      )}
      </div>
    </>
  );
}

export default Landing;
