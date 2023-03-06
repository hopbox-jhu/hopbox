import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import { CoverContainer, CoverBg, VideoBg, CoverContent, CoverH1, CoverP, CoverBtnWrapper, ArrowForward, ArrowRight } from './CoverElements';
import { Button } from '../ButtonElements';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import * as smoketest from '../../api';

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
  const [hover, setHover] = useState(false);
  const [userType, setUserType] = useState('renter');
  const [email, setEmail] = useState('');

  const onHover = () => {
    setHover(!hover);
  };

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (userType === 'renter') {
        await postRenterEmail(email);
      } else {
        await postHostEmail(email);
      }
      alert('Email submitted successfully!');
      setEmail('');
    } catch (error) {
      console.error(error);
      alert('Something went wrong. Please try again later.');
    }
  };

  return (
    <CoverContainer>
      <CoverBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </CoverBg>
      <CoverContent>
        <CoverH1>Summer Storage?</CoverH1>
        <CoverP>HopBox is here to help connect you with those who have free space to rent out. Sign up to get more info</CoverP>
        <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
          <RadioGroup aria-label="user-type" name="user-type" value={userType} onChange={handleUserTypeChange}>
            <FormControlLabel value="renter" control={<Radio />} label="Renter" />
            <FormControlLabel value="host" control={<Radio />} label="Host" />
          </RadioGroup>
          <TextField id="outlined-basic" label="Email" variant="outlined" value={email} onChange={handleEmailChange} />
          <CoverBtnWrapper>
            <Button type="submit" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
              Sign Up {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </CoverBtnWrapper>
        </form>
      </CoverContent>
    </CoverContainer>
  );
};

export default CoverSection;


