import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Divider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
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
  margin-left: 1vw;
  justify-content: flex-start;
  width: 70%;
  height: 100%;
`;

export const Heading = styled.h1`
  font-size: 1.25rem;
  line-height: 1.5;
  font-weight: 600;

  @media screen and (max-width: 1500px) {
    font-size: 0.8rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 0.85rem;
  line-height: 1.8;
  font-weight: 200;
`;