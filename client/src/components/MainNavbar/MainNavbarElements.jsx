import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';


export const Nav = styled.nav`
  background: #FFF1F6;
  height: 100px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: fixed;
  top: 0;
  z-index: 10;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(0, 0, 0, 0.2), transparent);
    z-index: 1;
  }
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
  flex: 0 0 5%;
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

export const NavSearchAndButton = styled.div`
padding: 10px;
display: flex;
align-items: center;
justify-content: space-between;
width: 90%;
margin-right: auto;
margin-left: auto;

@media screen and (max-width: 768px) {
  flex-wrap: wrap;
}

`;

export const NavLink = styled(LinkS)`
  color: #0b0a0a;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  display: flex;
  align-items: center;
  border-radius: 10px;
  white-space: nowrap;
  padding: 10px 20px;
  color: #EB65A0;
  font-size: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #F78BBF;
    color: white;
  }
`;
export const NavBtnLink2 = styled(LinkR)`
  display: flex;
  align-items: center;
  border-radius: 10px;
  white-space: nowrap;
  padding: 10px 20px;
  color: Black;
  font-size: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #f7d7e060;
  }
`;

export const NavSearch = styled(LinkR)`
  white-space: nowrap;
  padding: 10px;
  text-decoration: none;
  justify-self: flex-start;
  

`;


export const ImgLogo = styled.img`
  width: auto;
  height: 27px;
  @media screen and (max-width: 768px) {
    width: 15vw;
    height: 3vh;
  }
`;