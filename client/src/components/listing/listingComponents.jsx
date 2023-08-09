import styled from 'styled-components';


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

@media screen and (max-width: 768px) {
  flex-direction: column;
}

@media screen and (max-width: 480px) {
  flex-direction: column;

}
`;

export const LeftContainer = styled.div`

display: flex;
flex-direction: column;
background: #2a0e18;

@media screen and (max-width: 768px) {
  height: auto;

}

@media screen and (max-width: 480px) {
  height: auto;

}
`;

export const RightContainer = styled.div`

display: flex;
background: #e61860;
justify-content: center;
align-items: center;
flex-direction: column;

@media screen and (max-width: 768px) {
  height: auto;

}

@media screen and (max-width: 480px) {
  height: auto;

}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1vw;
  justify-content: flex-start;
  padding: 0.5vw;
  width: 70%;
  height: 100%;
`;

export const Heading = styled.h1`
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 350;


  @media screen and (max-width: 1500px) {
  }
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  font-weight: 200;
  word-wrap: break-word;
`;

export const Subtitle2 = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color:#050557;
  font-weight: 400;
  word-wrap: break-word;
`;