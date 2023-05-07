import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Divider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
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