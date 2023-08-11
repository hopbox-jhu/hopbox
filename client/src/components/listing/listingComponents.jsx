import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 700px;
@media screen and (max-width: 820px) {
width: 100%;
max-width: 650px; 
}

@media screen and (max-width: 450px) {
  width: 100%;
  max-width: 350px; 
}
`;

export const ImageContainer = styled.div`
  display: flex;
  background:#961616;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 40%;
  flex-direction: row;
`;



export const Divider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  background:red;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0.5vw;
  width: 60%;
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