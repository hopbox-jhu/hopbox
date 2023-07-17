import styled from 'styled-components';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';

export const CoverContainer = styled.div`
  background: white;
  display: flex;
  // justify-content: center;
  // align-items: center;
  height: 100vh;
  width: 100vw;
  position: relative;
  z-index: 1;

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
  }
`;

export const CoverBg = styled.div`
  position: absolute;
  background: white;
  margin: 0px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 90%;
  overflow: hidden;
  background: rgba(235, 101, 160, 0.6);
`;

export const VideoBg = styled.video`
  background: white;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;


export const CoverContent = styled.div`
  z-index: 3;
  margin-top: 60vh;
  margin-left: 10.5vw;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
`;

export const CoverH1 = styled.h1`
  color: #ffffff;
  font-size: 90px;
  text-align: center;
  

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const CoverP = styled.p`
  margin-top: 1px;
  color: #ffffff;
  font-size: 28px;
  text-align: center;
  max-width: 800px;
  font-weight: MEDIUM;
  @media screen and (max-width: 768px) {
    font-size: 22px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const ImgLogo = styled.img`
  margin-top: 10%;
  // width: 535px;
  // height: 200px;

  @media screen and (max-width: 480px) {
    width: 200px;
    height: 70px;
  }

  @media screen and (max-width: 768px) {
    width: 200px;
    height: 60px;
  }

  @media screen and (max-width: 900px) {
    width: 321px;
    height: 120px;
  }
`;