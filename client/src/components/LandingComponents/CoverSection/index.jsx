import React from 'react';
import Video from '../../../assets/videos/Main(ver2).mp4';
import { CoverContainer, CoverBg, VideoBg, CoverContent, CoverH1, CoverP, ImgLogo } from './CoverElements';
import { makeStyles } from '@material-ui/core/styles';
import text from "../../../assets/images/logo.png";
import { Button } from '../ButtonElements';
import { useNavigate } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const CoverSection = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleNavigate = (event) => {
    navigate("/homepage");
  }

  return (
    <CoverContainer id='home'>
      <CoverBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' playsInline />
      </CoverBg>
      <CoverContent>
      <Button  to='about' style={{padding: '30px', fontSize: '40px' }} smooth={true} duration={500} spy={true} exact='true' offset={-80} primary={1} >SIGN UP NOW</Button>
      </CoverContent>
    </CoverContainer>
  );
};

export default CoverSection;


