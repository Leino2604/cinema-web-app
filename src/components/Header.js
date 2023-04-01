import React from 'react';
import './Header.css';
import Logo from '../assets/img/logo.png';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './HeaderElement';


function Header() {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <a href='./'><img src={Logo} alt='Logo' /></a>
        </NavLink>
        <Bars />

        <NavMenu>
          <NavLink to='/' activeStyle>
            About
          </NavLink>
          <NavLink to='/' activeStyle>
            Services
          </NavLink>
          <NavLink to='/' activeStyle>
            Contact Us
          </NavLink>
          <NavLink to='/' activeStyle>
            Sign Up
          </NavLink>
          <NavBtn>
            <NavBtnLink to='/'>Sign In</NavBtnLink>
          </NavBtn>
        </NavMenu>

        
      </Nav>
      
    </>
  )
}

export default Header;