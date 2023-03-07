import React, { useState } from 'react';
import Icon1 from '../../assets/iconlogo.png';
import Icon2 from '../../assets/iconlogo.png';
import Icon3 from '../../assets/iconlogo.png';
import TextField from '@material-ui/core/TextField';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Button } from '../ButtonElements';
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP, VideoBg } from './ServicesElements';
import * as smoketest from '../../api';
import Video from '../../videos/boxvideo.mp4';

const Services = () => {
  const [email, setEmail] = useState('');
  const [isRenter, setisRenter] = useState(true);

  const handleHostButtonClick = () => {
    setisRenter(false);
  };

  const handleRenterButtonClick = () => {
    setisRenter(true);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      if (isRenter === true) {
        await smoketest.postRenterEmail(email);
      } else {
        await smoketest.postHostEmail(email);
      }
      alert('Email submitted successfully!');
      setEmail('');
    } catch (error) {
      console.error(error);
      alert('Something went wrong. Please try again later.');
    }
  };

  return (
    <ServicesContainer id='services'>
      {/* <VideoBg autoPlay loop muted src={Video} type='video/mp4'/> */}
      <ServicesWrapper>

        <ServicesCard onClick={handleRenterButtonClick} style={{background: isRenter=== true ?"#EB65A0":"white"}}>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Renter</ServicesH2>
          <ServicesP>We help reduce your fees and increase your overall revenue</ServicesP>
        </ServicesCard>

          <ServicesCard style={{background:"#00000005"}}>
          <ServicesH2>Signup to receive latest update about our launch</ServicesH2>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Email"
                value={email}
                onChange={handleEmailChange}
              />
              <Button type="submit" onClick={handleSubmit}>Submit</Button>
            </form>
          </ServicesCard>

        <ServicesCard onClick={handleHostButtonClick} style={{background: isRenter=== false ?"#EB65A0":"white"}}>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Host</ServicesH2>
          <ServicesP>Unlock our special membership card and get 5% cashback</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;

