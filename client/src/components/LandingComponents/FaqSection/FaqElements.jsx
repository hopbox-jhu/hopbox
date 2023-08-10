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
  NavLink
} from './FaqElements'; // Make sure to import the necessary components and styles
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'; // Import the styled-components library

const FixedFaqContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 50px; /* Adjust the top position as needed */
  max-height: calc(100vh - 100px); /* Adjust the max-height to allow scrolling within the FAQ section */
  overflow: auto;
`;

const FaqTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const FaqQuestion = styled(BulletPoint)`
  cursor: pointer;
  font-weight: bold;
  margin-bottom: 5px;
`;

const FaqAnswerContainer = styled.div`
  max-height: 150px; /* Set a fixed height for the answer container */
  overflow: auto; /* Enable scrolling within the answer container */
`;

const FaqAnswer = styled(BulletText)``;

const FaqSection = ({ lightBg, id, imgStart, buttonLabel, img, alt }) => {
  const navigate = useNavigate();

  const faqData = [
    {
      question: 'Find a good host for your belongings',
      answer: 'Effortlessly find the perfect space that satisfies all your needs near your place. It could be your friend’s place too!',
    },
    {
      question: 'Your Second Service',
      answer: 'Description for the second service goes here.',
    },
    {
      question: 'Your Third Service',
      answer: 'Description for the third service goes here.',
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
            <FixedFaqContainer>
              <FaqTitle>FAQ</FaqTitle>
              {faqData.map((item, index) => (
                <div key={index}>
                  <FaqQuestion onClick={() => handleQuestionClick(index)}>
                    {item.question}
                  </FaqQuestion>
                  <FaqAnswerContainer>
                    <FaqAnswer show={selectedQuestion === index}>
                      {item.answer}
                    </FaqAnswer>
                  </FaqAnswerContainer>
                </div>
              ))}
            </FixedFaqContainer>
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
