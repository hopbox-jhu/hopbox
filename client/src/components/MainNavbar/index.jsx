import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { MenuIcon, Nav, NavbarContainer, NavItem, NavLink, NavLogo, NavMenu, NavBtn, NavBtnLink, NavBtnLink2, ImgLogo, NavSearch } from './MainNavbarElements';
import { ListingSearchBar } from "../../components/listingSearch";
import {RxDividerVertical} from "react-icons/rx";

import logo from "../../assets/logo.png";

const index = ({ onSearch }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false); 
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

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
              <NavBtnLink to="/signup">List Your Space</NavBtnLink>
              <span style={{ display: 'flex', alignItems: 'center', margin: '0 15px' }}><RxDividerVertical/></span>
              <NavBtnLink2 to="/signin">Sign In</NavBtnLink2>
              <NavBtnLink to="/signup">Register</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default index;
