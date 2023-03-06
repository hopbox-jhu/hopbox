import { useState } from "react";
import { Button, TextField } from "@mui/material";
import Navbar from "../../components/Navbar";
import Sidebar from '../../components/Sidebar';
import CoverSection from '../../components/CoverSection';
import image1 from "../../assets/background.png";
import image2 from "../../assets/empty.png";
import image3 from "../../assets/full.png";

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
    </>
  );
}

export default Landing;
