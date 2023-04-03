import React, { useState } from 'react';
import { Container, Title, Form, Label, Input, Button, LinkText, LinkStyled, IconInput } from './SignUpElements';

function SignUpPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await createUser({ name, email, password }); // Create user document in MongoDB
      alert('Successfully signed up!');
    } catch (error) {
      alert('Error signing up');
    }
  }

  return (
    <Container>
    <img src="/src/assets/logo.png" alt="Logo" style={{ height: '120px' , padding: '20px'}} />
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
    </Container>
  );
}

export default SignUpPage;
