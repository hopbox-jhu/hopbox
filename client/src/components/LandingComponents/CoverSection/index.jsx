import React, { useEffect, useState } from 'react';
import Video from '../../../assets/videos/Main(ver2).mp4';
import VideoMobile from '../../../assets/videos/MainMobile2.mp4';
import { CoverContainer, VideoBg, CoverContent } from './CoverElements';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '../ButtonElements';
import { useNavigate } from 'react-router-dom';
import './styles.css';

// Initialize AOS




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
      <Button
      to="services"
      smooth={true}
      duration={500}
      >
      <svg className="arrows" viewBox="0 0 120 280" xmlns="http://www.w3.org/2000/svg">
        <path className="a1" d="M0 100 L60 164 L120 100"></path>
        <path className="a2" d="M0 140 L60 204 L120 140"></path>
        <path className="a3" d="M0 180 L60 244 L120 180"></path>
      </svg>
    </Button>
      </CoverContent>
    </CoverContainer>
  );
};

export default CoverSection;


