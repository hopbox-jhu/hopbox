import styled from 'styled-components';

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
  font-weight: bold;
  margin-top: 10px;
  font-size: 36px;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
  background-color: pink;
`;

export const Label = styled.label`
  font-weight: bold;
  margin-top: 10px;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 4px;
  margin-top: 5px;
`;

export const GiantInput = styled.textarea`
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 4px;
  margin-top: 5px;
  height: 100px;
`;

export const Button = styled.button`
  background-color: #ff99cc;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
  margin-top: 10px;
`;
