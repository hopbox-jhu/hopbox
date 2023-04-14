import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
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


import Map from "./components/Map";
import AddListing from "./components/AddListing";

import SignUpPage from "./components/SignUpSection/SignUpPage";
import SignInPage from "./components/SigninSection/SignInPage";
import ProfilePage from "./components/Profile";


function App() {
  const [isAuth, setIsAuth] = useState(false);

  const user = {
    profilePicture: 'https://via.placeholder.com/100',
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consequat velit ut tortor consectetur, id tincidunt mauris volutpat. Sed ut mollis ex.',
    address: "3400 Charles St Baltimore MD, 21218"
  };

  return (

    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
    <>
      <GlobalStyle />
      <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/map" element={<Map />} />
      <Route path="/addlisting" element={<AddListing />} />
      <Route path="/application" element={<AddListing />} />
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
