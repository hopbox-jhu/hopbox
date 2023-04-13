import React, { useState } from "react";
import * as postApi from "../../api/index";
import { useNavigate } from "react-router-dom";
import { notifications } from "@mantine/notifications";
import { Link } from 'react-router-dom';
import { Container, Form, Label, Button, LinkText, LinkStyled, IconInput, CoverBg, VideoBg, Content } from './SignUpElements';
import Video from '../../videos/video.mp4';



function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const user = await postApi.createUser(name, email, password);
      if (user) {
        alert("Successfully created user.");
        setTimeout(() => {
          navigate("/signin");
        }, 100);
        // notifications.show({
        //   title: "Create new user successfully",
        //   message: "Welcome to Out of the nest",
        //   onClose: () => navigate("/signin"),
        // });
      }
    } catch (err) {
      alert("Failed to create user");
      console.log(err);
    }
  }

  return (
    <Container>
      <CoverBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </CoverBg>
    <Content>
    <Link to="/">
    <img src="/src/assets/logo.png" alt="Logo" style={{ height: '120px' , padding: '20px'}} />
    </Link>
      <Form onSubmit={handleSubmit}>
        <Label>
          <IconInput type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Name" icon="name" />
        </Label>
        <Label>
          <IconInput type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email" icon="email" />
        </Label>
        <Label>
          <IconInput type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password" icon="password"/>
        </Label>
        <Button type="submit">Sign Up</Button>
      </Form>
      <LinkText>Already have an account? <LinkStyled to="/signin">Sign in</LinkStyled>.</LinkText>
    </Content>
    </Container>
  );
}

export default SignUpPage;
