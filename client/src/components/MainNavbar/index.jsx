import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { MenuIcon, Nav, NavbarContainer, NavItem, NavLink, NavLogo, NavMenu, NavBtn, NavBtnLink, NavBtnLink2, ImgLogo, NavSearch } from './MainNavbarElements';
import { ListingSearchBar } from "../../components/listingSearch";
import {RxDividerVertical} from "react-icons/rx";
import { AuthContext  } from '../../context/AuthContext';
import { useAuth } from '../../context/AuthContext';
import { useContext } from 'react';

import logo from "../../assets/logo.png";

const index = ({ onSearch }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const { isAuth } = useContext(AuthContext); //TODO: not importing...

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false); 
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
    updateButtons();
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  function updateButtons() {
    const isSignedIn = localStorage.getItem("isSignedIn") === "true";
    const profilePicture = localStorage.getItem("profilePicture");
    const signInBtn = document.getElementById("signInBtn");
    const registerBtn = document.getElementById("registerBtn");
    const profileBtn = document.getElementById("profileBtn");
    signInBtn.style.visibility = isSignedIn ? 'hidden' : 'visible';
    registerBtn.style.visibility = isSignedIn ? 'hidden' : 'visible';
    profileBtn.style.visibility = isSignedIn ? 'visible' : 'hidden';
  }
  

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
              <NavLogo onClick={toggleHome}>
                <ImgLogo src={logo}/>
              </NavLogo>
              <NavSearch>
                <ListingSearchBar onSearch={onSearch} />
              </NavSearch>
            <NavBtn>
              <NavBtnLink to="/addlisting">List Your Space</NavBtnLink>
              <span style={{ display: 'flex', alignItems: 'center' }}><RxDividerVertical style={{color:'black', fontSize :'3.5rem'}} /></span>
              <NavBtnLink2 id="signInBtn" to="/signin">Sign In</NavBtnLink2>
              <NavBtnLink id="registerBtn" to="/signup">Register</NavBtnLink>
              <NavBtnLink id="profileBtn" to="/profile">Profile</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default index;