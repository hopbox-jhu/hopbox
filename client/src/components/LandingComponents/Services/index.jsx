import React, { useState } from 'react';
import word from '../../../assets/images/hopbox word.png';
import demo from '../../../assets/images/coverobject.jpeg';
import host from '../../../assets/images/host-button.png';
import rent from '../../../assets/images/rent-button.png';
import TextField from '@material-ui/core/TextField';
import { ServicesContainer, ServicesH1, ButtonsWrapper, ServicesH2, ServicesP, Divider, LeftContainer} from './ServicesElements';
import { ServicesBox, SubmitButton, ServicesH3, ServicesH4, ServicesH5, RightContainer, Input, NameInputWrapper, ImageButton } from './ServicesElements';
import * as smoketest from '../../../api';
import { makeStyles, withStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  underline: {
    '&:hover:not($disabled):before': {
      borderBottom: '2px solid white',
      width: '100%',
    },
    '&:before': {
      borderBottom: '2px solid white',
    },
    '&:after': {
      borderBottom: '2px solid white',
    },
  },
  disabled: {},
}));


const Services = () => {
  const [email, setEmail] = useState('');
  const[name, setName] = useState('');
  const [isRenter, setisRenter] = useState(true);
  const classes = useStyles();
  const [hostButtonClicked, setHostButtonClicked] = useState(false);
  const [renterButtonClicked, setRenterButtonClicked] = useState(false);
  const [submitButtonClicked, setSubmitButtonClicked] = useState(false);


  const handleHostButtonClick = () => {
    setisRenter(false);
    setHostButtonClicked(true);
    setRenterButtonClicked(false);
  };

  const handleRenterButtonClick = () => {
    setisRenter(true);
    setHostButtonClicked(false);
    setRenterButtonClicked(true);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
      // Check if the name field and email field are filled
      if (!name || !email) {
        alert('Please fill in all required fields (Name and Email) before submitting.');
        return; // Prevent form submission
      }
  
      // Check if either of the image buttons is clicked
      if (!hostButtonClicked && !renterButtonClicked) {
        alert('Please select a role (Host or Renter) before submitting.');
        return; // Prevent form submission
      }
    try{
      if (isRenter === true) {
        await smoketest.postRenterEmail(email);
      } else {
        await smoketest.postHostEmail(email);
      }
      setSubmitButtonClicked(true);
      alert('Email submitted successfully!');
      setEmail('');
    } catch (error) {
      console.error(error);
      alert('Something went wrong. Please try again later.');
    }
  };

  return (
    <Divider id="services">
        <LeftContainer data-aos="fade-right" data-aos-duration="1500" >
          <ServicesH1>
           SIGN UP<br></br>NOW
          </ServicesH1>
          <ServicesP>
              Tell us your interested role, and we will<br></br>let you know when HopBox is ready for you
            </ServicesP>
          <ServicesH4>
            Send us any questions
          </ServicesH4>
          <ServicesH5>
            hopbox.jhu@gmail.com
          </ServicesH5>
        </LeftContainer>
          <RightContainer data-aos="fade-left" data-aos-duration="1500" >
          {/* <RightContainer data-aos="fade-left" data-aos-duration="1500"> */}
            <form onSubmit={handleSubmit} style={{width:"90%"}}>
              <NameInputWrapper>
              <ServicesH2>Email</ServicesH2>
                <TextField
                  type="text"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Your Email Address"
                  className={`my-custom-class ${classes.underline}`}
                  InputProps={{
                    classes: {
                      underline: classes.underline,
                      disabled: classes.disabled,
                    },
                    style: {
                      color: 'white',
                    },
                  }}
                  InputLabelProps={{
                    style: {
                      color: 'white',
                    },
                  }}
                />
              </NameInputWrapper>
              <ButtonsWrapper>
              <ImageButton
                type="button"
                onClick={handleHostButtonClick}
                image= {host}
                clicked={hostButtonClicked}

              />
              <ImageButton
                type="button"
                onClick={handleRenterButtonClick}
                image= {rent}
                clicked={renterButtonClicked}
              />
              </ButtonsWrapper>
              <ButtonsWrapper>  
              <SubmitButton 
              type="submit" 
              onClick={handleSubmit}
              clicked={submitButtonClicked} 
              >
                SUBMIT
              </SubmitButton>
              </ButtonsWrapper>
            </form>
          </RightContainer>

    </Divider>
  );
};

export default Services;

