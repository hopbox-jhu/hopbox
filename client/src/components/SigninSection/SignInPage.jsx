import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useAuth } from '../../context/AuthContext';
import * as postApi from "../../api/index";
import { afterReceiveAuth } from "../../api/auth"
import { notifications } from "@mantine/notifications";

function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const location = useLocation();
  //const setAuth = useAuth().setIsAuth;

  const handleSubmit = async() => {
    try {
      const response = await postApi.login(email, password);
      if (response.status === 200) {
        afterReceiveAuth(response.data.user_id, response.data.user_name, response.data.token);
      
        //const url = location.state ? location.state.from.pathname : "/";
        //setAuth(true);
        alert("Login successfully");
        // navigate to logged in user??
        const url = "http://localhost:5173/";
        notifications.show({
          title: "Login successfully",
          message: `Redirecting to ${url}`,
          autoClose: 1000,
          onClose: () => { 
            navigate(url);
          },
          loading: true,
          position: 'top-right',
        })
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

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#eae9f2' }}>
      <h2 style={{ marginBottom: '2rem', color: '#d6008e' }}>Sign In</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'white', padding: '2rem', borderRadius: '0.5rem', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}>
        <label style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '1rem' }}>
          Email:
          <input type="email" value={email} onChange={event => setEmail(event.target.value)} style={{ marginTop: '0.5rem', padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #d6008e' }} />
        </label>
        <label style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '1rem' }}>
          Password:
          <input type="password" value={password} onChange={event => setPassword(event.target.value)} style={{ marginTop: '0.5rem', padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #d6008e' }} />
        </label>
        <button type="submit" style={{ marginTop: '1rem', padding: '0.5rem 1rem', backgroundColor: '#d6008e', color: 'white', borderRadius: '0.25rem', border: 'none', cursor: 'pointer' }}>Sign In</button>
      </form>
      <p style={{ marginTop: '1rem' }}>Don't have an account? <Link to="/signup" style={{ color: '#d6008e', textDecoration: 'underline' }}>Create one</Link>.</p>
    </div>
  );
}

export default SignInPage;
