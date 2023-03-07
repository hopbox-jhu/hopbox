import React from 'react';
import Video from '../../videos/movebox.mp4';
import { CoverContainer, CoverBg, VideoBg, CoverContent, CoverH1, CoverP, CoverBtnWrapper, ArrowForward, ArrowRight } from './CoverElements';
import { makeStyles } from '@material-ui/core/styles';
import text from "../../assets/hoptext.png";


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

  return (
    <CoverContainer>
      <CoverBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </CoverBg>
      <CoverContent>
        <CoverH1>
        <img src={text} alt="logo" />
        </CoverH1>
        <CoverH1>
        Together we store 
        </CoverH1>
        <CoverP>
        - building a community that shares the load
        </CoverP>
      </CoverContent>
    </CoverContainer>
  );
};

export default CoverSection;


