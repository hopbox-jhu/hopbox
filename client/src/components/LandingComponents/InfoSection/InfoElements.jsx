import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';

export const InfoContainer = styled.div`
  color: #fff;
  background-color: #EDEDED;


  @media screen and (max-width: 768px) {
    padding: 100px 0;
    height: 120%;
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
  @media screen and (max-width: 768px) {
    padding: 100px 0;
    height: 120%;
  }
  
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  justify-content: center;
  width: 100vw;
  grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
  }
`;

export const Column1 = styled.div`
 width: 100%;
  margin-bottom: 15px;
  margin-left: 20%;
  margin-right: 20%;
  grid-area: col1;

  @media screen and (max-width: 768px) {
  margin-left: 0%;
  }
`;

export const Column2 = styled.div`
 width: 100%;
 margin-left: 5%;
 margin-right: 5%;
  margin-bottom: 15px;
  grid-area: col2;
  @media screen and (max-width: 768px) {
  margin-left: 0%;
  margin-right: 0%;
  }
`;

export const TextWrapper = styled.div`
  width: 30vw;
  padding-top: 0;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 50%;
    padding:10%;
  }
`;

export const TopLine = styled.p`
  color: black;
  font-size: 2rem;
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

  width: 50vw;
  height: 800px; /* Change to auto to allow images to control height */
  position: relative; /* Needed for positioning child images */
  perspective: 1000px;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding:10%;
    height: 50vh
  }
`;

export const Img1 = styled.img`
  width: 70%;
  left: 30%;
  position: absolute; /* Position absolutely within the ImgWrap */
  top: 0; /* Align the first image at the top */
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  transform: rotate(-5deg) rotateY(20deg) rotateX(30deg); /* Initial rotation */
  transition: transform 0.5s ease; /* Adding transition for smooth effect */
  z-index: 2;

  &:hover {
    width: 80%;
    transform: rotateX(0deg); /* Applying rotation on hover */
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.3);
    z-index: 2; /* Change z-index on hover */
  }
`;

export const Img2 = styled.img`
  width: 70%;
  left:10%;
  position: absolute; /* Position absolutely within the ImgWrap */
  top: 50%; /* Align the second image at 50% from the top */
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  transform: translateY(-50%) rotate(-5deg) rotateY(20deg) rotateX(30deg); /* Initial rotation and vertical centering */
  transition: transform 0.3s ease; /* Adding transition for smooth effect */
  z-index: 1;

  &:hover {
    width: 80%;
    transform: translateY(-50%) rotateX(0deg); /* Applying rotation on hover */
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.3);
    z-index: 2; /* Change z-index on hover */
  }
`;

export const Img3 = styled.img`
  width: 70%;
  left: 30%;
  position: absolute; /* Position absolutely within the ImgWrap */
  bottom: 0; /* Align the third image at the bottom */
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  transform: rotate(-5deg) rotateY(20deg) rotateX(30deg); /* Initial rotation */
  transition: transform 0.3s ease; /* Adding transition for smooth effect */
  z-index: 0;

  &:hover {
    width: 80%;
    transform: rotateX(0deg); /* Applying rotation on hover */
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