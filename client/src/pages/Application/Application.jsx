import styled from 'styled-components';

export const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  background-color: #FFF1F6;
  height: 100px;
  width: 100%;

  img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: 27px;
    margin-left: 40px;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(0, 0, 0, 0.2), transparent);
    z-index: 1;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 80px;

    img {
      .container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 15px;
      }
    }
  }

  @media screen and (max-width: 480px) {
    width: auto; /* Adjust to automatically adjust width based on content */

    img {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%; /* Set width to 100% to ensure it spans the available width */
      height: auto; /* Allow height to adjust based on the image's aspect ratio */
      margin: 0 auto; /* Center the image horizontally */
    }
  }
`;



export const Container = styled.div`
  display: flex;
  background: white;
  min-height: 100vh;
  width: 100%;
`;

export const MainContent = styled.div`
  margin-top: 180px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const LeftContainer = styled.div`
  flex: 0 0 45%;
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none; // Hide the left container on smaller screens
  }
`;

export const RightContainer = styled.div`
  flex: 0 0 55%;
  display: flex;
  flex-direction: column;
  background-color: white;
  align-items: center;


  @media screen and (max-width: 768px) {
    
    label {
      font-size: 14px;
    }

    input {
      font-size: 14px;
    }
  }

  @media screen and (max-width: 480px) {

    label {
      font-size: 12px;
    }

    input {
      font-size: 12px;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  height: 50px;
  width: 800px;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-bottom: 220px;

  @media screen and (max-width: 768px) {
    width: 95%; /* Adjust the width to fit smaller screens */
    padding: 15px;
    margin-left: 100px;
  }

  @media screen and (max-width: 480px) {
    width: 80%; 
    padding: 20px; /* Further reduce the padding for smaller screens */
  }
`;

export const Image = styled.img`
  width: 380px;
  height: 380px;
  object-fit: contain; 
  margin-bottom: 40px;
  margin-left: 50px;
`;



export const Heading = styled.div`
  font-size: 3.5vw;
  color: black;
  font-weight: 80;
  line-height: 1.2;
  margin-top: -650px;
  margin-left: 50px;
  overflow: hidden;
  padding: 45px;

  @media screen and (max-width: 480px) {
    font-size: 4.5vw;
  }

  @media screen and (max-width: 768px) {
    font-size: 4.5vw;
  }
`;


export const Form = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  width: 800px;
  height: 600px;
  margin-bottom: 20px;
  background-color: #fff;
  padding: 80px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  label {
    font-size: 20px;
    margin-bottom: 20px;
    margin-top: -20px;
    padding: 5px;
  }

  @media screen and (max-width: 768px) {
    width: 90%; /* Adjust the width to fit smaller screens */
    padding: 80px;
    margin-left: 80px;

  label {
    font-size: 18px;
    margin-bottom: 20px;
    margin-top: -20px;
  }

  }

  @media screen and (max-width: 480px) {
    width: 80%; 
    padding: 40px; /* Further reduce the padding for smaller screens */
  }
`;


export const Label = styled.label`
  margin-top: 10px;
  margin-bottom: 15px;
`;

export const SizeLabel = styled.span`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 15px;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 4px;
  margin-top: 5px;
  margin-bottom: 10px;

  &:focus {
    outline: none;
    border-color: #EB65A0;
  }
`;

export const GiantInput = styled.textarea`
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 4px;
  margin-top: 5px;
  height: 100px;

  &:focus {
    outline: none;
    border-color: #EB65A0;
  }
`;

export const Button = styled.button`
  background-color: #ff99cc;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 20px;
  padding: 10px;
  cursor: pointer;
  margin: 10px;

`;

export const TypeButton = styled.button`
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  margin-top: 5px;
  cursor: pointer;
  background-color: white;
  color: black;
  border: 2px solid ${props => props.clicked ? 'pink' : '#EB65A0'};

  &:focus {
    outline: none;
    background-color: #EB65A0;
    color: white;
    border-color: white;
  }

  &.clicked {
    background-color: #EB65A0;
    color: white;
    border: 'pink';
  }
`;

export const BackButton = styled.button`
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  margin-top: 5px;
  cursor: pointer;
  background-color: ${props => props.isClicked ? 'white' : '#ccc'};
  color: ${props => props.isClicked ? 'black' : 'white'};

  &:focus {
    outline: none;
    box-shadow: 0px 0px 4px #ccc;
  }

  @media screen and (max-width: 480px) {
    padding: 8px;
    font-size: 14px;
  }
`;

export const NextButton = styled.button`
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  margin-top: 5px;
  cursor: pointer;
  background-color: ${props => props.isClicked ? '#FFC0CB' : '#EB65A0'};
  color: white;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 4px ${props => props.isClicked ? '#FFC0CB' : '#EB65A0'};
  }

  @media screen and (max-width: 480px) {
    padding: 8px;
    font-size: 14px;
  }
`;