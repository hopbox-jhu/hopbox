import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';


export const Nav = styled.nav`
  background: #f4f0f4ff;
  height: 120px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: fixed;
  top: 0;
  z-index: 10;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    height:50px;
  }
`;


export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;

`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 3vw;

`;

export const MenuIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.2rem;
    cursor: pointer;
    color: #EB65A0;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  /* margin-right: -22px; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  
`;

export const NavLink = styled(LinkS)`
  color: #0b0a0a;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 3vw;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  display: flex;
  align-items: center;
  border-radius: 10px;
  background: #EB65A0;
  white-space: nowrap;
  padding: 10px 15px;
  color: #ffffff;
  font-size: 25px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  height:75%;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #f7d7e060;
  }
`;
export const NavBtnLink2 = styled(LinkR)`
  display: flex;
  align-items: center;
  border-radius: 10px;
  background: #ffffff00;
  padding: 10px 15px;
  color: #000000;
  font-size: 25px;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  height:75%;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #f7d7e060;
  }
`;

export const NavSearch = styled(LinkR)`
  white-space: nowrap;
  padding: 10px 15px;
  text-decoration: none;
  justify-self: flex-start;

`;


export const ImgLogo = styled.img`
  width: 130px;
  height: 5vh;
  @media screen and (max-width: 768px) {
    width: 15vw;
    height: 3vh;
  }
`;