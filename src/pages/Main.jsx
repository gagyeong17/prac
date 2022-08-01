import React from 'react'
import styled from 'styled-components';

import MobileNav from '../components/header/MobileNav';
import Nav from "../components/header/Nav"

const Main = () => {
  return (
    <React.Fragment>
     <Nav/>
    <NavBar>
        <MobileNav style={{cursor:"pointer"}}/>
    </NavBar>
   </React.Fragment>
  )
}

const NavBar = styled.div`
@media all and (min-width: 501px) {
    display: none;
  }
`

export default Main