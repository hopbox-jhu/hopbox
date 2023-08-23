import React, { useEffect, useState } from 'react';
import Video from '../../../assets/videos/Main(ver2).mp4';
import VideoMobile from '../../../assets/videos/MainMobile2.mp4';
import { CoverContainer, VideoBg, CoverContent  } from './CoverElements';
import { makeStyles } from '@material-ui/core/styles';
import text from "../../../assets/images/logo.png";
import { Button } from '../ButtonElements';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the CSS

// Initialize AOS
AOS.init();




const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const CoverSection = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 850); // Adjust the breakpoint (768) to your desired mobile width
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Call handleResize initially to set the initial state based on the screen size
    handleResize();

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNavigate = () => {
    navigate("/homepage");
  };

  return (
    <CoverContainer id='home'>
        {isMobile ? (
          <VideoBg autoPlay loop muted src={VideoMobile} type='video/mp4' playsInline />
        ) : (
          <VideoBg autoPlay loop muted src={Video} type='video/mp4' playsInline />
        )}
      <CoverContent>
      <Button  to='services' style={{ padding: '30px', fontSize: '30px', borderRadius: '15px' }} smooth={true} duration={500} spy={true} exact='true' offset={-80} primary={1} >SIGN UP NOW</Button>
      </CoverContent>
    </CoverContainer>
  );
};

export default CoverSection;


