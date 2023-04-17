import { Routes, Route } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import React, { useState } from 'react';


import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.cdnfonts.com/css/fivo-sans-modern');

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
import SignUpPage from "./pages/SignUpSection/SignUpPage";
import SignInPage from "./pages/SigninSection/SignInPage";
import ProfilePage from "./pages/Profile";


function App() {
  const [isAuth, setIsAuth] = useState(false);

  const user = {
    profilePicture: 'https://via.placeholder.com/100',
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'I am a student at JHU with extra storage space!',
    address: "3400 Charles St Baltimore MD, 21218"
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
      <Route path="/profile" element={<ProfilePage user={user}/>} />
      </Routes>
    </>
  </AuthContext.Provider>

    // <>
    // <GlobalStyle/>
    // <Routes>
    //   <Route path="/" element={<Landing />} />
    //   <Route path="/map" element={<Map />} />
    //   <Route path="/addlisting" element={<AddListing />} />
    //   <Route path="/application" element={<AddListing />} />
    //   <Route path="/signup" element={<SignUpPage />} />
    //   <Route path="/signin" element={<SignInPage />} />
    // </Routes>
    // <AuthContext.Provider value={{ isAuth, setIsAuth }}>
    //   {/* Your component tree */}
    // </AuthContext.Provider>
    // </>
  );
} 

export default App;
