import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useAuth } from '../../context/AuthContext';
import * as postApi from "../../api/index";
import { afterReceiveAuth } from "../../api/auth"
import { notifications } from "@mantine/notifications";
import { Container, Form, Label, Button, LinkText, LinkStyled, IconInput, CoverBg, VideoBg, Content} from './SignInElements';
import Video from '../../videos/video.mp4';
import { AuthContext } from '../../context/AuthContext';
import React, { useContext } from 'react';


function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const setAuth = useAuth().setIsAuth;

  const handleSubmit = async(event) => {
    try {
      event.preventDefault();
      const response = await postApi.login(email, password);
      if (response.status === 200) {
        afterReceiveAuth(response.data.user_id, response.data.user_name, response.data.token);
        //const url = location.state ? location.state.from.pathname : "/";
        setAuth(true);
        alert("Login successfully");
        setTimeout(() => {
          navigate("/"); //TODO: eventually navigate to a signed in page...
        }, 100);
        // navigate to logged in user??
        // const url = "http://localhost:5173/";
        // notifications.show({
        //   title: "Login successfully",
        //   message: `Redirecting to ${url}`,
        //   autoClose: 1000,
        //   onClose: () => { 
        //     navigate(url);
        //   },
        //   loading: true,
        //   position: 'top-right',
        // })
      }
    } catch (err) {
      alert("Invalid email or password");
      // notifications.show({
      //   id: 'hello-there',
      //   withCloseButton: true,
      //   autoClose: 5000,
      //   title: 'Login failed',
      //   message: 'Invalid email or password',
      //   color: 'red',
      //   className: 'my-notification-class',
      //   loading: false,
      // })

      console.log(err)
    }
  }
 // async function handleSubmit(event) {
 //   event.preventDefault();
    // const user = await findUserByEmail(email);
    // if (user) {
    //   console.log('User signed in successfully!'); //not getting here
    //   // TODO: Redirect the user to the dashboard or homepage
    // } else {
    //   console.log('Invalid email or password');
    // }
  //}

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
          <IconInput type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email" icon="email" />
        </Label>
        <Label>
        <IconInput type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password" icon="password"/>
        </Label>
        <Button type="submit" style={{ height: '40px' }}>Sign In</Button>
      </Form>
      <LinkText>Don't have an account? <LinkStyled to="/signup">Create one</LinkStyled>.</LinkText>
    </Content>
    </Container>
  );
}

export default SignInPage;
