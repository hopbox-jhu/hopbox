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
  justify-content: center;
  grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  margin-left: 20%;
  margin-right: 20%;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-left: 20%;
  margin-right: 20%;
  width: 800px;
  margin-bottom: 15px;
  padding: 15px;
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
  max-width: 65%;
  height: 600px; /* Change to auto to allow images to control height */
  position: relative; /* Needed for positioning child images */
  perspective: 1000px;
`;

export const Img1 = styled.img`
  width: 100%;
  left: 40%;
  position: absolute; /* Position absolutely within the ImgWrap */
  bottom: 0; /* Align the first image at the top */
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  transform: rotateX(0deg); /* Initial rotation */
  transition: transform 0.3s ease; /* Adding transition for smooth effect */
  z-index: 2;

  &:hover {
    transform: rotateX(10deg); /* Applying rotation on hover */
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.3);
    z-index: 2; /* Change z-index on hover */
  }
`;

export const Img2 = styled.img`
  width: 100%;
  position: absolute; /* Position absolutely within the ImgWrap */
  top: 50%; /* Align the second image at 50% from the top */
  left: 10%;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  transform: translateY(-50%) rotateX(0deg); /* Initial rotation and vertical centering */
  transition: transform 0.3s ease; /* Adding transition for smooth effect */
  z-index: 1;

  &:hover {
    transform: translateY(-50%) rotateX(-10deg); /* Applying rotation on hover */
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.3);
    z-index: 2; /* Change z-index on hover */
  }
`;

export const Img3 = styled.img`
  width: 100%;
  left: 30%;
  position: absolute; /* Position absolutely within the ImgWrap */
  top: 0; /* Align the third image at the bottom */
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  transform: rotateX(0deg); /* Initial rotation */
  transition: transform 0.3s ease; /* Adding transition for smooth effect */
  z-index: 0;

  &:hover {
    transform: rotateX(-10deg); /* Applying rotation on hover */
    z-index: 2; /* Change z-index on hover */
  }
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