import React from 'react';
import Video from '../../../assets/videos/main.mp4';
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
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </CoverBg>
      <CoverContent>
        <CoverH1>
        <ImgLogo src={text}/>
        </CoverH1>
        <CoverH1>
        Together we store
        </CoverH1>
        <CoverP>
        building a <mark style={{ backgroundColor: '#EB65A0', color: '#ffffff' }}>community</mark> that <mark style={{ backgroundColor: '#EB65A0', color: '#ffffff' }}>shares</mark> the load
        </CoverP>
        <Button onClick={handleNavigate} style={{marginTop: '35px'}} smooth={true} duration={500} spy={true} exact='true' offset={-80} primary={1} >Get Started</Button>
      </CoverContent>
    </CoverContainer>
  );
};

export default CoverSection;


