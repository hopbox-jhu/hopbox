import { Routes, Route } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Fivo Sans Modern';
    src: url('https://fonts.cdnfonts.com/css/fivo-sans-modern');
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Fivo Sans Modern', sans-serif;
  }
`;

import Landing from "./pages/Landing/Landing";
import Homepage from "./pages/Homepage";
import AddListing from "./pages/AddListing";
import Application from "./pages/Application";
import SignUpPage from "./pages/SignupSection/SignUpPage";
import SignInPage from "./pages/SigninSection/SignInPage";
import ProfilePage from "./pages/Profile";
import ListingPage from "./pages/ListingPage/Index";


function App() {
  const [isAuth, setIsAuth] = useState(false);
  const user = {
    profilePicture: 'https://www.gravatar.com/avatar/?d=mp',
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'No bio',
    address: "No address"
  };

  return (
      <AuthContext.Provider value={{ isAuth, setIsAuth }}>
        <>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/addlisting" element={<AddListing />} />
            <Route path="/application/:listingid" element={<Application />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/profile" element={<ProfilePage user={user} />} />
            <Route path="/listing/:id" element={<ListingPage />} />
          </Routes>
        </>
      </AuthContext.Provider>
  );
}

export default App;
