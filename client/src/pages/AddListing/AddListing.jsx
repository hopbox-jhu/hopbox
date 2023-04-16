import styled from 'styled-components';

export const Container = styled.div`
display: flex;
background: #FFF1F6;
height: 100vh;
width: 100vw;

@media screen and (max-width: 768px) {
  height: 200vh;
  flex-direction: column;
}

@media screen and (max-width: 480px) {
  height: 200vh;
  flex-direction: column;

}
`;

export const LeftContainer = styled.div`
height: 100vh;
width: 50vw;
display: flex;
flex-direction: column;
background-color: #FFF1F6;
justify-content: center;
align-items: center;

@media screen and (max-width: 768px) {
  height: auto;
  width: 100vw;
}

@media screen and (max-width: 480px) {
  height: auto;
  width: 100vw;
}
`;

export const RightContainer = styled.div`
height: 100vh;
width: 50vw;
display: flex;
background-color: #FFF1F6;
justify-content: center;
align-items: center;
flex-direction: column;

@media screen and (max-width: 768px) {
  height: auto;
  width: 100vw;
}

@media screen and (max-width: 480px) {
  height: auto;
  width: 100vw;
}
`;

export const ButtonContainer = styled.div`
  display: flex;
  height: 50px;
  width: 700px;
  background-color: #FFF1F6;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-bottom: 220px;
`;


export const Image = styled.img`
  width: 380px;
  height: 380px;
  object-fit: contain; 
  margin-bottom: 40px;
  margin-left: 50px;
`;


export const Header = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  height: 180px; 
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  img {
    margin-right: 16px;
    margin-left: 160px;
    margin-top: 40px;
    width: 160px;
    height: 160px;
    object-fit: contain; 
  }
`;

export const Heading = styled.div`
font-size: 1.5vw;
color: black;
font-weight: 400;
font-style: italic;

line-height:1.3;
margin-bottom: 350px;
margin-left: 50px;

@media screen and (max-width: 480px) {
  font-size: 3.5vw;
}

@media screen and (max-width: 768px) {
  font-size: 3.5vw;
}
`;


export const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
  height: 500px;
  // margin: 0 auto;
  // margin-top: 40px;
  margin-bottom: 20px;
  // margin-right: 60px;

  background-color: #fff;
  padding: 60px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  label {
    font-size: 20px;
    margin-bottom: 20px;
    margin-top: -20px;
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
`;

