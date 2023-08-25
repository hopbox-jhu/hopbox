import styled, {keyframes} from 'styled-components';

export const Divider = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  color: black;
  background-color: white;

  @media screen and (max-width: 768px) {
    height: 110vh;
    flex-direction: column;
  }

  @media screen and (max-width: 480px) {
    height: 110vh;
    flex-direction: column;
  }
`;

export const LeftContainer = styled.div`
  background-color: #ffffff50;
  display: flex;
  flex-direction: column;

  width: 650px;
  @media screen and (max-width: 768px) {
    margin-left: 10%;
    height: 400px;
  }

  @media screen and (max-width: 480px) {
    margin-left: 5%;
    width: 400px;
    height: 420px;
    margin-bottom: 35px;
  }

`;




export const ServicesContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  background-color: white;
  padding: 20vh;


  @media screen and (max-width: 768px) {
    height: auto;
    flex-direction: column;
    width: 100%;
    padding: 0;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 480px) {
    height: auto;
    width: 100%;
  }
`;

export const RightContainer = styled.div`
  background-color: #eb65a0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 650px;



  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr; /* Change back to one column for smaller screens */
  }

  @media screen and (max-width: 768px) {
    height: 50%;
    width: 90vw;
  }

  @media screen and (max-width: 480px) {
    width: 90vw;
    height: 50%;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  margin-top: 5vh;
  justify-content: center;
  width: 100%;
`;

export const NameInputWrapper = styled.div`
display: space-between;
grid-template-columns: 1fr 1fr;
margin-top: 5vh;
margin-left: 8%;
`;


export const ServicesBox = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  height: 4vh;
  width : 7vw;
  padding: 10px;
  transition: all 0.1s ease-in-out;
  border-style: solid;
  border-width: 3px;

  &:hover {
    transform: scale(1.02);
    transition: all 0.1s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 480px) {
    width : 30vw;
  }

  @media screen and (max-width: 768px) {
    width : 30vw;
  }
`;


export const ServicesH1 = styled.span`
  font-size: 5.5vw;
  color: #eb65a0;
  font-weight: 900;
  font-style: thick;
  margin-top: 4vh;
  margin-left: 20px;
  line-height: 0.9;

  @media screen and (max-width: 480px) {
    font-size: 3.5rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 4rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1.25rem;
  color:white;
  font-weight:300;
  
  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;



export const ServicesH3 = styled.span`
  font-size: 2vw;
  color: #ffffff;
  font-weight: 900;
  margin-top: 10%;

  text-align: right;
  margin-right: 20px;

  @media screen and (max-width: 480px) {
    font-size: 6vw;
  }

  @media screen and (max-width: 768px) {
    font-size: 6vw;
  }
`;

export const ServicesH4 = styled.h2`
  font-size: 0.7vw;
  color: black;
  font-weight:300;
  margin-top: 4vh;
  margin-left: 20px;

  
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const ServicesH5 = styled.h2`
  font-size: 1vw;
  color: black;
  font-weight:400;
  margin-top: 1.5vh;
  margin-left: 20px;

  
  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;


export const ServicesP = styled.p`
  font-size: 1.5vw;
  font-weight: 300;
  text-align: left;
  margin-top: 4vh;
  margin-bottom: -10px;
  margin-left: 20px;
  @media screen and (max-width: 1580px) {
    margin-bottom: 10px;
  }
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

// Keyframes for the glowing effect
const glowAnimation = keyframes`
  0% {
    box-shadow: 0 0 0 rgba(235, 101, 160, 0.7);
  }
  50% {
    box-shadow: 0 0 20px rgba(235, 101, 160, 0.7);
  }
  100% {
    box-shadow: 0 0 0 rgba(235, 101, 160, 0.7);
  }
`;

export const ImageButton = styled.button`
  cursor: pointer;


  border: ${({ clicked }) => (clicked ? '2px solid black' : 'none')}; // Add border when clicked
  background-color: ${({ clicked }) => (clicked ? 'black' : 'transparent')}; // Change background color when clicked

  &:not(:last-child) {
    margin-right: 4vw; // Adjust this value as needed for the desired space

  @media screen and (max-width: 480px) {
  width: 140px; /* Set your desired width */
  height: 140px; /* Set your desired height */
  }


  @media screen and (max-width: 768px) {

  }
  }

  /* Add your image file as the background */
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  width: 200px; /* Set your desired width */
  height: 200px; /* Set your desired height */

  &:hover {
    /* Add any hover effects here if needed */
    background-color: black;
  }

  &:active {
    /* Add the glowing effect when clicked */
    animation: ${glowAnimation} 1s ease infinite;
    background-color: black;
  }
  @media screen and (max-width: 480px) {
  width: 140px; /* Set your desired width */
  height: 140px; /* Set your desired height */
  }
`;


export const SubmitButton = styled.button`
  background: black;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  color: white;
  border: 2px solid black; 
  height: 5vh;
  width: 14vw;

  &:hover {
    background-color: black;
    color:black;
  }

  @media screen and (max-width: 480px) {
    width: 20vw;
  }

  @media screen and (max-width: 768px) {
    width: 20vw;
  }
};
`;


const StyledInput = styled.input`
  border: none;
  border-bottom: 2px solid white;
  background: transparent;
  color: white;
  margin-bottom: 1rem;
  width: 0%;
  outline: none;
  padding: 0;
  font-size: 16px;
  line-height: 1.5;
  
  
  &::placeholder {
    color: white;
  }

  &:-ms-input-placeholder {
    color: white;
  }

  &::-ms-input-placeholder {
    color: white;
  }
`;

export const Input = ({ className, ...rest }) => {
  return <StyledInput className={className} {...rest} />;
};