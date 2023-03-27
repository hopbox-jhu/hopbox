import styled from 'styled-components';

export const ServicesContainer = styled.div`
  height: 25vh;
  display: flex;
  flex-direction: column;
  columns: 2;
  justify-content: center;
  align-items: center;
  background: #f7eeee;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 20px;
  max-height: 150px;
  padding: 10px;
  box-shadow: 0 4px 2px rgba(79, 48, 48, 0.447);
  transition: all 0.1s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.1s ease-in-out;
    cursor: pointer;
  }
`;



export const ServicesIcon = styled.img`
  height: 150px;
  width: 150px;
  margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
  font-size: 1.5rem;
  color: #090909;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
`;

export const Imgbg = styled.img`
  width: 90%;
  height: 55vh;

  @media screen and (max-width: 480px) {
    width: 450px;
    height: 800px;
  }

  @media screen and (max-width: 768px) {
    width: 700px;
    height: 900px;
  }
`;


export const Divider = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f2eded;
  height: 100vh;
  width: 100vw;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;