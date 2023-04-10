import styled from 'styled-components';

export const Divider = styled.div`
  display: flex;
  background: #EB65A0;
  height: 100vh;
  width: 100vw;

  @media screen and (max-width: 768px) {
    height: 200vh;
    flex-direction: column;
  }

  @media screen and (max-width: 480px) {
    height: 200vh;
    flex-direction: column;

  }
`;

export const ServicesContainer = styled.div`
  height: 100vh;
  width: 45vw;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    height: auto;
    width: 100vw;
  }

  @media screen and (max-width: 480px) {
    height: auto;
    width: 100vw;
  }
`;


export const ServicesWrapper = styled.div`
  max-width: 400px;
  margin-left:20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2vw;
`;

export const SignUpWrapper = styled.div`
  margin-top:10%;
  grid-gap: 16px;


  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesBox = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  height: 5vh;
  width : 10vw;
  padding: 10px;
  transition: all 0.1s ease-in-out;
  border-style: solid;
  border-width: 4px;

  &:hover {
    transform: scale(1.02);
    transition: all 0.1s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 480px) {
    width : 30vw;
  }

  @media screen and (max-width: 768px) {
    width : 30vw;
  }
`;


export const ServicesH1 = styled.span`
  font-size: 1.5vw;
  color: #ffffff;
  font-weight: 400;
  font-style: italic;

  margin-top: 10px;
  margin-left: 20px;
  line-height:1.3;

  @media screen and (max-width: 480px) {
    font-size: 3.5vw;
  }

  @media screen and (max-width: 768px) {
    font-size: 3.5vw;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1.3vw;
  font-style: italic;
  color:white;
  font-weight:500;
  
  @media screen and (max-width: 480px) {
    font-size: 4vw;
  }

  @media screen and (max-width: 768px) {
    font-size: 4vw;
  }
`;

export const ServicesH3 = styled.span`
  font-size: 2vw;
  color: #ffffff;
  font-weight: 900;
  margin-top: 10%;

  text-align: right;
  margin-right: 20px;

  @media screen and (max-width: 480px) {
    font-size: 6vw;
  }

  @media screen and (max-width: 768px) {
    font-size: 6vw;
  }
`;
export const ServicesP = styled.p`
  font-size: 1.5vw;
  text-align: right;
  margin-right: 40px;
  font-style: italic;
  margin-bottom: -30px;
  @media screen and (max-width: 1580px) {
    margin-bottom: 10px;
  }
  @media screen and (max-width: 480px) {
    font-size: 4vw;
  }
  @media screen and (max-width: 768px) {
    font-size: 4vw;
  }
`;

export const Imgbg = styled.img`
  width: 55vw;
  height: 100vh;
  object-fit: cover;

  @media screen and (max-width: 480px) {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }

  @media screen and (max-width: 768px) {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }
`;

export const Imgthingie = styled.img`
  width: 16vw;
  height: 5vh;
  margin-left: 23px;
  margin-bottom: -40px;

  @media screen and (max-width: 480px) {
    margin-bottom: -10px;
    width: 40vw;
    height: 4vh;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: -10px;
    width: 40vw;
    height: 4vh;
  }
`;

export const Imgword = styled.img`
  margin-top: 7%;
  margin-left: 20px;
  width: 28vw;
  height: 13vh;

  @media screen and (max-width: 480px) {
    width: 70vw;
    height: 12vh;
  }

  @media screen and (max-width: 768px) {
    width: 70vw;
    height: 12vh;
  }
`;

export const SubmitButton = styled.div`
  background: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  height: 5vh;
  width : 10vw;
  padding: 10px;
  transition: all 0.1s ease-in-out;
  border-style: solid;
  align-self: flex-end;
  margin-left: auto;
  margin-right: 5%;


  &:hover {
    transform: scale(1.02);
    transition: all 0.1s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 480px) {
    width : 30vw;
  }

  @media screen and (max-width: 768px) {
    width : 30vw;
  }
`;