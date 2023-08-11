import styled from 'styled-components';

export const CardContainer = styled.div`

@media screen and (max-width: 450px) {
 height:

}
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 40%;
  @media screen and (max-width: 450px) {
  width: 80%;
  }
`;


export const Divider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  @media screen and (max-width: 450px) {
    flex-direction: column;
  }
`;

export const Wrapper = styled.div`
  margin: 2%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 2%;
  width: 60%;
  height: 100%;
  @media screen and (max-width: 450px) {
  width: 90%;
  }
`;

export const Heading = styled.h1`
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 350;
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


export const GridImage = styled.img`
  height: 100px;
  width: 50px;
  border-radius: 8px;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  max-width: 80%;
`;

export const SingleImage = styled.img`
  height: 250px;
  width: 250px;
  border-radius: 8px;
  max-width: 80%;
`;