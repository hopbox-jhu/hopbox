import { useState } from "react";
import { Button, TextField } from "@mui/material";
import Navbar from "../../components/Navbar";
import Sidebar from '../../components/Sidebar';
import CoverSection from '../../components/CoverSection';
import InfoSection from "../../components/InfoSection";
import { aboutObj, discoverObj, signupObj } from '../../components/InfoSection/Data';
import Footer from "../../components/Footer"; 
import Services from "../../components/Services"

function Landing() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle} />
    <Navbar toggle={toggle} />
    <CoverSection />
    <InfoSection {...aboutObj} />
    <InfoSection {...discoverObj} />
    <Services/>
    <Footer/>    
    </>
  );
}

export default Landing;
