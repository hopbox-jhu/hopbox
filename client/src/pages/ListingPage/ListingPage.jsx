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