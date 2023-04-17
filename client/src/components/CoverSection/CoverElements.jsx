import styled from 'styled-components';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';

export const CoverContainer = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100 vw;
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
  margin: 0px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const CoverContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CoverH1 = styled.h1`
  color: #ffffff;
  font-size: 60px;
  text-align: center;
  

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const CoverP = styled.p`
  margin-top: 24px;
  color: #ffffff;
  font-size: 28px;
  text-align: center;
  max-width: 600px;
  font-weight: bold;
  @media screen and (max-width: 768px) {
    font-size: 22px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const ImgLogo = styled.img`
  margin-top: 10%;
  width: 23vw;
  height: 16vh;

  @media screen and (max-width: 480px) {
    width: 70vw;
    height: 14vh;
  }

  @media screen and (max-width: 768px) {
    width: 70vw;
    height: 14vh;
  }
`;