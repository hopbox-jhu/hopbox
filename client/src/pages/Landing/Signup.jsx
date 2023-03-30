import { useState } from "react";
import { Button, TextField } from "@mui/material";
import Navbar from "../../components/Navbar";
import Sidebar from '../../components/Sidebar';
import SignupSection from '../../components/SignupSection';
import image1 from "../../assets/background.png";
import image2 from "../../assets/empty.png";
import image3 from "../../assets/full.png";

function Signup() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle} />
    <Navbar toggle={toggle} />
    <Signup />
    </>
  );
}

export default Signup;
