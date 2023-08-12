import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';

export const InfoContainer = styled.div`
  color: #fff;
  background-color: #EDEDED;


  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 100vh;
  width: 100%;
  max-width: 1800px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 0px;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: black;
  font-size: 35px;
  line-height: 5vh;
  font-weight: 900;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 60px;
  line-height: 1.1;
  font-weight: 900;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 24px;
  line-height: 35px;
  color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 100%;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;


export const BulletList = styled.ul`
  list-style: none;
  padding: 20px;
`;

export const BulletPoint = styled.li`
  color: #eb65a0; /* Change the color to your desired pink color */
  font-size: 24px;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

export const BulletText = styled.p`
  color: grey; /* Change the color to your desired grey color */
  font-size: 16px;
  margin-left: 20px;
  margin-bottom: 20px;
`;


export const NavLink = styled(LinkS)`
  color: white;
  background-color: #eb65a0;
  border-radius: 40px;
  display: flex;
  align-items: end;
  justify-content: center;
  text-decoration: none;
  padding: 10px;
  width: 100px;
  height: 100%;
  cursor: pointer;
  &.active {
    border-bottom: 3px solid #EB65A0;
  }
`;