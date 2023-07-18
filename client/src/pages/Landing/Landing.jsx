import { useState } from "react";
import Navbar from "../../components/LandingComponents/Navbar";
import Sidebar from '../../components/LandingComponents/Sidebar';
import CoverSection from '../../components/LandingComponents/CoverSection';
import InfoSection from "../../components/LandingComponents/InfoSection";
import { aboutObj, discoverObj } from '../../components/LandingComponents/InfoSection/Data';
import Footer from "../../components/footer"; 
import Services from "../../components/LandingComponents/Services"

function Landing() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle} />
    <Navbar toggle={toggle} />
    <div style={{ overflowX: 'hidden' }}>
      <CoverSection />
      <InfoSection {...aboutObj} />
      <InfoSection {...discoverObj} />
      <Services/>
      <Footer/>    
    </div>
  </>
  );
}

export default Landing;
