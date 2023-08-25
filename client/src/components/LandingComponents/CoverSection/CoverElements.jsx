import styled from 'styled-components';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';

export const CoverContainer = styled.div`
  background: #ffffff;
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;
export const VideoBg = styled.video`
  position: absolute;
  top: 0;
  width: 100%;
  height: 90%;
  @media screen and (max-width: 850px) {
    height: 80%;
    width: 100%;
  }
  @media screen and (max-width: 450px) {
    height: 55%;
    width: 100%;
  }
`;

export const CoverContent = styled.div`
  z-index: 3;
  position: absolute;
  display: flex;
  margin-top: 60vh;
  margin-right: 60vw;
  @media screen and (max-width: 850px) {
    margin-top: 60vh;
  margin-right: 50%;
  margin-left: 50%;
  }
`;



