import React, { useState } from 'react';
import word from '../../assets/hopbox word.png';
import demo from '../../assets/coverobject.jpeg';
import object1 from '../../assets/object1.png';
import TextField from '@material-ui/core/TextField';
import { Button } from '../ButtonElements';
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesH2, ServicesP, Imgbg, Divider } from './ServicesElements';
import { Imgthingie, Imgword, ServicesBox, SubmitButton, ServicesH3, SignUpWrapper } from './ServicesElements';
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
    <ServicesContainer>
      <Imgword src ={word}/>
      <ServicesH1> We connect students who need storage with those who have extra space, solving the issues of mismatched housing dates, high costs of public storage options, and the need for secure and convenient storage.</ServicesH1>

      <SignUpWrapper> 
        <Imgthingie src={object1}/>
        <ServicesP>
          Sign up to your interested role to <br/> receive our latest update!
        </ServicesP>
        <ServicesWrapper style={{marginBottom: "1rem", marginTop: "1rem"}} >
          <ServicesBox onClick={handleRenterButtonClick} style={{background: isRenter=== true ?"#000000":"#ffffff00"}}>
            <ServicesH2>Renter</ServicesH2>
          </ServicesBox>
          <ServicesBox onClick={handleHostButtonClick} style={{background: isRenter=== false ?"#000000":"#ffffff00"}}>
            <ServicesH2>Host</ServicesH2>
          </ServicesBox>
        </ServicesWrapper>
        <form onSubmit={handleSubmit} style = {{
          marginLeft:"20px"
        }}>
        <TextField
          className="emailTextInput"
          variant="outlined"
          label="Email"
          value={email}
          style={{ marginBottom: "1rem", color: "white", width: "95%", height: "5%" }}
          onChange={handleEmailChange}
          InputProps={{
            style: {
              borderRadius: 40,
              border: "4px solid white",
              color: "white",
            }
          }}
          InputLabelProps={{
            style: {
            fontWeight: '500',
            fontSize: '1.75rem',
            color:"black",
            fontStyle: "italic",
            marginLeft:'20px'
          }}}
        />
            <SubmitButton type="submit" onClick={handleSubmit}>
            <ServicesH2>Submit</ServicesH2>
            </SubmitButton>
        </form>
      </SignUpWrapper>
          <ServicesH3>
            Hassle-Free Storage Solution <br/> for College Students
          </ServicesH3>
    </ServicesContainer>
    </Divider>
    
  );
};

export default Services;

