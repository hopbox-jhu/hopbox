import React from 'react';
import { Button } from '../ButtonElements';
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BulletList, BulletPoint, BulletText, BtnWrap, Img1, Img2, Img3, ImgWrap, NavLink } from './InfoElements'; // Make sure to import the necessary components and styles
import { useNavigate } from 'react-router-dom';
import framework1 from "../../../assets/images/framework1.png";
import framework2 from "../../../assets/images/framework2.png";
import framework3 from "../../../assets/images/framework3.png";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the CSS
AOS.init();

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
              <TextWrapper data-aos="zoom-in-right" data-aos-duration="1500" >
                <BulletList>
                  <BulletPoint>The Ultimate Student Storage Marketplace</BulletPoint>
                  <BulletText>HopBox connects students who have extra space with those who need it, right in your campus community. No more storage hassles, just convenience.</BulletText>
                  
                  <BulletPoint>For Those Who Have Space</BulletPoint>
                  <BulletText>If you've got space to spare during the summer and don't want to deal with the hassle of subletting, Hopbox offers a simple, secure way to earn extra income, making the most of your rent.</BulletText>
                  
                  <BulletPoint>For Those Who Need Space</BulletPoint>
                  <BulletText>If you are going to move out and have no place to store your belongings during breaks, Hopbox offers affordable, by-campus storage that is flexible in space and duration.</BulletText>
                </BulletList>
                <BtnWrap>
                  <NavLink to='services' smooth={true} duration={500} spy={true} exact='true' offset={-80} primary={1}>{buttonLabel}</NavLink>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap data-aos="zoom-in-left" data-aos-duration="1500">
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
