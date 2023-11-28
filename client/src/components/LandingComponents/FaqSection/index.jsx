import React, { useState } from 'react';
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BulletList,
  BulletPoint,
  BulletText,
  BtnWrap,
  Img,
  ImgWrap,
  NavLink,
  FaqTitle,
  FaqQuestion,
  FaqAnswer
} from './FaqElements'; // Make sure to import the necessary components and styles
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'; // Import the styled-components library



const FaqSection = ({ lightBg, id, imgStart, buttonLabel, img, alt }) => {
  const navigate = useNavigate();

  const faqData = [
    {
      question: 'Why should I use HopBox over other services?',
      answer: (
        <div>
          <p><strong>Proximity and Accessibility:</strong> Conveniently located on campus, no need for a car or U-Haul.</p>
          <p><strong>Affordability:</strong> Budget-friendly storage tailored for students.</p>
          <p><strong>Tailored Space Options:</strong> Pay only for the space you need, avoiding costly oversized units.</p>
          <p><strong>Convenience in Classmate Connections:</strong> Connect with nearby classmates for affordable and convenient storage.</p>
          <p><strong>Space Flexibility for Last-Minute Needs:</strong> Quick, hassle-free storage, perfect for last-minute requirements.</p>
        </div>
      ),
    },
    {
      question: 'How can I trust my host/renter?',
      answer: (
        <div>
          <p><strong>Verification Process:</strong> Hosts and locations go through a thorough verification process.</p>
          <p><strong>Incentivized Safety:</strong> Payments may be delayed to ensure hosts maintain a safe environment, with monthly updates and pictures required.</p>
          <p><strong>School Affiliation:</strong> Users are affiliated with Johns Hopkins, and trust is placed in the student community.</p>
          <p><strong>Valuables Recommendation:</strong> We advise against storing valuables, reducing the risk of theft.</p>
          <p><strong>Rating System:</strong> Hosts with poor ratings for mishandling items will be exposed, and refunds issued for damaged or stolen items.</p>
        </div>
      ),
    },
    {
      question: 'What is the progress of HopBox right now?',
      answer: 'answer',
    },
    // Add more FAQ items as needed
  ];

  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleQuestionClick = (index) => {
    setSelectedQuestion(index === selectedQuestion ? null : index);
  };

  return (
    <InfoContainer lightBg={lightBg} id={id}>
      <InfoWrapper>
        <InfoRow>
          <Column1>
            <TextWrapper>
              <TopLine>FAQ</TopLine>
              <BulletList>
              {faqData.map((item, index) => (
                <div key={index}>
                  <FaqQuestion onClick={() => handleQuestionClick(index)}>
                    {item.question}
                  </FaqQuestion>
                  <FaqAnswer show={selectedQuestion === index}>
                    {item.answer}
                  </FaqAnswer>
                </div>
              ))}
              <BtnWrap>
                <NavLink
                  to='services'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                  primary={1}
                >
                  {buttonLabel}
                </NavLink>
              </BtnWrap>
              </BulletList>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default FaqSection;
