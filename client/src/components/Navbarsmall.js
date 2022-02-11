import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
  
const Navbarsmall = (props) => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          <img src="./logo.png" width="90px" height="90px" />
          <NavLink to='/'>
            Home
          </NavLink>
          
          <NavLink to='/signup'>
            Sign Up
          </NavLink>
          
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
       
          <NavBtnLink to='/signin' onClick={props.setlogout(0)}>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbarsmall;