import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { MenuIcon, Nav, NavbarContainer, NavItem, NavLink, NavLogo, NavMenu, NavBtn, NavBtnLink, NavBtnLink2, NavBtnLink3, ImgLogo, NavSearch, NavSearchAndButton } from './MainNavbarElements';
import { ListingSearchBar } from "../listingSearch";
import { Avatar } from '@mantine/core';
import { RxDividerVertical } from "react-icons/rx";
import { AuthContext } from '../../context/AuthContext';
import { useAuth } from '../../context/AuthContext';
import { useContext } from 'react';

import logo from "/src/assets/images/logo.png";

const index = ({ onSearch, toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const { isAuth } = useContext(AuthContext); //TODO: not importing...

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  let signinButton = null;
  let signoutButton = null;
  let registerButton = null;
  let profile = null;
  const isSignedIn = localStorage.getItem("isSignedIn") === "true";
  if (!isSignedIn) {
    signinButton = (
      <NavBtnLink2 to="/signin">SIGN IN</NavBtnLink2>
    );
    registerButton = (
      <NavBtnLink3 to="/signup">REGISTER</NavBtnLink3>
    );
  }

  if (isSignedIn) {
    signoutButton = (
      <NavBtnLink2 to="/signin">SIGN OUT</NavBtnLink2>
    );
    const imageURL=localStorage.getItem("profilePicture");
    profile = (<Avatar radius='xl' src={imageURL} href="/profile" component="a" alt="no image here" />);
  }


  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };


  // function updateButtons() {
  //   const isSignedIn = localStorage.getItem("isSignedIn") === "true";
  //   const profilePicture = localStorage.getItem("profilePicture");
  //   const signInBtn = document.getElementById("signInBtn");
  //   const registerBtn = document.getElementById("registerBtn");
  //   const profileBtn = document.getElementById("profileBtn");
  //   signInBtn.style.visibility = isSignedIn ? 'hidden' : 'visible';
  //   registerBtn.style.visibility = isSignedIn ? 'hidden' : 'visible';
  //   profileBtn.style.visibility = isSignedIn ? 'visible' : 'hidden';
  // }


  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo onClick={toggleHome}>
              <ImgLogo src={logo} />
            </NavLogo>
            <NavSearchAndButton>
              <NavSearch>
                <ListingSearchBar onSearch={onSearch} />
              </NavSearch>
              <NavBtn>
                <NavBtnLink to="/addlisting">LIST YOUR SPACE</NavBtnLink>
                  <RxDividerVertical style={{ color: 'black', fontSize: '2.5rem', fontWeight: '0.2rem' }} />
                  {signinButton}
                  {registerButton}
                  {signoutButton}
                  {profile}
              </NavBtn>
            </NavSearchAndButton>
            <MenuIcon onClick = {toggle} >
              <FaBars style={{color: "EB65A0"}}/>
            </MenuIcon>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default index;