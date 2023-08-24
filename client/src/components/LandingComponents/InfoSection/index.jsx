import React from 'react';
import { Button } from '../ButtonElements';
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BulletList, BulletPoint, BulletText, BtnWrap, Img1, Img2, Img3, ImgWrap, NavLink } from './InfoElements'; // Make sure to import the necessary components and styles
import { useNavigate } from 'react-router-dom';
import framework1 from "../../../assets/images/framework1.png";
import framework2 from "../../../assets/images/framework2.png";
import framework3 from "../../../assets/images/framework3.png";


const InfoSection = ({ lightBg, id, imgStart, buttonLabel, img, alt }) => {
  const navigate = useNavigate();

  const handleNavigate = (event) => {
    navigate("/homepage");
  }

  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>Our Services</TopLine>
                <BulletList>
                  <BulletPoint>Find a good host for your belongings</BulletPoint>
                  <BulletText>Effortlessly find the perfect space that satisfies all your needs near your place. It could be your friend’s place too!</BulletText>
                  
                  <BulletPoint>Your Second Service</BulletPoint>
                  <BulletText>Description for the second service goes here.</BulletText>
                  
                  <BulletPoint>Your Third Service</BulletPoint>
                  <BulletText>Description for the third service goes here.</BulletText>
                </BulletList>
                <BtnWrap>
                  <NavLink to='services' smooth={true} duration={500} spy={true} exact='true' offset={-80} primary={1}>{buttonLabel}</NavLink>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img1 src={framework1} alt={alt} />
                <Img2 src={framework2} alt={alt} />
                <Img3 src={framework3} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
