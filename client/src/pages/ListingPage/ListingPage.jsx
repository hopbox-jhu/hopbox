import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Divider = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    height: 200vh;
    flex-direction: column;
  }
  @media screen and (max-width: 480px) {
    height: 200vh;
    flex-direction: column;
  }
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

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  justify-content: flex-start;
  width: 70%;
  height: 80%;

  
  @media screen and (max-width: 768px) {
    height: 200vh;
    flex-direction: column;
  }
  @media screen and (max-width: 480px) {
    height: 200vh;
    flex-direction: column;
  }
`;