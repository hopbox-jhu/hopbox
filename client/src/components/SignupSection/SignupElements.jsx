import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MailOutline, LockOutlined, PersonOutline } from '@mui/icons-material';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f1f1f1;
`;
export const Title = styled.h1`
  margin-bottom: 30px;
  color: #EB65A0;
  text-transform: uppercase;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  // align-items: center;
  background-color: #fff;
  padding: 60px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  label {
    font-size: 20px;
    margin-bottom: 20px;
  }

  input[type="email"],
  input[type="password"] {
    font-size: 18px;
    margin-top: 5px;
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: #f5f5f5;
    width: 100%;
    max-width: 400px;
    height: 40px;
    box-sizing: border-box;
  }
`;

export const Button = styled.button`
  margin-top: 20px;
  padding: 10px 30px;
  background-color: #EB65A0;
  color: #fff;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-size: 18px;
  ::placeholder {
    color: #aaa;
    font-size: 16px;
  }

  &:hover {
    background-color: #333;
  }
`;

export const LinkText = styled.p`
  margin-top: 20px;
  color: #333;
`;

export const LinkStyled = styled(Link)`
  color: #EB65A0;
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #333;
  }
`;

export const Input = styled.input`
  font-size: 18px;
  margin-top: 5px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #f5f5f5;
  width: 100%;
  max-width: 400px;
  height: 40px;
`;


export const Label = styled.label`
  font-size: 20px;
  margin-bottom: 30px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin-bottom: 0px;

  svg {
    margin-right: 10px;
  }
`;

const StyledInput = styled.input`
  font-size: 18px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #f5f5f5;
  width: 100%;
  height: 40px;
`;

export const IconInput = ({ icon, placeholder, ...rest }) => {
  return (
    <InputContainer>
      {icon === 'name' && <PersonOutline />}
      {icon === 'email' && <MailOutline />}
      {icon === 'password' && <LockOutlined />}
      <StyledInput placeholder={placeholder} {...rest} />
    </InputContainer>
  );
};
