import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { MenuIcon, Nav, NavbarContainer, NavItem, NavLink, NavLogo, NavMenu, NavBtn, NavBtnLink, NavBtnLink2, ImgLogo } from './NavbarElements';

import logo from "../../../assets/images/logo.png";

const Index = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    const screenWidthThreshold = 845; // Adjust this threshold to your preferred value
    if (window.innerWidth >= screenWidthThreshold) {
      if (window.scrollY >= 80) {
        setScrollNav(true);
      } else {
        setScrollNav(false);
      }
    }
  };

  useEffect(() => {
    changeNav(); // Call changeNav initially to set the initial state based on the screen size

    const handleScroll = () => {
      changeNav(); // Update scrollNav based on the screen size during scrolling
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#eb65a0', style: { marginTop: '0vw', }  }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo onClick={toggleHome}>
              <ImgLogo src={logo}/>
            </NavLogo>
            <MenuIcon onClick={toggle}>
              <FaBars />
            </MenuIcon>
            <NavMenu>
              <NavItem>
                <NavLink to='services' smooth={true} duration={500} spy={true} exact='true' offset={-80} >SIGN UP</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80}>ABOUT US</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='discover' smooth={true} duration={500} spy={true} exact='true' offset={-80}>TIMELINE</NavLink>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink2 to="/signin">SIGN IN</NavBtnLink2>
              <NavBtnLink to="/signup">REGISTER</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Index;
