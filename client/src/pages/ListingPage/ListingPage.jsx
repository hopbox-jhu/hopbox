import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Divider = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    height: 200vh;
    flex-direction: column;
  }
  @media screen and (max-width: 480px) {
    height: 200vh;
    flex-direction: column;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  height: 180px; 
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  img {
    margin-right: 16px;
    margin-left: 160px;
    margin-top: 40px;
    width: 160px;
    height: 160px;
    object-fit: contain; 
  }
`;

export const Container = styled.div`
display: flex;
background: #FFF1F6;
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

export const LeftContainer = styled.div`
height: 100vh;
width: 50vw;
display: flex;
flex-direction: column;
background-color: #FFF1F6;
margin-top: 40px;
align-items: center;

label {
  font-size: 30px;
  margin-bottom: 10px;
  align-items: left;
}


@media screen and (max-width: 768px) {
  height: auto;
  width: 100vw;
}

@media screen and (max-width: 480px) {
  height: auto;
  width: 100vw;
}
`;

export const RightContainer = styled.div`
height: 100vh;
width: 50vw;
display: flex;
background-color: #FFF1F6;
margin-top: 40px;
margin-left: 15px;
flex-direction: row;


@media screen and (max-width: 768px) {
  height: auto;
  width: 100vw;
}

@media screen and (max-width: 480px) {
  height: auto;
  width: 100vw;
}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  justify-content: flex-start;
  width: 70%;
  height: 80%;

  
  @media screen and (max-width: 768px) {
    height: 200vh;
    flex-direction: column;
  }
  @media screen and (max-width: 480px) {
    height: 200vh;
    flex-direction: column;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: auto;
  margin-bottom: 20px;
  margin-right: 20px;


  background-color: #fff;
  padding: 60px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  label {
    font-size: 25px;
    margin-bottom: 30px;
    margin-top: 20px;
  }

  text {
    font-size: 15px;
    margin-bottom: 20px;
    margin-top: 7px;
    color: darkGray;
  }
`;

export const PricingBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto auto auto;
  // gap: 20px;
  width: 280px;
  margin-top: 20px;


  background-color: #FFF;
  // padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;

  label {
    font-size: 25px;
    margin-bottom: 10px;
    grid-column: 1 / span 2;
  }

  .subtotal,
  .service-fee {
    background-color: #f2f2f23
    padding: 5px;
  }
  .total {
    background-color: #EB65A0;
    padding: 10px;
    font-size: 20px;
  }

  .price-per-month,
  .service-fee-amount{
    background-color: #f2f2f2;
    padding: 5px;
  }
  .total-amount {
    background-color: #EB65A0;
    padding: 10px;
    font-size: 20px;
    color: white;
  }

  .total {
    grid-column: 1 ;
    background-color: #EB65A0;
    color: white;
  }

  .total-amount {
    grid-column: 2;
  }
`;