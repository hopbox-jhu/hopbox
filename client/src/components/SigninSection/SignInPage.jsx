import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, Label, Button, LinkText, LinkStyled, IconInput } from './SignInElements';

function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    // const user = await findUserByEmail(email);
    // if (user) {
    //   console.log('User signed in successfully!'); //not getting here
    //   // TODO: Redirect the user to the dashboard or homepage
    // } else {
    //   console.log('Invalid email or password');
    // }
  }

  return (
    <Container>
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
    </Container>
  );
}

export default SignInPage;
