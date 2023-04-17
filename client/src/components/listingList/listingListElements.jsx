import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  @media screen and (max-width: 768px) {
    height: 200vh;
    flex-direction: column;
  }

  @media screen and (max-width: 480px) {
    height: 200vh;
    flex-direction: column;

  }
`;