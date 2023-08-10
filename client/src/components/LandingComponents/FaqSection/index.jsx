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
      question: 'first question',
      answer: 'answer',
    },
    {
      question: '2nd question',
      answer: 'answer',
    },
    {
      question: '3rd',
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
