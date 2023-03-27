import React, { useState } from 'react';
import Icon1 from '../../assets/full.png';
import demo from '../../assets/UI.png';
import Icon3 from '../../assets/host.png';
import TextField from '@material-ui/core/TextField';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Button } from '../ButtonElements';
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP, Imgbg, Divider } from './ServicesElements';
import * as smoketest from '../../api';

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
    <Divider id='services'>
      <Imgbg src={demo}/>
      <ServicesH1 style={{marginBottom: "1rem"}}>SIGN UP TO YOUR INTERESTED ROLE TO RECEIVE LATEST UPDATE</ServicesH1>
    <ServicesContainer>
      <ServicesWrapper style={{marginBottom: "1rem"}} >
        <ServicesCard onClick={handleRenterButtonClick} style={{background: isRenter=== true ?"#EB65A0":"white"}}>
          <ServicesH2>Renter</ServicesH2>
        </ServicesCard>

        <ServicesCard onClick={handleHostButtonClick} style={{background: isRenter=== false ?"#EB65A0":"#ffffff72"}}>
          <ServicesH2>Host</ServicesH2>
        </ServicesCard>
      </ServicesWrapper>

      <ServicesCard style={{background:"#ffffff05", boxShadow: "none"}}>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Email"
                value={email}
                onChange={handleEmailChange}
                style={{marginBottom: "1rem"}}
              />
              <Button type="submit" onClick={handleSubmit}>Submit</Button>
            </form>
          </ServicesCard>
    </ServicesContainer>
    </Divider>
    
  );
};

export default Services;

