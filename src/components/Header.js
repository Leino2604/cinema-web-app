import React from 'react';
import './Header.css';
import Logo from '../assets/img/logo.png';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './HeaderElement';


function Header() {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={Logo} alt='Logo' />
        </NavLink>
        <Bars />

        <NavMenu>
          <NavLink to='/' activestyle = "true">
            About
          </NavLink>
          <NavLink to='/' activestyle = "true">
            Services
          </NavLink>
          <NavLink to='/' activestyle = "true">
            Contact Us
          </NavLink>
          <NavLink to='/' activestyle = "true">
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