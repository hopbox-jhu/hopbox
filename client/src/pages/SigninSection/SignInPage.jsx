import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../context/AuthContext';
import * as postApi from "../../api/index";
import { afterReceiveAuth } from "../../api/auth"
import { Container, Form, Label, Button, LinkText, LinkStyled, IconInput, CoverBg, Content, HopBoxImage } from './SignInElements';
import React from 'react';

function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const setAuth = useAuth().setIsAuth;
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await postApi.login(email, password);
      if (response.status === 200) {
        afterReceiveAuth(response.data.user_id, response.data.user_name, response.data.token, response.data.email, response.data.bio, response.data.address, response.data.profilePicture, response.data.school, response.data.occupation, response.data.phone);
        setAuth(true);
        localStorage.setItem("isSignedIn", "true");
        alert("Login successfully");
        setTimeout(() => {
          navigate("/homepage");
        }, 100);
      }
    } catch (err) {
      alert("Invalid email or password");
      console.log(err)
    }
  }

  return (
    <Container>
      <CoverBg />
      <Content>
        <Link to="/">
          <HopBoxImage src="/src/assets/images/logo.png" alt="Logo" />
        </Link>
        <Form onSubmit={handleSubmit}>
          <Label>
            <IconInput type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email" icon="email" />
          </Label>
          <Label>
            <IconInput type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password" icon="password" />
          </Label>
          <Button type="submit" style={{ height: '40px' }}>Sign In</Button>
        </Form>
        <LinkText>Don't have an account? <LinkStyled to="/signup">Create one</LinkStyled>.</LinkText>
      </Content>
    </Container>
  );
}

export default SignInPage;
